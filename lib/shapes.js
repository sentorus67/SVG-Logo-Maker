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
                message: 'pick the desired color for the letters',
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
        text=`<svg fill="${this.colorShape}" width="800px" height="800px" viewBox="0 0 15 15" version="1.1" id="square" xmlns="http://www.w3.org/2000/svg">
        <path d="M13,14H2c-0.5523,0-1-0.4477-1-1V2c0-0.5523,0.4477-1,1-1h11c0.5523,0,1,0.4477,1,1v11C14,13.5523,13.5523,14,13,14z"/> <text x="0" font-size="8px" fill="${this.lettercolor}" y="10" class="small"> ${this.letters} </text>
      </svg>`
    }
    else if(this.shape=='circle'){
        text=`<svg fill="${this.colorShape}" width="300px" height="200px" viewBox="0 0 15 15" version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg">
        <path d="M14,7.5c0,3.5899-2.9101,6.5-6.5,6.5S1,11.0899,1,7.5S3.9101,1,7.5,1S14,3.9101,14,7.5z"/>
        <text x="0" font-size="8px" fill="${this.lettercolor}" y="10" class="small">${this.letters}</text>
      </svg>`
    }
    else if(this.shape=='triangle'){
        text=`<svg fill="${this.colorShape}" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24">
        <path d="M21.9,19.3l-9-15.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.5-0.3-1.1-0.2-1.4,0.3l-9,15.6C2,19.4,2,19.6,2,19.8c0,0.6,0.4,1,1,1h18c0.2,0,0.3,0,0.5-0.1C22,20.4,22.1,19.8,21.9,19.3z"/>
        <text x="6" font-size="8px" fill="${this.lettercolor}" y="15" class="small">${this.letters}</text>
        </svg>`
    }
    return text;
    }

    writeLogo(){
        fs.writeFile('thing.svg',this.render(),(err) =>
        err ? console.error(err) : console.log('An SVG Logo was made!'));
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
                message: 'pick the desired color for the letters',
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
                message: 'pick the desired color for the letters',
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
                message: 'pick the desired color for the letters',
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



