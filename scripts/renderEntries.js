/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getJournalEntries } from "./entryData.js"
import { JournalEntryComponent } from "./entryFormat.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entry-list")

export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entries = getJournalEntries()
    let renderElements = ""
    
    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        renderElements += JournalEntryComponent(entry)
    }
    entryLog.innerHTML += renderElements
}