import { JournalEntryComponent } from "./feed/entryFormat.js"
import { getJournalData } from "./data/dataManager.js"
import {formatJournal} from "/scripts/feed/formatJournal.js"
import {usePostCollection, createPost} from "./data/dataManager.js"
import {renderFilter} from "./feed/filterFormat.js"
// import {header} from "/scripts/nav/header.js"
// import {footer} from "/scripts/nav/footer.js"

//Renders the journal object for users to write in
const renderJournal = () =>{
    document.querySelector(".creation-form").innerHTML += formatJournal;
}
const showFilter = () =>{
    const navElement = document.querySelector(".filter-form")
    navElement.innerHTML += renderFilter();
}
const showHeader = () =>{
    const navElement = document.querySelector("header")
    navElement.innerHTML = header();
}
const showFooter = () =>{
    const navElement = document.querySelector("footer")
    navElement.innerHTML = footer();
}
const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entryLog = document.querySelector(".entry-list")
    let dataToRender = ""
    getJournalData().then(journalEntries =>{
        for(const entry of journalEntries){
          dataToRender += JournalEntryComponent(entry)
        }
        entryLog.innerHTML += dataToRender
    })
    
}
const startJournal = () =>{
    // showHeader();
    EntryListComponent();
    showFilter();
    renderJournal();
    // showFooter();
}

startJournal();

const applicationElement = document.querySelector(".entry-list")

applicationElement.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id.startsWith("entry")){
        console.log(clickEvent.target.id)
    }
})

const journalElement = document.querySelector(".journal-el")

journalElement.addEventListener("click", event =>{
    
    if(event.target.id === "record-entry"){
        event.preventDefault()
        const concept = document.querySelector("input[name='concepts-covered']").value
        const entry = document.querySelector("textarea[name='journal-entry']").value
        const mood = document.querySelector("select[name='mood-selector']").value
        const date = document.querySelector("date[name='journal-date']").value

        const newEntry = {
            "date": date,
            "concept": concept,
            "entry": entry,
            "mood": mood
        }
        createPost(newEntry)
            .then(func =>{
                concept.innerHTML = ""
                entry.innerHTML = ""
            })
            .then(EntryListComponent())
    }
})



