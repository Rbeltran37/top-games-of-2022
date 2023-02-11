import React from "react"

var isGameSelected = false
var canScroll = true
var isAnimationInProgress = false

export default function Cards(props) {
    return (
        <div id={props.item.cardPosition} onClick={selectedGame} >
            <img src={props.item.image} id="cover-picture" alt="game cover" />
            <div id={props.item.id} className="cover-picture-container">
                <div className="description" id="game-4-description">{props.item.description}</div>
                <div className="release-date" id="game-4-info">Metascore: {props.item.metascore} <br></br>User Score: {props.item.userscore} <br></br><br></br>Release Date: {props.item.releaseDate}<br></br><br></br>Publisher: {props.item.publisher}<br></br>Developer: {props.item.developer}</div>
                <a href={props.item.storeLink} target="_blank" rel="noreferrer" onClick={preventclose}><img src={props.item.storeImage} className="steam" id="game-4-steam" alt="store icon" /></a>
            </div>
        </div>
    )
}

function selectedGame(e) {
    var parent = e.currentTarget.children[1]
    var children = parent.children
    if (!isGameSelected && !isAnimationInProgress && e.currentTarget.id === "game-4") {
        document.getElementById("active-screenshot").src = "./images/screenshot" + parent.id + ".jpg"
        document.getElementById("active-screenshot").style.visibility = "visible"
        document.getElementById("game-6").id = "game-6-moved"
        document.getElementById("game-5").id = "game-5-moved"
        document.getElementById(e.currentTarget.id).style.width = "40%"
        document.getElementById("game-3").id = "game-3-moved"
        document.getElementById("game-2").id = "game-2-moved"
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove("makeTextAppear")
            void children[i].offsetWidth
            children[i].classList.add("makeTextAppear")
        }
        isGameSelected = true
        canScroll = false
        isAnimationInProgress = true
        setTimeout(() => {
            isAnimationInProgress = false
        }, "1000")
    }
    else if (isGameSelected && !isAnimationInProgress && e.currentTarget.id === "game-4") {
        //document.getElementById("active-screenshot").style.visibility = "hidden"
        document.getElementById("game-6-moved").id = "game-6"
        document.getElementById("game-5-moved").id = "game-5"
        document.getElementById(e.currentTarget.id).style.width = "18%"
        document.getElementById("game-3-moved").id = "game-3"
        document.getElementById("game-2-moved").id = "game-2"
        isAnimationInProgress = true
        setTimeout(() => {
            isAnimationInProgress = false
            isGameSelected = false
            canScroll = true
        }, "1000")
    }
}

function preventclose(event) {
    event.stopPropagation();
}

function scrollLeft() {
    canScroll = false
    document.getElementById("game-0").id = "game-10"
    document.getElementById("game-1").id = "game-0"
    document.getElementById("game-2").id = "game-1"
    document.getElementById("game-3").id = "game-2"
    document.getElementById("game-4").id = "game-3"
    document.getElementById("game-5").id = "game-4"
    document.getElementById("game-6").id = "game-5"
    document.getElementById("game-7").id = "game-6"
    document.getElementById("game-8").id = "game-7"
    document.getElementById("game-9").id = "game-8"
    document.getElementById("game-10").id = "game-9"
    setTimeout(() => {
        canScroll = true
    }, "1000")
}

function scrollRight() {
    canScroll = false
    document.getElementById("game-9").id = "game-10"
    document.getElementById("game-8").id = "game-9"
    document.getElementById("game-7").id = "game-8"
    document.getElementById("game-6").id = "game-7"
    document.getElementById("game-5").id = "game-6"
    document.getElementById("game-4").id = "game-5"
    document.getElementById("game-3").id = "game-4"
    document.getElementById("game-2").id = "game-3"
    document.getElementById("game-1").id = "game-2"
    document.getElementById("game-0").id = "game-1"
    document.getElementById("game-10").id = "game-0"
    setTimeout(() => {
        canScroll = true
    }, "1000")
}

window.addEventListener("wheel", event => {
    if (event.deltaY < 0 && canScroll && !isGameSelected) {
        scrollRight()
    }
    else if (event.deltaY > 0 && canScroll && !isGameSelected) {
        scrollLeft()
    }
});