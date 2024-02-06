function showinfo(me) {
    me.parentNode.classList.add("active-semester-attendance");
    console.log(me.parentNode.children[0], me.parentNode.children[1])
    me.parentNode.children[0].classList.add("active-student-attedance-header")
    me.parentNode.children[1].classList.add("active-semester-attendance")
}

function hideInformation(me) {
    me.parentNode.parentNode.classList.remove("active-semester-attendance");    
    me.parentNode.parentNode.parentNode.classList.remove("active-semester-attendance");
    me.parentNode.parentNode.parentNode.children[0].classList.remove("active-student-attedance-header");            
}