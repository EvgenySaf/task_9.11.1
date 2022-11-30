window.onload = function ()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('month').innerText = initPerson.month;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('day').innerText = initPerson.day;
    if (document.getElementById('genderOutput').innerText==="Мужчина, "){
        document.getElementById('firstNameOutput').innerText = initPerson.firstName;
        document.getElementById('surnameOutput').innerText = initPerson.surname;
        document.getElementById('prof').innerText = initPerson.profMale;
        document.getElementById('second').innerText = initPerson.secondmale;
    } else {
        document.getElementById('firstNameOutput').innerText = initPerson.fem;
        document.getElementById('surnameOutput').innerText = initPerson.surname+"а";
        document.getElementById('prof').innerText = initPerson.profFemale;
        document.getElementById('second').innerText = initPerson.secondfem;
    }
};

document.querySelector('#update').addEventListener('click', window.onload);

function reset() {
    document.getElementById('birthYearOutput').innerText ="";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('firstNameOutput').innerText ="";
    document.getElementById('surnameOutput').innerText = "";  
    document.getElementById('prof').innerText = "";
    document.getElementById('second').innerText = "";
    document.getElementById('month').innerText = "";
    document.getElementById('day').innerText = "";
}

document.querySelector('#reset').addEventListener('click', reset);