const number = document.querySelector(".number");

var fun = function () {
    var output = prompt('숫자를 입력해주세요');
    alert(output);
    number.innerText = "입력한 숫자 : " + output;
}

//alert(fun);
fun();