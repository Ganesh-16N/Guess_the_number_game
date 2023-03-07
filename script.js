const Arr = [];
var v;

let num = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

document.getElementById("inputNumber").addEventListener("input", (e) => {
  v = parseInt(e.target.value);
});

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  // alert("submitted");
  // console.log(v);
  // console.log(num);
  let dis = "Enter the Number";
  if (num == v) {
    dis = "You Got It !!! Correct Answer";
    document.getElementById("restart").disabled = false;
    document.getElementById("submit").disabled = true;
  } else if (v < num) {
    dis = "Too Low";
  } else if (v > num) {
    dis = "Too High";
  }
  document.getElementById("discription").innerText = dis;

  Arr.push(v);
  document.getElementById("inputNumber").value = "";
  document.getElementById("entries").innerText = Arr.map((e) => e);
});

document.getElementById("restart").addEventListener("click", () => {
  window.history.go(0);
});
