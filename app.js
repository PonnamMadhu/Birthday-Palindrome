var dateInput=document.querySelector(".dob");
var btnCheck=document.querySelector(".check");
var mes=document.querySelector(".msg");

function clickHandler(){
    var str=dateInput.value;
    var newStr=str.replaceAll("-","")
    console.log(isPalindrome(newStr))
}
btnCheck.addEventListener("click",clickHandler);
function isPalindrome(str){
    
    var splitString=str.split("");
    var reverseArray=splitString.reverse();
    var joinArray=reverseArray.join("")
    return (str===joinArray)
}

