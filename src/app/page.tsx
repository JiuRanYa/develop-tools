'use client'
import { useEffect } from "react";

export default function Home() {
  // function listenToPickColor() {
  //   listen('pick', async () => {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-expect-error
  //     if (!window.EyeDropper) {
  //       console.log("Your browser does not support the EyeDropper API")
  //       return;
  //     }
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     //@ts-expect-error
  //     const eyeDropper = new EyeDropper()
  //     const result = await eyeDropper.open()
  //     console.log(result)
  //   })
  // }
  useEffect(() => {
    window.location.href = 'https://weread.qq.com'
  })
  return (
    <div className="flex p-4" />
  );
}
