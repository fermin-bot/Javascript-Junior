temp1 = "";
// document.getElementsByTagName("html").addEventListener ("click", function() {
//     document.getElementById("result").innerHTML = result;
// })

oper = ""

recuerdo = 0;

result = 0;

result = 

recuerdo = parseFloat(recuerdo);

document.getElementById("btn1").onclick = function() {
    temp1 = temp1 + "1"
    document.getElementById("result").innerText = temp1;
}

document.getElementById("btn2").onclick = function() {
    temp1 = temp1 + "2"
    document.getElementById("result").innerText = temp1;
}

document.getElementById("btn3").onclick = function() {
    temp1 = temp1 + "3"
    document.getElementById("result").innerText = temp1;
}

document.getElementById("btn4").onclick = function() {
    temp1 = temp1 + "4"
    document.getElementById("result").innerText = temp1;
}

document.getElementById("btn5").onclick = function() {
    temp1 = temp1 + "5"
    document.getElementById("result").innerText = temp1;
}

document.getElementById("btn6").onclick = function() {
    temp1 = temp1 + "6"
    document.getElementById("result").innerText = temp1;
}

document.getElementById("btn7").onclick = function() {
    temp1 = temp1 + "7"
    document.getElementById("result").innerText = temp1;
}

document.getElementById("btn8").onclick = function() {
    temp1 = temp1 + "8"
    document.getElementById("result").innerText = temp1;
}

document.getElementById("btn9").onclick = function() {
    temp1 = temp1 + "9"
    document.getElementById("result").innerText = temp1;
}

document.getElementById("btn0").onclick = function() {
    temp1 = temp1 + "0"
    document.getElementById("result").innerText = temp1;
}


//  Operadores 


document.getElementById("btndivide").onclick = function() {
    if(temp1==""){
        temp1 = 0;
    }
    document.getElementById("result").innerText = temp1;
    if (recuerdo != 0) {
        temp1 = recuerdo;
    }
    temp1 = parseInt(temp1);
    if (result == 0) {
        result = temp1;
    }
        else {
            result = result / temp1;
        }
    temp1 = "";
    oper = "/";
}

document.getElementById("btnplus").onclick = function() {
    if(temp1==""){
        temp1 = 0;
    }
    document.getElementById("result").innerText = temp1;
    if (recuerdo != 0) {
        temp1 = recuerdo;
    }
    temp1 = parseInt(temp1);
    if (result == 0) {
        result = temp1;
    }
        else {
            result = result + temp1;;
        }
    temp1 = "";
    oper = "+";
}

document.getElementById("btnmultiply").onclick = function() {
    if(temp1==""){
        temp1 = 0;
    }
    document.getElementById("result").innerText = temp1;
    if (recuerdo != 0) {
        temp1 = recuerdo;
    }
    temp1 = parseInt(temp1);
    if (result == 0) {
        result = temp1;
    }
        else {
            result = result * temp1;
        }
    temp1 = "";
    oper = "*";
}

document.getElementById("btnminus").onclick = function() {
    if(temp1===""){
        temp1 = 0;
    }
    document.getElementById("result").innerText = temp1;
    if (recuerdo != 0) {
        temp1 = recuerdo;
    }
    temp1 = parseInt(temp1);
    if (result == 0) {
        result = temp1;
    }
        else {
            result = result -temp1;;
        }
    temp1 = "";
    oper = "-";
}

document.getElementById("btnequal").onclick = function() {
    temp1 = parseInt(temp1);
    switch (oper) {
        case '+':
            result = result + temp1;
            break;
        case '-':
            result = result - temp1;   
            break;
        case '*':
            result = result * temp1;   
            break; 
        case '/':
            result = result / temp1;   
            break; 
    }
    recuerdo = result;
    temp1 = "";
    document.getElementById("result").innerText = result;
    result = 0;
}
