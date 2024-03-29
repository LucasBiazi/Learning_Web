//Adds a new note
const add_note = () => {
  // Creates a new note and its props
  const new_note = document.createElement("div");
  const new_input = document.createElement("input");
  const new_form = document.createElement("form");
  const new_ol = document.createElement("ol");
  const new_button = document.createElement("button");

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
  new_note.classList.add("note");
  new_note.appendChild(new_input);
  new_input.classList.add("note_input");
  new_input.setAttribute("placeholder", "Note's title");
  new_note.appendChild(new_form);
  new_ol.classList.add("ols");
  new_form.appendChild(new_ol);
  new_note.appendChild(new_button);
  new_button.classList.add("more_items");

  //Inserts the new note and button
  const note_block = document.getElementById("notes");
  note_block.appendChild(new_note);
  new_button.addEventListener("click", add_more_items);
  new_button.innerHTML = "+";
};

//Adds more items
const add_more_items = (e) => {
  const new_ol = e.target.parentNode.querySelector("ol");
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
};

//Removes all notes
const remove_note = () => {
  let amount_of_notes = document.getElementsByClassName("note").length;
  let set_fade = () => {
    while (amount_of_notes != 0) {
      amount_of_notes--;
      document
        .getElementsByClassName("note")
        [amount_of_notes].classList.add("deleted_note");
    }
  };
  let delete_all = () => {
    amount_of_notes = document.getElementsByClassName("deleted_note").length;
    while (amount_of_notes != 0) {
      amount_of_notes--;
      document.getElementsByClassName("deleted_note")[amount_of_notes].remove();
    }
  };
  set_fade();
  setTimeout(delete_all, 200);
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
