import React from "react";

export default function Background() {

    var darkmode = false

    function changeBackground() {
        darkmode = !darkmode
        darkmode ? document.body.style.backgroundColor = "#262626" : document.body.style.backgroundColor = "#e6e6e6"
        console.log(darkmode)
    }

    return (
        <div>
            <img src="./images/logo.png" className="logo" />
            <img src="./images/chair.png" className="chair" />
            <img src="./images/table.png" className="table" />
            <img src="./images/monitor.png" className="monitor" />
            <div className="screenshot" />
            <img src="" id="active-screenshot" />
            <img src="./images/plant.png" className="plant" />
            <img src="./images/lamp.png" className="lamp" onClick={changeBackground} />
        </div>
    )
}