import {setData,getData} from "./config/localdata.js"

let form = document.querySelector("form")

let data = getData("quizusers") || []

console.log(data);

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj={
        name:form[0].value,
        email:form[1].value,
        password:form[2].value
    }
    data.push(obj)
    setData("quizusers",data)
    alert("User Created Successfully")
    window.location.href="index.html"
})