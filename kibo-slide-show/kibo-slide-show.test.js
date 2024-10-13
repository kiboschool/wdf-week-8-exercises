const fs = require('fs');


const path = require('path');
require("html-validate/jest");
const w = require('jest-autograding-reporter').weight

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('The Kibo slide show HTML elements', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();    
    require('./script');
  });

  test(w(2,'at the beginning s-1 visible'), () => {
    // Get a reference to the button element
    let slide1 = document.querySelector(".s-1")
    

    expect(slide1.classList.contains("hidden")).toBe(false)


    
  });

  test(w(2,'at the beginning s-2 to s-10 is hidden'), () => {
    // Get a reference to the button element
    let slide2 = document.querySelector(".s-2")
    let slide3 = document.querySelector(".s-3")
    let slide4 = document.querySelector(".s-4")
    let slide5 = document.querySelector(".s-5")
    let slide6 = document.querySelector(".s-6")
    let slide7 = document.querySelector(".s-7")
    let slide8 = document.querySelector(".s-8")
    let slide9 = document.querySelector(".s-9")
    let slide10 = document.querySelector(".s-10")

    

    expect(slide2.classList.contains("hidden")).toBe(true)
    expect(slide3.classList.contains("hidden")).toBe(true)
    expect(slide4.classList.contains("hidden")).toBe(true)
    expect(slide5.classList.contains("hidden")).toBe(true)
    expect(slide6.classList.contains("hidden")).toBe(true)
    expect(slide7.classList.contains("hidden")).toBe(true)
    expect(slide8.classList.contains("hidden")).toBe(true)
    expect(slide9.classList.contains("hidden")).toBe(true)
    expect(slide10.classList.contains("hidden")).toBe(true)
  



    
  });

  test(w(2,'at first window click'), () => {
    // Get a reference to the button element
    let slide1 = document.querySelector(".s-1")
    let slide2 = document.querySelector(".s-2")

    document.body.click()
    

    expect(slide1.classList.contains("hidden")).toBe(true)
    expect(slide2.classList.contains("hidden")).toBe(false)



    
  });

  test(w(2,'at second window click'), () => {
    // Get a reference to the button element
    let slide2 = document.querySelector(".s-2")
    let slide3 = document.querySelector(".s-3")

    document.body.click()
    

    expect(slide2.classList.contains("hidden")).toBe(true)
    expect(slide3.classList.contains("hidden")).toBe(false)



    
  });

  


})

