const add_note = () => {
  // Creates a new note and its props
  const new_note = document.createElement("div");
  const new_input = document.createElement("input");
  const new_form = document.createElement("form");
  const new_ol = document.createElement("ol");

  //Populates the new note with inputs and checkboxes
  for (let i = 0; i < 5; i++) {
    let new_li = document.createElement("li");
    let new_checkbox = document.createElement("input");
    new_checkbox.setAttribute("type", "checkbox");
    let new_li_input = document.createElement("input");
    new_li_input.classList.add("li_input");
    new_ol.appendChild(new_li);
    new_li.appendChild(new_checkbox);
    new_li.appendChild(new_li_input);
  }
  
  //New note's settings
  new_note.setAttribute("id", "note");
  new_note.classList.add("note");
  new_note.appendChild(new_input);
  new_input.classList.add("note_input");
  new_input.setAttribute("placeholder", "Note's title");
  new_note.appendChild(new_form);
  new_form.appendChild(new_ol);

  //Inserts the new note
  const note_block = document.getElementById("notes");
  note_block.appendChild(new_note);
};

//Removes all notes
const remove_note = () => {
  while (document.getElementById("note") != null) {
    document.getElementById("note").remove();
  }
  alert("All notes were removed.");
};

// Loads the buttons
const load_buttons = () => {
  document.getElementById("plus").addEventListener("click", add_note);
  document.getElementById("restart").addEventListener("click", remove_note);
};

// Main method
document.addEventListener("DOMContentLoaded", () => {
  load_buttons();
});
