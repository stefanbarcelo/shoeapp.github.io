function showNav() {
  console.log("this is working");
  var x = document.getElementById("responsive-nav");
  if(x.className === "responsive-nav") {
    x.className += " unfold"
  } else {
    x.className = "responsive-nav";
  }
}

window.sr = ScrollReveal();

sr.reveal('#header img.phone',{
    delay: 200,
    duration: 400,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('#features div.car',{
    delay: 500,
    duration: 400,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('#features div.shoe',{
    delay: 1000,
    duration: 400,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('#features div.device',{
    delay: 1500,
    duration: 400,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('#discount .offer',{
    delay: 600,
    duration: 500,
    origin: 'right',
    distance: '200px'
});

sr.reveal('#discount picture',{
    delay: 600,
    duration: 500,
    origin: 'left',
    distance: '200px'
});
