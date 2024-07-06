// const upperSet = "ABCDEFGHIJKLMNOQRSTUVWXYZ";
// const lowerSet = "abcdefghijklmnopqrstuvwxyz";
// const numberSet = "1234567890";
// const symbolSet = "!@#$%^&*_~()<>?/";

// const passwordBox = getElementById('pbox')
// // const passwordLength = getElementByClassName('label')
// const upperCase = getElementById('uppercase')
// const lowerCase = getElementById('lowercase')
// const number = getElementById('number')
// const symbol = getElementById('symbol')


// const getRandomData = (dataSet) => {
//     return dataSet[Math.floor(Math.random() * dataSet.length)]
// }

// const generatePassword = (password = " ") =>{
//     if(upperCase.checked){
//         password += getRandomData(upperSet)
//     }

//     console.log(password)
// }

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*_~()<>?/";

const passwordBox = document.getElementById('pbox');
const passwordLength = document.getElementById('length');
const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const generateButton = document.getElementById('generateButton');

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = () => {
    let password = '';
    const length = parseInt(passwordLength.value);

    let availableSets = [];
    if (upperCase.checked) {
        availableSets.push(upperSet);
    }
    if (lowerCase.checked) {
        availableSets.push(lowerSet);
    }
    if (number.checked) {
        availableSets.push(numberSet);
    }
    if (symbol.checked) {
        availableSets.push(symbolSet);
    }

    if (availableSets.length === 0) {
        alert("Please select at least one character type for your password.");
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomSet = getRandomData(availableSets);
        password += getRandomData(randomSet);
    }

    passwordBox.innerText = password;
};

generateButton.addEventListener('click', generatePassword);
