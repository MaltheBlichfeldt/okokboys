import React from "react"
import containerStyles from "./podcast.module.css"

export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)