let postCollection = [];

export const usePostCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...postCollection];
}

// Fetches data from server and then parses it into a date-sorted format
export const getJournalData = () =>{
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
        .then(entries => {
            let sortedByDate = entries.sort(
                (currentEntry, nextEntry) =>
                    Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
            )
            // return sorted json data
            return sortedByDate
        })
        
}

export const createPost = postObj =>{
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    })
        .then(response = response.json())
}