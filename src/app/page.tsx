'use client'
import { useEffect } from "react";
import { listen } from '@tauri-apps/api/event'

export default function Home() {
  function listenToPickColor() {
    listen('pick', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (!window.EyeDropper) {
        console.log("Your browser does not support the EyeDropper API")
        return;
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      const eyeDropper = new EyeDropper()
      const result = await eyeDropper.open()
      console.log(result)
    })
  }
  useEffect(() => {
    listenToPickColor()
  })
  return (
    <div>
      <input type="color" id="myColor" v-model="hex" />
    </div>
  );
}
