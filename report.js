import {getData,getlogin} from "./config/localdata.js"

let obj=getData("detail")

let data=getlogin("loginuser")
document.getElementById("name").innerHTML=data.name

document.getElementById("logout").addEventListener("click",()=>{
    localStorage.removeItem("loginuser")
    window.location.href="index.html"
})

document.getElementById("start").addEventListener("click",()=>{
    window.location.href="quiz.html"
})

let total=0

obj.map((el)=>{
    let tr= document.createElement("tr")

    let td1=document.createElement("td")
    td1.innerHTML=el.question
    let td2=document.createElement("td")
    td2.innerHTML=el.answer

    if(el.answer == el.realanswer){
        tr.style.backgroundColor="green"
        total++
    }else if(el.answer != null){
        tr.style.backgroundColor="red"
    }else{
        tr.style.backgroundColor="black"
        tr.style.color="white"
        td2.innerHTML="Not Answer"
    }

    tr.append(td1,td2)

    document.querySelector("#table").append(tr)
})

document.getElementById("total").innerHTML=total