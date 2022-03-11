import {formatJournal} from "/scripts/formatJournal.js"

export const renderJournal = () =>{
    let renderData = formatJournal;
    console.log(renderData)
    document.querySelector(".creation-form").innerHTML += formatJournal;
}