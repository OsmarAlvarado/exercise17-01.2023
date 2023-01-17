//cartas
const studentsList = [
    {
        name: 'Jose',
        age: 21
    },
    {
        name: 'Zoe',
        age: 33
    },
    {
        name: 'Alicia',
        age: 19
    },
    {
        name: 'Pablo',
        age: 45
    },
    {
        name: 'Pedro',
        age: 18
    }
]

console.log(studentsList);

studentsList.sort((a, b) => b.age - a.age);
console.log(studentsList);

studentsList.forEach(element => {
    const container = document.getElementById("studentsCont");

    let card = document.createElement("div");
    card.classList.add("student-card");//no me dio tiempo de dar CSS

    let nameStudent = document.createElement("p");
    nameStudent.innerHTML = `Nombre de estudiante: ${element.name}`

    let ageStudent = document.createElement("p");
    ageStudent.innerHTML = `Edad de estudiante: ${element.age}`

    card.appendChild(nameStudent);
    card.appendChild(ageStudent);

    container.appendChild(card);
});