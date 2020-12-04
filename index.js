
/*
 - Create a variable named "entryForm" and use the document.getElementById method
   to make its value the entryForm from our HTML document.
*/
const entryForm=document.querySelector("#entryForm");
/*
    create a new variable named "entriesSection" and assign it
    a value of the HTML section  i.e enteries
*/
const entriesSection=document.querySelector("#entries");
/*
 - Add an event listener to the entryForm variable that prevents the page from
   reloading whenever the submit button is clicked.
*/
const entryTextbox=document.querySelector(".entry-textbox");
/*
  - Inside the addEntryToDom function, create a new variable named entryDiv.
  - Use the document.createElement method to create an html Div and make it the
      new variable's value.
  - On a new line, give the new div a class of 'single-entry'.
  - Change the div's innerText property to the user's input from the textbox
  - Use the appendChild method to add the new div to the entriesSection
      variable created on line 2
*/
const entriesNav = document.querySelector(".entries-nav");

let count = 1;
function addEntryToDom(event) {
    event.preventDefault();// Screen will not be refresh
    const entryDiv=document.createElement("div");
    entryDiv.classList.add("single-entry");
    entryDiv.innerText=entryTextbox.value;
    entryDiv.style.display="none";
    
    entriesSection.appendChild(entryDiv);
    entryTextbox.value="";// clear the entry textbox whenever the submit button is clicked
/*
  - In the addEntryToDom() function, create a new variable named
      displayEntryButton.
  - Use the document.createElement method to create an HTML button
      and make that the value of the new variable.
  - Use the innerText property to set the button's inner text to "1";
  - Append the button to the entriesNav div we created on line 4.
*/
    
    const displayEntryButton=document.createElement("button");
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText=count	;
/*
  - increment the button count whenever the submit button is clicked
  - hint: use a variable to represent the displayButton.innerText value
      on line 21
*/
    entriesNav.appendChild(displayEntryButton);
    count++;
    /*
      - Add a click event listener to the displayEntryButton.
      - Set the display property of the entryDiv to 'block' whenever
          it's clicked.
    */
    displayEntryButton.addEventListener('click',function(){
    	 const allEntries=document.querySelectorAll(".single-entry");
    	for (let i=0;i<allEntries.length;i++){
    		allEntries[i].style.display="none";
        }
        entryDiv.style.display="block";
    })

/*
      - Inside the displayEntryButton addEventListener function,
          create a new variable named 'allEntries'.
      - use the document.queryselectorAll method to select all
          elements with the class of 'single-entry' and make that the
          value of the new allEntries variable.
 */

    
}
entryForm.addEventListener('submit',addEntryToDom)
