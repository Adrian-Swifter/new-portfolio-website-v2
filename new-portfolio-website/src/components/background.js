import React from "react"

export default function Background() {
  const width = typeof window !== `undefined` ? window.innerWidth : 0
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
