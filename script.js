
document.querySelector('#sortear').addEventListener('click', ()=>{

    const min = Math.ceil(document.querySelector('.input-min').value);
    const max = Math.floor(document.querySelector('.input-max').value);
    const textResult = document.querySelector('#resultado');

    if(min >= max){
        textResult.innerHTML = "Revise os campos"
        textResult.style.color = "red"
        return
    }
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    textResult.style.color = "green"
    textResult.innerHTML = `O número sorteado é <br> ${result}`
});






