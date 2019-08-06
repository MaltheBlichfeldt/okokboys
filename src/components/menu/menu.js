import React from 'react'
import Link from "gatsby-link"

import '../menu/menu.module.scss'

const Menu = () => (
    <div className="MenuWrapper">
        <div className="menu">
        <a href="www.facebook.com/okokboyspodcast">
        <svg class="paddingicon" xmlns="http://www.w3.org/2000/svg" width="50" height="100.799" viewBox="0 0 100.799 100.799">
            <g id="_69407" data-name="69407" transform="translate(0 0)">
            <g id="Group_18" data-name="Group 18">
            <path id="Path_14" data-name="Path 14" d="M50.4,0a50.4,50.4,0,1,0,50.4,50.4A50.457,50.457,0,0,0,50.4,0ZM62.933,52.174h-8.2V81.4H42.583V52.174H36.808V41.845h5.776V35.163c0-4.785,2.274-12.262,12.262-12.262l9,.035V32.963H57.314a2.474,2.474,0,0,0-2.576,2.814v6.07h9.257Z"/>
            </g>
            </g>
        </svg>
        </a>

        <a href="www.instagram.com/okokboyspodcast">
        <svg class="paddingicon" xmlns="http://www.w3.org/2000/svg" width="50" height="100.799" viewBox="0 0 100.799 100.799">
        <g id="_69366" data-name="69366" transform="translate(0 0)">
          <g id="Group_20" data-name="Group 20">
            <g id="Group_19" data-name="Group 19">
              <path id="Path_15" data-name="Path 15" d="M29.943,40.035A10.073,10.073,0,1,0,19.857,29.944,10.106,10.106,0,0,0,29.943,40.035Z" transform="translate(20.455 20.454)"/>
              <path id="Path_16" data-name="Path 16" d="M40.609,23.676V13.96l-1.265,0-8.453.026.032,9.718Z" transform="translate(31.821 14.38)"/>
              <path id="Path_17" data-name="Path 17" d="M50.4,0a50.4,50.4,0,1,0,50.4,50.4A50.457,50.457,0,0,0,50.4,0ZM79.062,44.518V67.986a11.09,11.09,0,0,1-11.078,11.08H32.815a11.089,11.089,0,0,1-11.078-11.08V32.817A11.088,11.088,0,0,1,32.815,21.738H67.982a11.09,11.09,0,0,1,11.08,11.078Z"/>
              <path id="Path_18" data-name="Path 18" d="M52.216,27.81a15.677,15.677,0,1,1-30.2-5.881H13.457V45.4a5.493,5.493,0,0,0,5.493,5.489H54.118A5.5,5.5,0,0,0,59.611,45.4V21.929H51.05A15.463,15.463,0,0,1,52.216,27.81Z" transform="translate(13.862 22.589)"/>
            </g>
          </g>
        </g>
      </svg>
      </a>
           {/*} <Link to="/about" className="menuItem">about page</Link> 
            <Link to="/about" className="menuItem">about page</Link> 
<Link to="/about" className="menuItem">about page</Link> */}
        </div>
    </div>
)

export default Menu
