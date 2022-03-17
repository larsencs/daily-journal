/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p id="entry--${entry.id}">${entry.date}</p>    
            <p id="entry--${entry.id}">${entry.concept}</p>
            <p id="entry--${entry.id}">${entry.entry}</p>
        </section>
    `
}