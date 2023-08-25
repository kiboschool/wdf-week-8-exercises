
/* this will track the count */
var count = 1;

/* add your event listener here */
const btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    // old_count = Number(document.querySelector('h2').textContent);
    // document.querySelector('h2').textContent = old_count+1;
    document.querySelector('h2').textContent = count;
    count = count +1;
    
})

