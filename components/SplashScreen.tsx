import React, { useState, useEffect } from "react"
import Image from "next/image"
import anime from "animejs"

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false)
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })

    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className="flex h-screen items-center justify-center"
      isMounted={isMounted}
    >
      <Image id="logo" src="/logo.png" alt="" width={150} height={150} />
    </div>
  )
}

export default SplashScreen
