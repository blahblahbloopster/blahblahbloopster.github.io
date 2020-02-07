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
    
    var lst = document.querySelectorAll("*")
    for (i of lst) {
        i.classList.add("bg-dark")
    }
}, 500);
