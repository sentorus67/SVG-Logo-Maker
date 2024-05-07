const colors= require("colors");
const fs= require("fs");
const inquirer=require("inquirer");
const svg =require("svg");
const jsdom = require("jsdom");

const { type } = require("os");

const { JSDOM } = jsdom;
//shapeSelector()
//{
// inquirer
// .prompt([
//     {
//         type: 'input',
//         message: 'Enter three leters for the logo',
//         name: 'logoLetters'
//     },
//     {
//         type: 'list',
//         message: 'pick the desired color for the logo',
//         name: 'colorLetter',
//         choices: ['red','orange','yellow','green','blue','indigo','violet'],

//     },
//     {
//         type: 'list',
//         message: 'pick the desired shape of the log',
//         name: 'shape',
//         choices: ['circle','square','triangle'],
//     },
//     {
//         type: 'list',
//         message: 'pick the desired color for the logo',
//         name: 'colorShape',
//         choices: ['red','orange','yellow','green','blue','indigo','violet'],

//     },

// ])
// .then((response) =>{

// console.log('Good to know')

// if(response.logoLetters.length==3){
//     console.log(response.logoLetters)
// }
// else{
    
// }
// const shapevalues={
//  letters: response.logoLetters,
//  lettercolor: colorLetter,
//  shape: response.shape,
//  colorShape: response.colorShape,
// }

// return shapevalues;
//     } //end of response

//     )

//} // end of function

class shape{
    
       
    
    createLogo(){
        console.log(`Now grabbing values for a new logo`);
        //const object=shapeSelector();
        /// enter possible function
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter three leters for the logo',
                name: 'logoLetters'
            },
            {
                type: 'list',
                message: 'pick the desired color for the logo',
                name: 'colorLetter',
                choices: ['red','orange','yellow','green','blue','indigo','violet'],
        
            },
            {
                type: 'list',
                message: 'pick the desired shape of the log',
                name: 'shape',
                choices: ['circle','square','triangle'],
            },
            {
                type: 'list',
                message: 'pick the desired color for the logo',
                name: 'colorShape',
                choices: ['red','orange','yellow','green','blue','indigo','violet'],
        
            },
        
        ])
        .then((response) =>{
        
        console.log('Good to know')
        
        if(response.logoLetters.length==3){
            console.log(response.logoLetters)
        }
        else{
            
        }
        
         this.letters=response.logoLetters,
         this.lettercolor= response.colorLetter,
         this.shape=response.shape,
         this.colorShape= response.colorShape;  
            } //end of response
        
            )
        
        /// exit possible function
        //console.log(letters);

    };
    

  pickLetters(){
    console.log(this.letters);
  }

  pickLetterColors(){

  }

  pickShape(){

  }

  pickShapeColors(){

  }

  render(){
    let text='No image drawn';

  if(this.shape=='square'){
    text=`<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24"
     xmlns="http://www.w3.org/2000/svg">
     <text x="20" y="35" class="small">${this.letters}</text>
     <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"
     /></svg>`
  }
  else if(this.shape=='circle'){
    text=`<svg fill="#000000" width="800px" height="800px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" 
    preserveAspectRatio="xMinYMin" 
    class="jam jam-circle"> <text x="20" y="35" class="small">${this.letters}</text> <path d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z'
    /></svg>`
  }
  else if(this.shape=='triangle'){
    text=`<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <text x="20" y="35" class="small">${this.letters}</text>
    <path d="M21.87,19.29l-9-15.58a1,1,0,0,0-1.74,0l-9,15.58a1,1,0,0,0,0,1,1,1,0,0,0,.87.5H21a1,1,0,0,0,.87-.5A1,1,0,0,0,21.87,19.29Zm-17.14-.5L12,6.21l7.27,12.58Z"/></svg>`
  }

  try{
    fs.writeFile('thing.svg','stuff',text,(err) =>
         err ? console.error(err) : console.log('The file has been constructed'));
  }
  catch{

  }
    }

}
// var text =`<svg width="300" height="300" viewBox="-100 -100 -200 -200">
// <rect x="300" y="300" width="200" height="200" fill="blue" />
// </svg>`;
//var elem = svg(text);
//     fs.writeFile('thing.svg',text,(err) =>
//     err ? console.error(err) : console.log('The file has been constructed')
//     );
//   }



class circle extends shape{

}

class triangle extends shape{
    
}
class square extends shape{
    constructor(letters){
        super(letters);
    }
    
}

const shape1= new shape();
//const shape2= new square();

//shape1.createLogo();
shape1.render();