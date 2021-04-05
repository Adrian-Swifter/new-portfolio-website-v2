import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          {" "}
          <Link style={{ marginRight: "20px" }} to="/">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </header>
  )
}
