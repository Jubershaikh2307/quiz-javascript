import {getlogin,getData,setlogin} from "./config/localdata.js"

let user = getlogin("loginuser")
let data = getData("quizusers")

console.log(data);

if(user!=null){
    window.location.href="quiz.html"
}

let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj=null
    data.forEach(element => {
        if(form[0].value === element.email) obj=element
    });
    if(obj==null){
        alert("User Not Exist")
    }else if(obj.password != form[1].value){
        alert("Check User Password")
    }else{
        setlogin("loginuser",obj)
        window.location.href="quiz.html"
    }
})