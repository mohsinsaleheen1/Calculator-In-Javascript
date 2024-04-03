function btn(num) {
  let resul = document.getElementById("res");
  resul.value += num;
}
function remove() {
  let clear = document.getElementById("res");
  clear.value = "";
}
function results() {
  let fres = document.getElementById("res");
  fres.value = eval(fres.value);
}
function cl() {
  let clr = document.getElementById("res").value;
  let res = clr.slice(0, -1);
  document.getElementById("res").value = res;
}
