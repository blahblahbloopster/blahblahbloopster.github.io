setTimeout(() => {
    if (document.location.pathname != "/index.html" & document.location.pathname != "/") {
        $.get('/index.html', null, function(text){
            var output = document.getElementById("navbar_box");
            element = $(text)[21]
            output.appendChild(element);
        });
    }
    
    // $.get('/index.html', null, function(text){
    //     var output = document.getElementsByTagName("body");
    //     output[0].classList.add("bg-dark")
    //     output[0].classList.add("text-light")
    // });
    
    // for (i of document.getElementsByClassName("list-group")) {
    //     i.classList.add("bg-dark")
    // }
    // for (i of document.getElementsByClassName("list-group-item")) {
    //     i.classList.add("bg-dark")
    // }
    // for (i of document.getElementsByClassName("card")) {
    //     i.classList.add("bg-dark")
    // }
    }, 500);
    