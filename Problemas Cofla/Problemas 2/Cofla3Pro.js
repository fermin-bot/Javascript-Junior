var temp1 = 0;
// document.getElementsByTagName("html").addEventListener ("click", function() {
//     document.getElementById("result").innerHTML = result;
// })

result = 0;

document.getElementById("btn1").onclick = function() {
    temp1 =+ "1"
    result = result + 1;
    document.getElementById("result").innerText = temp1;
}

document.getElementById("btn2").onclick = function() {
    temp1 =+ "2"
    result = result + 2;
    document.getElementById("result").innerText = temp1;
}

document.getElementById("btn3").onclick = function() {
    result = result + 3;
    document.getElementById("result").innerText = result;
}

document.getElementById("btnplus").onclick = function() {
    document.getElementById("result").innerText = temp1;
}
document.getElementById("btnequal").onclick = function() {
    document.getElementById("result").innerText = result;
}