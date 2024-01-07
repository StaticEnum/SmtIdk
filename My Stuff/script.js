function changeTitle(titleID, multiplier){
    document.getElementById(titleID).textContent = Math.ceil(multiplier * Math.random());
}

setInterval(changeTitle, 1, "title", 1000000000);