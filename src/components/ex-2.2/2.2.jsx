

const data = ["hello", "world"];
const msg1=()=>{
    return `${data[0]} ${data[1]}`
}
const number1 = 5;
const number2 =6;

const msg2=()=>{
    return `${number1} + ${number2} = ${number1+number2}`
}

const string = "I love React!"
const msg3=()=>{
    return `the strings length is ${string.length}`
}

export default msg3()