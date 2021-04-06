import React from "react"
import useWindowDimensions from "../useWindowDimensions"

export default function Background() {
  if (typeof window !== "undefined") {
    const { height, width } = useWindowDimensions()
  }
  return (
    <div className="bg-image-wrapper">
      <img
        className="bg-image"
        src={`https://source.unsplash.com/random/${
          width < 769 ? "500x750" : "1600x900"
        }`}
        alt=""
      />
    </div>
  )
}
