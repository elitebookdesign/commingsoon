// sidebar manu mobile view 
const navBar = document.querySelector(".header"),
  menuBtns = document.querySelectorAll(".menu-icon"),
  overlay = document.querySelector("main");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});

// scroll color change header
const className = document.querySelector(".inverted")
var scrollTrigger = 48;

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.querySelectorAll(".wrapper header")[0].classList.remove('inverted');
  } else {
    document.querySelectorAll(".wrapper header")[0].classList.add('inverted');
  }
};

// $(window).on('load',function(){
// 	setTimeout(function(){ // allowing 3 secs to fade out loader
// 	$('.lds-ripple').fadeOut('slow');
//   document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
// 	},1000);
// });


// portfolio


$("#filter li").click(function () {
  var category = $(this).attr('id')

  $("#filter li").removeClass("active");

  $(this).addClass("active");

  $("#portfolio a").hide();

  $("#portfolio a").each(function () {

    if ($(this).hasClass(category)) {
      $(this).show();
    }

  });

});

$('#filter li.active').click();

// portfolio image view
$(document).ready(function () {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });
});