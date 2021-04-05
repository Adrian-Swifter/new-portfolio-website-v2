import React from "react"
import Header from "../components/header"
import Background from "../components/background"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Header />
      Email me at: <a href="mailto:milosdraskovic1282@gmail.com">milosdraskovic1282@gmail.com</a>
      <Background />
    </div>
  )
}