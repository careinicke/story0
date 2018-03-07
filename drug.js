$(document).ready(function(){
    // $("#flip").click(function(){
    //     $("#panel").slideToggle("slow");
    // });

    $(".slider a").on("click", function(e){
    	e.preventDefault();

    	var this_link = $(this),
    		slider = this_link.closest(".slider"),
    		panel = slider.find(".panel");

		panel.slideToggle("slow");

    });
}); //s1//

// $(document).ready(function(){
//     $("#flip2").click(function(){
//         $("#panel2").slideToggle("slow");
//     });
// });

// $(document).ready(function(){
//     $("#flip3").click(function(){
//         $("#panel3").slideToggle("slow");
//     });
// });

// $(document).ready(function(){
//     $("#flip4").click(function(){
//         $("#panel4").slideToggle("slow");
//     });
// });

// $(document).ready(function(){
//     $("#flip5").click(function(){
//         $("#panel5").slideToggle("slow");
//     });
// }); // sliding panels // 


$(document).ready(function(){
	$("#a").click(function(){
		$("#slide").addClass('info_slides_show');
		$("xButton").addClass("btn_close_show")
		$("#popIn").text("Schedule 2 drug, medical use, highly addictive")
	}) //start of drug grid//

	$("#xButton").click(function(){
 	$("#slide").removeClass('info_slides_show');
 	$(".hotspot").removeClass('hide_btn');
 });

});

$(document).ready(function(){
	$("#b").click(function(){
		$("#slide").addClass('info_slides_show');
		$("xButton").addClass("btn_close_show")
		$("#popIn").text("Schedule 1 drug, no medical use")
	})

	$("#xButton").click(function(){
 	$("#slide").removeClass('info_slides_show');
 	$(".hotspot").removeClass('hide_btn');
 });

});

$(document).ready(function(){
	$("#c").click(function(){
		$("#slide").addClass('info_slides_show');
		$("xButton").addClass("btn_close_show")
		$("#popIn").text("Schedule 1 drug, no medical use. J caulkins 'If we balanced harm, liability against all the good fun people could have, we'd have a very different process.'")
		$("#popIn").addClass("text_style"); //trying to add css to stuff on blue slide// 
	})

	$("#xButton").click(function(){
 	$("#slide").removeClass('info_slides_show');
 	$(".hotspot").removeClass('hide_btn');
 });

});

$(document).ready(function(){
	$("#d").click(function(){
		$("#slide").addClass('info_slides_show');
		$("xButton").addClass("btn_close_show")
		$("#popIn").text("Schedule 1 drug, no medical use")
		$("#popIn").addClass("text_style");
	})

	$("#xButton").click(function(){
 	$("#slide").removeClass('info_slides_show');
 	$(".hotspot").removeClass('hide_btn');
 });

});

$(document).ready(function(){
	$("#e").click(function(){
		$("#slide").addClass('info_slides_show');
		$("xButton").addClass("btn_close_show")
		$("#popIn").text("Schedule 1 drug, no medical use")
		$("#popIn").addClass("text_style");
	})

	$("#xButton").click(function(){
 	$("#slide").removeClass('info_slides_show');
 	$(".hotspot").removeClass('hide_btn');
 });

});
$(document).ready(function(){
	$("#f").click(function(){
		$("#slide").addClass('info_slides_show');
		$("xButton").addClass("btn_close_show")
		$("#popIn").text("Schedule 3 drug, medical use, addictive")
		$("#popIn").addClass("text_style");
	})

	$("#xButton").click(function(){
 	$("#slide").removeClass('info_slides_show');
 	$(".hotspot").removeClass('hide_btn');
 });

});

