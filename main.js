// I am beginning by figuring out all of the components I need before just wrinting a bunch of things out then figuring out where to put it.
// The first thing I will do is declare const for my arrays since I know I will have to have those at some point.

const students = [];

const bootedStudents = [];

// Next thing I know I will need is are my functions to create my cards for the students and to get them onto the dom.
// I will be pulling the functions from my pet adoption project just so I don't waste time working it all out again.

const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };
  
// This function I had to change from a for of loop to a for each loop because of the requirements.
// Now I need to adjust the card to fit the students instead of a pet adoption page.
  const cardsOnDom = (array) => {
    let domString = "";
    array.forEach((student, i) => {
      domString += `<div class="card" style="width: 18rem;" id=${i}>
      <div class="card-header">
      ${student.name}
      </div>
      <div class="card-body">
        <p class="card-title">${student.house}</p>
        <button class="btn btn-danger" id="${i}">Toodle-oo</button>
      </div>
      <div class="card-footer text-body-secondary">
      ${student.type}
      </div>
    </div>`;
    })
  
    renderToDom("#wiz", domString);
  };