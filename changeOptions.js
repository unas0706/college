function changeOperation(me){            
    me.classList.add("active")  
    txt = me.innerHTML.toLowerCase()
    try {
        me.nextElementSibling.classList.remove("active")        
    }  
    catch(err) {
        console.log(err)
    }
    try {
        me.previousElementSibling.classList.remove("active")
    } catch (error) {
        console.log(error)
    }
    if (txt == 'marks') {
        console.log(document.querySelectorAll("#student-information-marks")[0])
        document.querySelectorAll("#student-information-attendance")[0].style.height='0'
    } else {
        document.querySelectorAll("#student-information-attendance")[0].style.height='100%'
    }
}