export const renderFilter = () =>{
    return `
    <fieldset>
        <label for="generic-search">Filter</label>
        <input type="text" name="generic-search" placeholder="Filter criteria" title="generic">
        <label for="date">Date</label>
        <input type="radio" title="date" name="selector">
        <label for="conccept">Concept</label>
        <input type="radio" title="concept" name="selector">
        <label for="radio">Radio</label>
        <input type="radio" title="mood" name="selector">
        <button type="button" id="search-btn">Search</button>
    </fieldset>
    `
}