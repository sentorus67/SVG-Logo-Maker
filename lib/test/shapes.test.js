const shapes= require('../shapes')


// A testing suite for Arithmetic is created.
describe('shapes', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('render', () => {
      it('return text a file of a triangle', () => {
       
        const triangle1 = new shapes.triangleclass();
        testResult=`<svg fill="undefined" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24">
        <path d="M21.9,19.3l-9-15.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.5-0.3-1.1-0.2-1.4,0.3l-9,15.6C2,19.4,2,19.6,2,19.8c0,0.6,0.4,1,1,1h18c0.2,0,0.3,0,0.5-0.1C22,20.4,22.1,19.8,21.9,19.3z"/>
        <text x="6" font-size="8px" fill="undefined" y="15" class="small"></text>
        </svg>`
        //testResult='No image drawn';
        expect(triangle1.render()).toEqual(testResult);
      });
    });
  });