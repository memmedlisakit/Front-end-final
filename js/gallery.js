document.addEventListener("DOMContentLoaded", function(){

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






// gallery 
{
			

			var big_images = ["gallery/gallery-cobbles-2-480x620.jpg", "gallery/gallery-cobbles-4-480x620.jpg", "gallery/gallery-cobbles-5-480x620.jpg", "gallery/gallery-cobbles-7-480x620.jpg"]
			var small_images = ["gallery/gallery-cobbles-1-480x310.jpg", "gallery/gallery-cobbles-3-480x310.jpg", "gallery/gallery-cobbles-6-480x310.jpg", "gallery/gallery-cobbles-8-480x310.jpg"]


			var small_items = $(".small-item");
			var big_items = $(".big-item");

			function customResize(){
				for(var i = 0; i < small_items.length; i++){
					$($(small_items)[i]).css({
						height:$($(small_items)[i]).width()+"px",
						backgroundImage:"url("+small_images[i]+")",
						backgroundRepeat:"no-repeat",
						backgroundPosition:"center",
						backgroundSize:"cover"
					})

					$($(big_items)[i]).css({
						height:$($(small_items)[i]).width()*2+"px",
						backgroundImage:"url("+big_images[i]+")",
						backgroundRepeat:"no-repeat",
						backgroundPosition:"center",
						backgroundSize:"cover"
					})


					$($(small_items)[i]).on("mouseenter", function(){
						$(this).children(".hidden-item").animate({
							opacity:"1"
						})

						$(this).children(".hidden-item").children(".text").animate({
							opacity:"1",
							marginTop:"30%"
						})
					})
					$($(small_items)[i]).on("mouseleave", function(){
						$(this).children(".hidden-item").animate({
							opacity:"0"
						});
						$(this).children(".hidden-item").children(".text").animate({
							opacity:"0",
							marginTop:"45%"
						})
					})


					$($(big_items)[i]).on("mouseenter", function(){
						$(this).children(".hidden-item").animate({
							opacity:"1"
						})

						$(this).children(".hidden-item").children(".text").animate({
							opacity:"1",
							marginTop:"70%"
						})
					})
					$($(big_items)[i]).on("mouseleave", function(){
						$(this).children(".hidden-item").animate({
							opacity:"0"
						});
						$(this).children(".hidden-item").children(".text").animate({
							opacity:"0",
							marginTop:"120%"
						})
					})

				}
			}


			customResize();

			$(window).on("resize", function(){
				customResize();
			})


			var tabs = $(".tabs span");

			for(var i = 0; i < tabs.length; i++){
				$($(tabs)[i]).on("click", function(){
					if($(this).index() != 0){
						for(var a = 0; a < small_items.length; a++){
							$($(small_items)[a]).hide(300);
							$($(big_items)[a]).hide(300);	
						}
						if($(this).index() == 1){
							for(var a = 0; a < 2; a++){
								$($(small_items)[a]).show(300);	
							}
							$($(big_items)[2]).show(300);	
						}else if($(this).index() == 2){
							for(var a = 0; a < 2; a++){
								$($(big_items)[a]).show(300);	
							}
						}else if($(this).index() == 3){
							for(var a = 0; a < 3; a++){
								$($(small_items)[a]).show(300);	
							}
						}
					}else{
						for(var a = 0; a < small_items.length; a++){
							$($(small_items)[a]).hide(300);
							$($(big_items)[a]).hide(300);	
						}
						for(var a = 0; a < small_items.length; a++){
							$($(small_items)[a]).show(300);
							$($(big_items)[a]).show(300);	
						}
					}
				})

			}

			for(var j = 0; j < small_items.length; j++){
				$(small_items[j]).on("click", popup);
				$(big_items[j]).on("click", popup);
			}


			function popup(){
				$(".popup").show(300);
				$(".popup").children(".frame").css({
					backgroundImage:$(this).css("backgroundImage"),
					backgroundRepeat:"no-repeat",
					backgroundPosition:"center",
					backgroundSize:"cover"
				})
			}
			$(".popup").on("click", function(event){
				$(this).hide(300);
			})
}







})











