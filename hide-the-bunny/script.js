// Add an event listener to the button
const btn = document.querySelector("button")
const image = document.querySelector("img")

btn.addEventListener("click", ()=>{
    if (image.classList.contains('hidden')) {
        // If it has the class, remove it
        image.classList.remove('hidden');
      } else {
        // If it doesn't have the class, add it
        image.classList.add('hidden');
      }
    
})
