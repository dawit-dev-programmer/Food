const firstBTN = document.querySelector('#first');
const secondBTN = document.querySelector('#secondBtn');
const sucssus = document.querySelector('.Sucssus');
const Done = document.querySelector('#DoneS');
const startBtn = document.getElementById("start");

startBtn.addEventListener("click", () => {
    window.location.href = "./login.html";
});
firstBTN.addEventListener('click', function(){
  sucssus.classList.add("show");
secondBTN.addEventListener('click', function(){
  sucssus.classList.add("show");
});
Done.addEventListener('click', function(){
  sucssus.classList.remove("show");
});  
});
