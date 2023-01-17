
const guessNum = document.getElementById('guess')

let randomNum = Math.floor(Math.random() * 20);
console.log(randomNum);

console.log(guessNum);
guessNum.onclick = () => {
    const inputNum = document.getElementById('guessNum').value * 1 //validacion numerica

    function guess(num) {
        if (inputNum > randomNum) {
            alert("FRIO, el numero es menor");
        } else if (inputNum < randomNum) {
            alert("CALIENTE, El número es mayor");
        } else {
            alert("Buueeena, lo has adivinado" + randomNum);
            randomNum = Math.floor(Math.random() * 50);
            console.log(randomNum);
        }
    }
    guess(randomNum)
}

