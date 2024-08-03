// Creating the needed arrays
const randoHome = [{
  houseName: 'Gryffindor',
  img: 'https://www.logodesign.org/wp-content/uploads/2021/12/21249HP_600x.jpg'
},
{
  houseName: 'Hufflepuff',
  img: 'https://www.logodesign.org/wp-content/uploads/2021/12/Unknown.jpeg'
}, 
{
  houseName: 'Ravenclaw',
  img: 'https://www.logodesign.org/wp-content/uploads/2021/12/184-1840811_ravenclaw-crest-harry-potter-harry-potter-ravenclaw-house.jpg'
}, 
{
  houseName: 'Slytherin',
  img: 'https://www.logodesign.org/wp-content/uploads/2021/12/5390e974544de6279c4d9cb6253e3a2c.jpeg'
},];
const firstYears = [];
const byeBozo = [];
// Getting my cars on the DOM
const cardsOnDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

// Building the cards for the students that will go on the DOM
const studentCard = (taco) => {
  let showOnDom = '';
  taco.forEach((item, i) => {
    showOnDom += `<div class="card mb-3 " style="max-width: 540px;" id=${i}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${item.house.img}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <p class="card-title">${item.name}</p>
                          <p class="card-text">${item.house.houseName}</p>
                          <button type="button" class="btn btn-danger" id=${i}>Expel</button>
                        </div>
                      </div>
                    </div>
                  </div>`
  })
  cardsOnDom('#studentCard', showOnDom);
}
// Building the cards that will go into the expelled student categories.
const bozoCard = (taco) => {
  let blockHeads = '';
  taco.forEach((item, i) => {
    blockHeads += `<div class="card m-1" style="width: 12rem;" id=${i}>
                    <img src="https://images.fun.com/products/88716/1-1/harry-potter-lego-lord-voldemort-plush.jpg" alt="Future Clown">
                    <div class="card-body text-center">
                      <p class="h6 card-text text-dark">We have sadly lost <span class="text-danger">${item.name}</span> to the dark side.</p>
                    </div>
                  </div>`
  })
  cardsOnDom('#exStudent', blockHeads);
}
// Getting the info to put on the card
const getStudentInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#studentName').value;
  const house = randoHome[Math.floor(Math.random() * randoHome.length)];
  const obj = {
    name,
    house,
  }
  firstYears.push(obj);
  studentCard(firstYears);
  document.querySelector('form').reset();
}
// Expelling students
const expelStudent = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;
  if (targetType === 'button') {
    byeBozo.push(...firstYears.splice(targetId, 1));
  }  
  bozoCard(byeBozo);
  studentCard(firstYears);
}
// Getting the form to appear when prompted
const buttonFunc = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'showForm') 
    document.querySelector('#hideForm').style.display = 'block';
  }
// Assigning the action for what each button should pull
const formBtn = document.querySelector('#showForm').addEventListener('click', buttonFunc)
const submitForm = document.querySelector('form').addEventListener('submit', getStudentInfo)
const bozoBtn = document.querySelector('#studentCard').addEventListener('click', expelStudent)
// Making sure it happens
const showForm = () => {
  formBtn();
  submitForm();
  bozoBtn();
  studentCard(firstYears);
}

showForm()
