let btns=document.querySelectorAll ("button")
let ball =document.querySelector (".circle")


btns[0].onclick =function () {
    ball.style="justify-content:flex-end;"

}
btns[1].onclick =function () {
    ball.style.cssText="align-items:end;justify-content:flex-end;"

}
btns[4].onclick =function () {
    ball.style="justify-content:flex-start;"

}
btns[2].onclick =function () {
    ball.style.cssText="justify-content:center;align-items:center;"


}
btns[3].onclick =function () {
    ball.style.cssText="align-items:end;";

}

