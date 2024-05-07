const colors= require("colors");
const fs= require("fs");
const inquirer=require("inquirer");
const svg =require("svg");
const jsdom = require("jsdom");
const { type } = require("os");
const { Console } = require("console");
const { Module } = require("module");
const { JSDOM } = jsdom;


class shape{

    constructor(){
        this.letters='';
   
    }

    createLogo(){
        console.log(`Now grabbing values for a new logo`);
        /// enter possible function
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter three leters for the logo',
                name: 'logoLetters'
            },
            {
                type: 'input',
                message: 'pick the desired color for the logo',
                name: 'colorLetter',
        
            },
            {
                type: 'list',
                message: 'pick the desired shape of the log',
                name: 'shape',
                choices: ['circle','square','triangle'],
            },
            {
                type: 'input',
                message: 'pick the desired color for the logo',
                name: 'colorShape',
        
            },
        
        ])
        .then((response) =>{
        
        console.log('Good to know')
        
        if(response.logoLetters.length==3){
            this.letters=response.logoLetters
            this.lettercolor= response.colorLetter,
            this.shape=response.shape,
            this.colorShape= response.colorShape;  
            this.writeLogo();
        }
        else{
            console.log('Incorrect number of Letters. Only three are allowed')
        }
            } //end of response
        
            )
        
        /// exit possible function

    };
    

  pickLetters(value){
   if(value.length==3){
    this.letters=value;
   }
   else{
    console.log('invalid number for logo')
   }
  }

  pickLetterColors(value){
    this.lettercolor=value;
  }

  pickShape(value){
    this.shape=value;
  }

  pickShapeColors(value){
    this.colorShape=value;
  }

  render(){
    console.log('now rendering');
    let text='No image drawn';

    if(this.shape=='square'){
        text=`<svg fill="${this.colorShape}" width="800px" height="800px" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="12" fill="${this.lettercolor}" class="small">${this.letters}</text>
        <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"
        /></svg>`
    }
    else if(this.shape=='circle'){
        text=`<svg fill="${this.colorShape}" width="800px" height="800px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="xMinYMin" 
        class="jam jam-circle"> <text x="0" fill="${this.lettercolor}" y="12" class="small">${this.letters}</text> <path d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z'
        /></svg>`
    }
    else if(this.shape=='triangle'){
        text=`<svg fill="${this.colorShape}" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <text x="0" y="12" fill="${this.lettercolor}" class="small">${this.letters}</text>
        <path d="M21.87,19.29l-9-15.58a1,1,0,0,0-1.74,0l-9,15.58a1,1,0,0,0,0,1,1,1,0,0,0,.87.5H21a1,1,0,0,0,.87-.5A1,1,0,0,0,21.87,19.29Zm-17.14-.5L12,6.21l7.27,12.58Z"/></svg>`
    }
    return text;
    }

    writeLogo(){
        fs.writeFile('thing.svg',this.render(),(err) =>
        err ? console.error(err) : console.log('The file has been constructed'));
    }

}

class circle extends shape{

    constructor(letters,shape){
 
        super(letters);
        this.shape='triangle';
    }

    createLogo(){
        console.log(`Now grabbing values for a new logo`);
        /// enter possible function
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter three leters for the logo',
                name: 'logoLetters'
            },
            {
                type: 'input',
                message: 'pick the desired color for the logo',
                name: 'colorLetter',
        
            },
            {
                type: 'input',
                message: 'pick the desired color for the logo',
                name: 'colorShape',
        
            },
        
        ])
        .then((response) =>{
        
        console.log('Good to know')
        
        if(response.logoLetters.length==3){
            this.letters=response.logoLetters
            this.lettercolor= response.colorLetter,
            this.shape='circle'
            this.colorShape= response.colorShape;  
            this.writeLogo();
        }
        else{
            console.log('Incorrect number of Letters. Only three are allowed')
        }
            } //end of response
        
            )
        
        /// exit possible function

        }

}

class triangle extends shape{

    constructor(letters,shape){
 
        super(letters);
        this.shape='triangle';
    }
    
    
    createLogo(){
        console.log(`Now grabbing values for a new logo`);
        /// enter possible function
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter three leters for the logo',
                name: 'logoLetters'
            },
            {
                type: 'input',
                message: 'pick the desired color for the logo',
                name: 'colorLetter',
        
            },
            {
                type: 'input',
                message: 'pick the desired color for the logo',
                name: 'colorShape',
        
            },
        
        ])
        .then((response) =>{
        
        console.log('Good to know')
        
        if(response.logoLetters.length==3){
            this.letters=response.logoLetters
            this.lettercolor= response.colorLetter,
            this.shape='triangle'
            this.colorShape= response.colorShape;  
            this.writeLogo();
        }
        else{
            console.log('Incorrect number of Letters. Only three are allowed')
        }
            } //end of response
        
            )
        
        /// exit possible function

        }

        indiv(){
            console.log('this class has some independence')
        }

}

class square extends shape{

    constructor(letters,shape){
        super(letters);
        this.shape='triangle';
    }

    createLogo(){
        console.log(`Now grabbing values for a new logo`);
        /// enter possible function
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter three leters for the logo',
                name: 'logoLetters'
            },
            {
                type: 'input',
                message: 'pick the desired color for the logo',
                name: 'colorLetter',
        
            },
            {
                type: 'input',
                message: 'pick the desired color for the logo',
                name: 'colorShape',
        
            },
        
        ])
        .then((response) =>{
        
        console.log('Good to know')
        
        if(response.logoLetters.length==3){
            this.letters=response.logoLetters
            this.lettercolor= response.colorLetter,
            this.shape='square'
            this.colorShape= response.colorShape;  
            this.writeLogo();
        }
        else{
            console.log('Incorrect number of Letters. Only three are allowed')
        }
            } //end of response
        
            )
        
        /// exit possible function

        }

}



module.exports= {
    shapeclass: shape,
    squareclass: square,
    triangleclass: triangle,
    circleclass: circle,
};



