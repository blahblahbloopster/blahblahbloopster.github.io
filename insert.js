$.get('/index.html', null, function(text){
  var output = document.getElementById("navbar_box");
  element = $(text)[19]
  output.appendChild(element);
});
