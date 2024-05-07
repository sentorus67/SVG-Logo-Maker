const shapes= require('../shapes')


// A testing suite for Arithmetic is created.
describe('shapes', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('render', () => {
      it('return text a file of a triangle', () => {
       
        const triangle1 = new shapes.triangleclass();
        testResult=`<svg fill="undefined" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <text x="0" y="12" fill="undefined" class="small"></text>
        <path d="M21.87,19.29l-9-15.58a1,1,0,0,0-1.74,0l-9,15.58a1,1,0,0,0,0,1,1,1,0,0,0,.87.5H21a1,1,0,0,0,.87-.5A1,1,0,0,0,21.87,19.29Zm-17.14-.5L12,6.21l7.27,12.58Z"/></svg>`
        //testResult='No image drawn';
        expect(triangle1.render()).toEqual(testResult);
      });
    });
  });