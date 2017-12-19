document.addEventListener("DOMContentLoaded", function () {


	// headir menu
	{
		// 	var main_menu = document.querySelector(".main-menu");
		// 	var topPos = main_menu.offsetTop;
		// 	document.addEventListener("scroll", function(){		
		// 		if(window.pageYOffset >= topPos){
		// 			main_menu.style.position = "fixed";				
		// 			main_menu.style.left = "0px";				
		// 			main_menu.style.top = "0px";
		// 			main_menu.style.margin = "0px";
		// 			main_menu.style.width = "100%";
		// 			main_menu.style.zIndex = "5";
		// 			document.body.querySelector(".dropdowns").style.position = "fixed";
		// 			document.body.querySelector(".dropdowns").style.top = "70px";

		// 		}else{
		// 			document.body.querySelector(".dropdowns").removeAttribute("style");
		// 			main_menu.removeAttribute("style");
		// 			main_menu.style.margin = "0xp -15px";
		// 		}	
		// })		
		var menu_items = document.body.querySelectorAll(".main-menu ul li");
		var cop_menu_items = [];
		var dropdowns = document.body.querySelectorAll(".dropdowns>div>ul");
		for (var i = 0; i < menu_items.length; i++) {
			cop_menu_items.push(menu_items[i])
			menu_items[i].addEventListener("mouseover", function () {
				for (var j = 0; j < dropdowns.length; j++) {
					dropdowns[j].style.display = "none";
					document.querySelector(".pages-dropdown").style.display = "none";
				}
				if (cop_menu_items.indexOf(this) <= dropdowns.length - 1) {
					if (cop_menu_items.indexOf(this) <= 4) {
						dropdowns[cop_menu_items.indexOf(this)].style.display = "block";
						dropdowns[cop_menu_items.indexOf(this)].style.left = this.offsetLeft - 50 + "px";
						// dropdowns[cop_menu_items.indexOf(this)].style.zIndex = 15;	
						// $(dropdowns[cop_menu_items.indexOf(this)]).animate({
						// 	display:"block"
						// });
					}
				}
				if (cop_menu_items.indexOf(this) == 5) {
					document.querySelector(".pages-dropdown").style.display = "block";
					var ul = document.querySelectorAll(".pages-dropdown ul");
					for (var a = 0; a < ul.length; a++) {
						ul[a].style.display = "block";
					}
				}
			})
		}
		var uls = document.querySelectorAll(".dropdowns>div>ul");
		var page = document.querySelector(".pages-dropdown");

		window.addEventListener("resize", function () {
			if (window.innerWidth <= 1210) {
				document.querySelector("#heading").style.display = "none";
				document.querySelector("#mobile-menu").style.display = "block"
			} else {
				document.querySelector("#heading").style.display = "block";
				document.querySelector("#mobile-menu").style.display = "none";
			}
		})
	}




	// mobile menu codes
	{
		var bars = document.querySelector(".fa-bars");
		var checking = true;
		bars.addEventListener("click", function () {
			if (checking == true) {
				$(".left-menu").animate({
					left: "0px"
				}, 500);
				checking = false;
				$(this).removeClass("fa-bars");
				$(this).addClass("fa-arrow-left");
			} else {
				$(".left-menu").animate({
					left: "-" + $(".left-menu").css("width")
				}, 500);
				checking = true;
				$(this).addClass("fa-bars");
				$(this).removeClass("fa-arrow-left");
			}

		})
	}



	// top slider
	{
		var images = ["images/home-slide-1-1920x600.jpg", "images/home-slide-2-1920x600.jpg", "images/home-slide-3-1920x600.jpg"];
		var items = document.querySelectorAll("#top_slider .slider .item");
		var dots_contain;
		for (var i = 0; i < items.length; i++) {
			items[i].style.backgroundImage = "url('" + images[i] + "')";
			var span = document.createElement("span");
			dots_contain = document.querySelector(".dots");
			dots_contain.appendChild(span);
		}

		var dots = document.querySelectorAll(".dots span");
		var copy = [];
		for (var i = 0; i < dots.length; i++) {
			copy.push(dots[i])
			dots[i].addEventListener("click", function () {
				for (var b = 0; b < items.length; b++) {
					items[b].style.display = "none";
					dots[b].style.backgroundColor = "darkgrey"
				}
				$(items[copy.indexOf(this)]).fadeIn(500);
				this.style.backgroundColor = "#6fb1ed";
			})
		}
	}

	//random items
	{
		var randInterval;
		var check = true;
		window.addEventListener("scroll", function(e){
			if(window.pageYOffset == 500 && check == true){
				randInterval = setInterval(randoms, 20);
				check = false;
			}
		})
		var like = 0;
		var calendar = 0;
		var person = 854;
		var tv = 497;
		var h1s = document.body.querySelectorAll("#randoms h1");
		function randoms(){
			if(like <= 100){
				h1s[0].innerHTML = like+"%";
				like++;
			}if(calendar <= 10){
				h1s[1].innerHTML = calendar;
				calendar++;
			}
			if(person <= 954){
				h1s[2].children[0].innerHTML = person;
				person++;
			}
			if(tv <= 597){
				h1s[3].children[0].innerHTML = tv;
				tv++;
			}else{
				clearInterval(randInterval);
			}
		}		
	}

	//services slider
	{
		var carousel = new resposiveCarousel(400, "#services-slider", 1);
	}



	// manufacturers slider
	{
		var manuslider = new resposiveCarousel(200, "#paralax", 1, true)
	} 


	// customers slider
	{
		var customeslider = new resposiveCarousel(400, "#customers", 1, true);
	}




	$(window).on("resize", function(){
		console.log($(window).width());
	})













})

