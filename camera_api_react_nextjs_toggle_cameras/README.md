# My Projects

List of cool fun projects, sometime cutting edge technology sometime medieval technology.

## camera_api_react_nextjs_toggle_cameras
The goal of that project is to use the camera web api, get a list of all avaialble cameras and allow the client to pick whatever camera they want to use.

Web API of camera 
In this project we will:
1. activete the web api camera.
2. get the list of all avaialble cameras (in mobile phone we might have even 4 cameras).
3. allow the user to toggle and select between those cameras.


![](camera_api_react_nextjs_toggle_cameras_720p_m.gif)




------------------------------------------------------------------

## Work with secured ip domain

source:
https://github.com/vercel/next.js/discussions/10935#discussioncomment-3624120

brew instal mkcert nss
mkcert -install
mkcert localhost // change this localhost to your ip

change localhost to whatever your ip is. same for the name of the expected files:
localhost.pem
localhost-key.pem

than login to:
https://192.168.*.*:4000
or
https://localhost:4000

run command npm run dev:https

get your ip with:

ifconfig | grep 192.168

than in safari write 

window.location ="https://192.168.*.*:3000"
 

------------------------------------------------------------------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
