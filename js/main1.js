//右侧下拉框事件
$('#mySelect').change(function() {
	var select_value = $(this).children('option:selected').val()
	if(select_value == 1) {
		$('.desktop-two-button').removeAttr("disabled");
		$('.desktop-two-center-one').css("display", "block");
		$('.desktop-two-center-two').css("display", "none");
		$('.desktop-two-center-three').css("display", "none");

		$(".desktop-two-button").removeClass("white_bd1");
	} else if(select_value == 2) {
		$('.desktop-two-center-two').css("display", "block");
		$('.desktop-two-center-one').css("display", "none");
		$('.desktop-two-center-three').css("display", "none");
		$(".desktop-two-center .news").css("display", "block");
		$('.desktop-two-button').attr("disabled", "disabled");
		$(".desktop-two-button").addClass("white_bd1");
	} else if(select_value == 3) {
		$('.desktop-two-center-three').css("display", "block");
		$('.desktop-two-center-one').css("display", "none");
		$('.desktop-two-center-two').css("display", "none");
		$(".desktop-two-button").addClass("white_bd1");
	} else {}
})
$('#mySelect2').change(function() {
	var select_value2 = $(this).children('option:selected').val()
	if(select_value2 == 11) {
		$('.news1').css("display", "block");
		$('.news2').css("display", "none");
		$('.news3').css("display", "none");
		$('.news4').css("display", "none");
		$('.news5').css("display", "none");
	} else if(select_value2 == 22) {
		$('.news2').css("display", "block");
		$('.news1').css("display", "none");
		$('.news3').css("display", "none");
		$('.news4').css("display", "none");
		$('.news5').css("display", "none");
	} else if(select_value2 == 33) {
		$('.news3').css("display", "block");
		$('.news1').css("display", "none");
		$('.news2').css("display", "none");
		$('.news4').css("display", "none");
		$('.news5').css("display", "none");
	} else if(select_value2 == 44) {
		$('.news4').css("display", "block");
		$('.news1').css("display", "none");
		$('.news2').css("display", "none");
		$('.news3').css("display", "none");
		$('.news5').css("display", "none");
	} else if(select_value2 == 55) {
		$('.news5').css("display", "block");
		$('.news1').css("display", "none");
		$('.news2').css("display", "none");
		$('.news3').css("display", "none");
		$('.news4').css("display", "none");
	} else {}
})

//select里面新增加一项
$(".input1").attr("placeholder", " your city");
$(".input1").focus(function() {
	if(placeholder == '  your city') {
		placeholder = '';
	}
}).blur(function() {
	if(placeholder == '') {
		placeholder = '  your city';
	}

});

//var show1 = 0;
$(".desktop-two-button").click(function() {
//	if(show1 == 0) {
//		$(".desktop-two-button").html("返回");
		$(".desktop-two-button").addClass("white_bd");
		setTimeout(function() {
			$(".desktop-two-button").removeClass("white_bd");
		}, 100);
		$(".desktop-two-buttom").css("display", "none");
		$(".shalou").css("display", "block");
		$(".show-pic").css("display", "none");
		setTimeout(function() {
			$(".shalou").css("display", "none");

			$(".show-pic").fadeIn(3000);

		}, 5000);
		clearTimeout();
//		show1 = 1;
//	} else {
//		$(".desktop-two-button").html("数据汇总");
//		$(".desktop-two-buttom").css("display", "block");
//		$(".shalou").css("display", "none");
//		$(".show-pic").css("display", "none");
//		show1 = 0;
//	}

})

//黑色区域
var timer2 = 0;
var imgs = ['img/etl.gif', 'img/etl1.gif', 'img/etl2.gif']; //注意：换成三张名称一样的不行
var len = imgs.length;
var current = 0;
$(".shalou").live('mouseover', function() {
	current = ++current; //等同于下面注释部分
	if(current == len) {
		current = 0;
	} else {
		current = current;
	}
	//current = ++current == len ? 0: current;
	$("#target").attr("src", imgs[current]);
	$(".code-img").css("display", "block");
	if(!timer2) {
		timer2 = setTimeout(function() {
			$(".code-img").css("display", "none");
		}, 5000);
	}

}).mouseleave(function() {
	clearTimeout(timer2); //最好有这一句
	timer2 = null;
	$(".code-img").css("display", "none");
});

// 菜单栏按钮点击
$('.jq22').css("display", "none");
$(".button-icon").toggle(
	function() {
		$('.jq22').css("display", "block");
		$("#desktop .icon").css("display", "none");
		$("#button-icon").text("关闭整合模式");
		$("#button-icon").removeClass("button-icon");
		$("#button-icon").addClass("button-icon1");

	},
	function() {
		$('.jq22').css("display", "none");
		$("#desktop .icon").css("display", "block");
		$("#button-icon").text("开启整合模式");
		$("#button-icon").removeClass("button-icon1");
		$("#button-icon").addClass("button-icon");
	}
);

// $(".copy1").draggable({
//     helper: "clone",
//     revert: "invalid"
// });

// copy图标的ui的拖拽
$(function() {
	var d = $('.jq22').dad();
	var target = $('.dropzone');

	d.addDropzone(target, function(e) {
		e.find('span').appendTo(target);
		e.remove();
	});
});

//      左侧js左侧菜单开始
$(".show-hide1").hide();
$(".mouseover-show1").mouseover(function() {
	//				$(this).parent().next().slideDown();  
	$(this).parent().next().stop(true, true).slideDown();
}).mouseout(function() {
	$(this).parent().next().stop(true, true).slideUp();
});
//	js左侧菜单加入结束

// pnp涉及到了theme-popover-mask标签
jQuery(document).ready(function($) {
	$('.theme-popover-mask').fadeIn(100);
	$('.theme-popover').slideDown(200);
	$('.theme-poptit .close').click(function() {
		$('.theme-popover-mask').fadeOut(100);
		$('.theme-popover').slideUp(200);
	})
})

//双击ETL，显示
$(".db_click1").dblclick(function() {
	$(this).hide();
	$(".db_click2").show();
})
$(".db_click2").dblclick(function() {
	$(this).hide();
	$(".db_click1").show();
})