function reveal() {
  var reveals = document.querySelectorAll(".fade-in");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 40;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}





function togg(event) {
   
  document.getElementById("togglenavigate").style.width = "40vw";
  event.stopPropagation();

 

}





function closeNav(event) {
  console.log("openNav() function called");
 
  document.getElementById("togglenavigate").style.width = "0";
  event.stopPropagation();
 
}

// Close sidebar when clicking outside of it
window.addEventListener('click', function(event) {
  var sidebar = document.getElementsByClassName("togglenavigate");
  var openBtn = document.querySelector('.toggle');
  if (event.target !== sidebar && event.target !== openBtn) {
      closeNav(event);
  }
});

