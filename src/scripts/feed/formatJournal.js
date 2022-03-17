export const formatJournal = () =>{
    
    return `
    <div class="nav-el">
    <div class="generate-title-el">
    <!-- empty div to display title -->
    </div>
    <div class="user-form">
    <form action="" class="journal-el">
        <div class="glow-shadow"></div>
        <fieldset>
    
        <div class="form-div">   
                <label for="concepts-covered">Concepts Covered</label>
                <input type="text" name="concepts-covered" placeholder="Title goes here">
                <label for="journal-date">Date of entry</label>
                <input type="date" name="journal-date" id="date-of-entry">
                <label for="mood-selector">Mood</label>
                <select name="mood-selector">
                    <option value="Happy">Happy</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Sad">Sad</option>
                </select>
        </div>
        <div class="journal-div">
            <textarea name="journal-entry" id="" cols="25" rows="10" placeholder="Type your journal entry here"></textarea>
        </div>
        <div class="form-button-el">
            <button id="record-entry">Record Journal Entry</button>
        </div>
    </fieldset>
    </form>
    </div>
    
    </div> 
    `
}

