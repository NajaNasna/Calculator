function data(val){
document.getElementById("screen").value +=val
// OR
// document.getElementById("screen").value =document.getElementById("screen").value +val
}



function clearScreen(){
document.getElementById("screen").value = " "
}



function equalClick(){
// var text = document.getElementById("screen").value
// var result = eval(text)
// document.getElementById("screen").value = result

 var text = document.getElementById("screen").value
var consecutiveOperationPattern = /(\+\+|--|\*\*|\/\/|\+\-|\-\+|\*\-|\/\-|\-\/|\*\/|\.\.)/g;
            if (consecutiveOperationPattern.test(text)) {
                alert("Invalid expression: Consecutive operation symbols not allowed.");
                return;

            }

try {
    var result = eval(text);
    document.getElementById("screen").value = result;
} catch (err) {
    alert("Invalid expression");
}
}



function back(){
    var store = document.getElementById("screen").value
    var newnum = store.slice(0,-1)
    document.getElementById("screen").value = newnum
}