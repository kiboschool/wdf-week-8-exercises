var currentSlide = 1;

// add an event listener to document.body here
document.body.addEventListener('click', () =>{
    var myDiv = document.querySelector('.s-'+currentSlide);
    myDiv.classList.add('hidden');
    // if (myDiv.classList.contains('hidden')) {
    //     // If it has the class, remove it
    //     myDiv.classList.remove('hidden');
    //   } else {
    //     // If it doesn't have the class, add it
    //     myDiv.classList.add('hidden');
    //   }

    currentSlide += 1;
    var myDiv = document.querySelector('.s-'+currentSlide);
    myDiv.classList.remove('hidden');


})