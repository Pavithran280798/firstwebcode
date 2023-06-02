let div = document.createElement('div');
div.setAttribute('class','cointainer');
document.body.appendChild(div);

let div1 = document.createElement('div');
div1.setAttribute('class','row');
div.append(div1);

let div2 = document.createElement('div');
div2.setAttribute('class','col-sm-8');
div1.append(div2);

let form = document.createElement('form');
form.setAttribute('class','form-inline');
form.classList.add('select');
let form1 = document.querySelector('.select');

div2.append(form);
let div3 = document.createElement('div');
form.append(div3);

let input =document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('placeholder','type name here');
input.setAttribute('class','form-control');
input.classList.add('inputname');
let input1 = document.querySelector('.inputname')
div3.append(input);


let div4 = document.createElement('div');
div4.setAttribute('class','col-sm-4');
div1.append(div4);

let button = document.createElement('button');
button.setAttribute('class','btn');
button.classList.add('btn-primary','searchbutton');
let button1 = document.querySelector('.searchbutton');
button.textContent="Search";
div4.append(button);


let div5 = document.createElement('div');
div5.setAttribute('class','col-sm-12');
div5.classList.add('mt-4');
div.append(div5);

let div6 = document.createElement('div');
div6.setAttribute('class','row');
div6.classList.add('result');
let result = document.querySelector('.result');
div5.append(div6);

//create a paragraph
var paragraph = document.createElement('h4');
div6.append(paragraph);

var paragraph1 = document.createElement('h4');
div6.append(paragraph1);

var paragraph2 = document.createElement('h4');
div6.append(paragraph2);

//get name function
async function getname(word) {
    //make a api
    try {
            let response = await fetch(`https://api.nationalize.io/?name=${word}`);

            let data = await response.json();
            
            paragraph.innerText =`country_id: ${data.country[0].country_id} probability: ${data.country[0].probability}`;

            paragraph1.innerText =`country_id: ${data.country[1].country_id} probability: ${data.country[1].probability}`;

        } catch (error) {
      
        paragraph2.innerText =`error fecting`;
    }
}

//submit button
function handleSubmit(event) {
    event.preventDefault();

    let word =input.value;
    
    getname(word);
}

form.addEventListener('submit', handleSubmit);
button.addEventListener('click', handleSubmit);
