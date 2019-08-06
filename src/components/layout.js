import React from "react"
import '../layouts/main.scss'

export default ({ children }) => (
  <div className="row">
    <div className="col-xs-12">
     {children}
    </div>
  </div>
)