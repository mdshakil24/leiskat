
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    responsive:{
			0:{
				items:1,
			},
      451:{
				items:2,
			},
      576:{
				items:3,
			},
      768:{
				items:4,
			},
			992:{
				items:5,
			},
			1200:{
				items:6
			},
      1400:{
				items:7
			},
      1500:{
				items:8
			}

		},
    navText: ["<img src='assets/images/icon/s1.png'>",
"<img src='assets/images/icon/s2.png'>"],
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    autoplay: true,
  });
});



var bars = document.querySelectorAll('.meter > span');
console.clear();

setInterval(function(){
  bars.forEach(function(bar){
    var getWidth = parseFloat(bar.dataset.progress);
    
    for(var i = 0; i < getWidth; i++) {
      bar.style.width = i + '%';
    }
  });
}, 500);


