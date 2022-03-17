/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "02/14/2022",
        concept: "First day",
        entry: "Started my first day at NSS. What a rush!",
        mood: "Neutral"
    }
    ,
    {
        id: 2,
        date: "02/19/2022",
        concept: "A week of functions",
        entry: "We started out with a whole week of writing functions, which was a nice refresher from the pre-work.",
        mood: "Happy"
    }
    ,
    {
        id: 3,
        date: "03/6/2022",
        concept: "Json-server sucks",
        entry: "This week is all about fetching data from a server, and working with asynchronous data. It sucks.",
        mood: "Sad"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}