const clickButton = document.getElementById('btn');
clickButton.addEventListener('click' , function(){
    let cnt = parseInt(clickButton.innerText);
    
    cnt++
    clickButton.innerText = cnt;
    clickButton.classList.add('visible')
});
