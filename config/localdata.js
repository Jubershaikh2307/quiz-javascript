function setData(key,obj) {
    localStorage.setItem(key,JSON.stringify(obj))
    return {responce:1}
}

function getData(key) {
    return JSON.parse(localStorage.getItem(key)) 
}

function setlogin(key,obj) {
    localStorage.setItem(key,JSON.stringify(obj))
    return {responce:1}
}

function getlogin(key) {
    return JSON.parse(localStorage.getItem(key)) 
}

export { getData, setData ,setlogin,getlogin}