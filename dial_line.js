var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('white-circle')[0];

for (var i = 1; i < 100; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + (i-1)*6 + "deg)";
}

