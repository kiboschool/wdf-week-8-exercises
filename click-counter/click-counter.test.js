const fs = require('fs');


const path = require('path');
require("html-validate/jest");
const w = require('jest-autograding-reporter').weight

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');


jest.dontMock('fs');

describe('The click counter HTML elements', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    require('./script');
  });

  test(w(2,'test first click of the button'), () => {
    // Get a reference to the button element
    let button = document.querySelector('button');
    let h2Element = document.querySelector('h2');

    // fireEvent.click(button);
    button.click()
    expect(parseInt(h2Element.textContent)).toBe(1)

    
  
  });

  test(w(2,'test random number of clicks on the button'), () => {
    // Get a reference to the button element
    let button = document.querySelector('button');
    let h2Element = document.querySelector('h2');

    var randomNumber = Math.floor(Math.random() * 10) + 1;
    // console.log(randomNumber)
    for(let i = 1; i<=randomNumber; i++){
        // Simulate a button click

        button.click();
    }
    expect(parseInt(h2Element.textContent)).toBe(randomNumber+1)
    // console.log(h2Element.textContent)
  
  });


})

