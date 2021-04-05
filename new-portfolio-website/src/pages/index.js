import React from "react"
import Background from "../components/background"
import Header from "../components/header"
import Main from "../components/main"

export default function Home() {
  return (
    <div>
      <Header className="header"/>
      <Main />
      <Background />
    </div>
  )
}
