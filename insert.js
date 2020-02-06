setTimeout(() => {
$.get('/index.html', null, function(text){
  var output = document.getElementById("navbar_box");
  element = $(text)[19]
  output.appendChild(element);
});

$.get('/index.html', null, function(text){
    var output = document.getElementsByTagName("body");
    output[0].classList.add("bg-dark")
    output[0].classList.add("text-light")
});

for (i of document.getElementsByClassName("list-group")) {
    console.log(i)
    i.classList.add("bg-dark")
}
for (i of document.getElementsByClassName("list-group-item")) {
    console.log(i)
    i.classList.add("bg-dark")
}
for (i of document.getElementsByClassName("card")) {
    console.log(i)
    i.classList.add("bg-dark")
}
}, 500);
