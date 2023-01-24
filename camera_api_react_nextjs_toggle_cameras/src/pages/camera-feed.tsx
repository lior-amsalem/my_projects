import React, { Component } from 'react';
import styles from '@/styles/Camera.module.css'

interface CameraFeedPropsInterface {
    sendFile: any
}

interface CameraFeedStateInteraface {
    avaialbleCamerasDevices: CameraDeviceInputInfoInterface[]
    selectCamerasDeviceById: string
}

interface CameraDeviceInputInfoInterface {
    deviceId: string;
    groupId: string;
    kind: string;
    label: string;
}

export class CameraFeed extends Component<CameraFeedPropsInterface,CameraFeedStateInteraface> {
    videoPlayer: any;
    canvas: any;

    constructor(props: CameraFeedPropsInterface) {
        super(props);
        this.state = {
            avaialbleCamerasDevices: [],
            selectCamerasDeviceById: ''
        };
    }

    /**
     * when component mount, we'll initialize the camera api via the dom element of <video>
     * @memberof CameraFeed
     */
    async componentDidMount() {
        const cameras = await this.getListOfCameras();
        this.setState({
            avaialbleCamerasDevices: cameras
        });

        this.initializeCamera(cameras);
    }

    /**
     * initialize camear with the first devices that we can find.
     * @param devices list of all avaialble devices (video inputs)
     */
    initializeCamera(devices: CameraDeviceInputInfoInterface[]) {
        const firstDeviceWeFound = devices.find((device) => {
            return device;
        }) as CameraDeviceInputInfoInterface;

        this.setDevice(firstDeviceWeFound);
    }

    /**
     * 
     * @returns array of objects of all video inputs
     */
    async getListOfCameras() {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter((device) => device.kind === 'videoinput');
        return cameras;
    }

    /**
     * Sets the active device and starts playing the feed
     * @memberof CameraFeed
     * @instance
     */
    async setDevice(device: CameraDeviceInputInfoInterface) {
        this.setState({
            selectCamerasDeviceById: device.deviceId
        });
        const { deviceId } = device;
        const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { deviceId } });
        this.videoPlayer.srcObject = stream;
        this.videoPlayer.play();
    }


    /**
     * capture photo from the canvas and convert it to jpeg base64 and feed it to a callback function coming as a prop
     * @memberof CameraFeed
     */
    capturePhoto = () => {
        const { sendFile } = this.props;
        const context = this.canvas.getContext('2d');
        context.drawImage(this.videoPlayer, 0, 0, 680, 360);
        const dataBase64 = this.canvas.toDataURL("image/jpeg");
        sendFile(dataBase64);
    }

    /**
     * 
     * @param deviceId string of the device id we want to actively select
     */
    pickCameraDevice = (deviceId: string) => {
        const device: CameraDeviceInputInfoInterface = this.state.avaialbleCamerasDevices.find((device: CameraDeviceInputInfoInterface) => device.deviceId === deviceId) as CameraDeviceInputInfoInterface;
        this.setDevice(device);
    }

    render() {
        return (
        <div className={styles.camera_container}>
            <div className={styles.list_of_avaialble_cameras}>
                {<select onChange={(e) => this.pickCameraDevice(e.currentTarget.value)}>
                    <option disabled>Pick Camera</option>§
                   {this.state.avaialbleCamerasDevices.map((camera: CameraDeviceInputInfoInterface) => {
                    return <option key={camera.deviceId} value={camera.deviceId} selected={this.state.selectCamerasDeviceById === camera.deviceId}>{camera.label}</option>
                   })}
                </select>}
            </div>
            <div>
                <video ref={ref => (this.videoPlayer = ref)} width="680" height="360" />
            </div>
            <button onClick={this.capturePhoto} className={styles.capture_photo}>Capture photo</button>
            <div className={styles.stage}>
                <canvas width="680" height="360" ref={ref => (this.canvas = ref)} />
            </div>
        </div>
        );
    }
}
