$.get('/index.html', null, function(text){
  var output = document.getElementById("navbar_box");
  element = $(text)[19]
  output.appendChild(element);
});

$.get('/index.html', null, function(text){
    var output = document.getElementsByTagName("body");
    console.log(output)
    output[0].classList.add("bg-dark")
    output[0].classList.add("text-light")
});

$.get('/index.html', null, function(text){
    var output = $("div").find("ul")
    console.log("aaa")
    console.log(output)
    console.log("aaa")
    for (i of output) {
        console.log(i)
        if (!"bg" in i.classList) {
            i.classList.add("bg-dark")
            i.classList.add("text-light")
        }
    }
});
