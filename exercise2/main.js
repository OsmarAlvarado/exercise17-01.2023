const searchNum = document.getElementById('searchNum')
console.log(searchNum);

searchNum.onclick = () => {
    let num1 = parseInt(prompt("Ingresa tu primer número:")); //devuelve un entero de la base
    let num2 = parseInt(prompt("Ingresa tu segundo número:"));
    let num3 = parseInt(prompt("Ingresa tu tercer número:"));

    let maxNum = Math.max(num1, num2, num3);//método estático devuelve el mayor de los números dados

    let result = document.getElementById("biggerNumber");
    result.innerHTML = "El número mayor es: " + maxNum;
}