import { obj } from "./constant.js";
import {getlogin,setData} from './config/localdata.js';

let data=getlogin("loginuser")
document.getElementById("name").innerHTML=data.name

let arr=[]


document.getElementById("logout").addEventListener("click",()=>{
    localStorage.removeItem("loginuser")
    window.location.href="index.html"
})

let index = 0;
let total = obj.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        window.location.href="report.html"
    }
    reset()
    const question = obj[index]
    questionBox.innerHTML = `${index + 1}) ${question.question}`
    allInputs[0].nextElementSibling.innerText = question.a
    allInputs[1].nextElementSibling.innerText = question.b
    allInputs[2].nextElementSibling.innerText = question.c
    allInputs[3].nextElementSibling.innerText = question.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const question = obj[index]
        const ans = getAnswer()
        let tempdata={
            question:question.question,
            answer:ans,
            realanswer:question.correct
        }
        arr.push(tempdata)
        setData("detail",arr)
        index++;
        loadQuestion()
    }
)

document.querySelector("#skip").addEventListener("click",()=>{
    const question = obj[index]
    let tempdata={
        question:question.question,
        answer:null,
        realanswer:question.correct
    }
    arr.push(tempdata)
    setData("detail",arr)
    index++;
    loadQuestion()
})

const getAnswer = () => {
    let ans;
    allInputs.forEach((inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

loadQuestion(index);