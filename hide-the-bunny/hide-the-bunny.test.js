const fs = require('fs');


const path = require('path');
require("html-validate/jest");
const w = require('jest-autograding-reporter').weight

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const styles = fs.readFileSync(path.resolve(__dirname, './style.css'), 'utf8');

jest.dontMock('fs');

describe('The hidden bunny tests', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    const styleElement = document.createElement('style')
    styleElement.innerHTML = styles.toString();
    document.body.appendChild(styleElement);
    
    require('./script');
  });

  test(w(2,'should not have class attribute hidden  in html file'), () => {
    // Get a reference to the button element
    let btn = document.querySelector("button")
    let image = document.querySelector("img")
    

    // fireEvent.click(button);
    expect(image.classList.contains("hidden")).toBe(false)


    
  });

  test(w(2,'should hide on first click'), () => {
    // Get a reference to the button element
    let btn = document.querySelector("button")
    let image = document.querySelector("img")
    

    // fireEvent.click(button);
    btn.click()
    expect(image.classList.contains("hidden")).toBe(true)

    
  });

  test(w(2,'should be visible on second click'), () => {
    // Get a reference to the button element
    let btn = document.querySelector("button")
    let image = document.querySelector("img")
    

    // fireEvent.click(button);
    btn.click()
    expect(image.classList.contains("hidden")).toBe(false)

    
  });

  test(w(2,'stylesheet should contain hidden selector'), () => {
    expect(styles).toContain('hidden');


    
  });

  


})

