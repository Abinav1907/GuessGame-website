var a = Math.random();
var b = Math.floor(a*10)+1;
var y = document.getElementById("p1");
var x = document.getElementById("guessnum");
function answer(){
 
  var num = x.value;
  if(num==b){
    y.textContent = "You are right! 🥳";
    alert("Yessss!!!! You Guessed it Right ✌️")
  }
  else{
    y.textContent = "You are wrong 😞";

  }
}