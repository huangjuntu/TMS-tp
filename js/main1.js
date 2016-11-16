//右侧下拉框事件
//var name1=new Array("Saab","Volvo","BMW");

$('#mySelect').change(function() {

	var select_value = $(this).children('option:selected').val()
	if(select_value == 1) {

		$('.desktop-two-button').removeAttr("disabled");
		$('.desktop-two-center-one').css("display", "block");
		$('.desktop-two-center-two').css("display", "none");
		$('.desktop-two-center-three').css("display", "none");
		$(".desktop-two-button").removeClass("white_bd1");

		var select1 = new Array(
			"校区云平台<br/>(科技网/研究院)", "容灾备份<br/>(科技网/研究院)", "校园照明与安防<br/>(飞乐/云赛智联)", "安全教室<br/>(鑫森)", "校区一卡通<br/>(物联)",
			"校园公广系统<br/>(赛嘉)", "校区水质<br/>(科学仪器/云瀚)", "能耗管理系统<br/>(物联)", "校区停车<br/>(云赛智联)", "云应用<br/>(南洋万邦)",
			"电子教室", "智慧图书系统", "校园食安管理<br/>(溯源公司)", "慕课平台<br/>(鑫森)", "远程桌面<br/>(赛维)"
		);
		for(var x = 1; x <= 15; x++) {
			$("#leap" + x).children().next().html(select1[x - 1]);
		}

	} else if(select_value == 2) {
		$('.desktop-two-center-two').css("display", "block");
		$('.desktop-two-center-one').css("display", "none");
		$('.desktop-two-center-three').css("display", "none");
		$(".desktop-two-center .news").css("display", "block");
		$('.desktop-two-button').attr("disabled", "disabled");
		$(".desktop-two-button").addClass("white_bd1");
		var select2 = new Array(
			"校区云平台<br/>(科技网/研究院)", "容灾备份<br/>(科技网/研究院)", "校园照明与安防<br/>(飞乐/云赛智联)", "安全教室<br/>(鑫森)", "校区一卡通<br/>(物联)",
			"校园公广系统<br/>(赛嘉)", "校区水质<br/>(科学仪器/云瀚)", "能耗管理系统<br/>(物联)", "校区停车<br/>(云赛智联)", "云应用<br/>(南洋万邦)",
			"电子教室", "智慧图书系统", "校园食安管理<br/>(溯源公司)", "慕课平台<br/>(鑫森)", "远程桌面<br/>(赛维)"
		);
		for(var x = 1; x <= 15; x++) {
			$("#leap" + x).children().next().html(select2[x - 1]+"1");
		}

	} else if(select_value == 3) {
		$('.desktop-two-center-three').css("display", "block");
		$('.desktop-two-center-one').css("display", "none");
		$('.desktop-two-center-two').css("display", "none");
		$(".desktop-two-button").addClass("white_bd1");
		var select2 = new Array(
			"校区云平台<br/>(科技网/研究院)", "容灾备份<br/>(科技网/研究院)", "校园照明与安防<br/>(飞乐/云赛智联)", "安全教室<br/>(鑫森)", "校区一卡通<br/>(物联)",
			"校园公广系统<br/>(赛嘉)", "校区水质<br/>(科学仪器/云瀚)", "能耗管理系统<br/>(物联)", "校区停车<br/>(云赛智联)", "云应用<br/>(南洋万邦)",
			"电子教室", "智慧图书系统", "校园食安管理<br/>(溯源公司)", "慕课平台<br/>(鑫森)", "远程桌面<br/>(赛维)"
		);
		for(var x = 1; x <= 15; x++) {
			$("#leap" + x).children().next().html(select2[x - 1]+"2");
		}
	} else {}
})
$('#mySelect2').change(function() {
	var select_value2 = $(this).children('option:selected').val()
	if(select_value2 == 00) {
		$('.news0').css("display", "block");
		$('.news1,.news2,.news3,.news4,.news5,.news6').css("display", "none");
	} else if(select_value2 == 11) {
		$('.news1').css("display", "block");
		$('.news0,.news2,.news3,.news4,.news5,.news6').css("display", "none");
	} else if(select_value2 == 22) {
		$('.news2').css("display", "block");
		$('.news0,.news1,.news3,.news4,.news5,.news6').css("display", "none");
	} else if(select_value2 == 33) {
		$('.news3').css("display", "block");
		$('.news0,.news1,.news2,.news4,.news5,.news6').css("display", "none");
	} else if(select_value2 == 44) {
		$('.news4').css("display", "block");
		$('.news0,.news1,.news2,.news3,.news5,.news6').css("display", "none");
	} else if(select_value2 == 55) {
		$('.news5').css("display", "block");
		$('.news0,.news1,.news2,.news3,.news4,.news6').css("display", "none");
	} else if(select_value2 == 66) {
		$('.news6').css("display", "block");
		$('.news0,.news1,.news2,.news3,.news4,.news5').css("display", "none");
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

$(".button-shigong").click(function() {
	window.location.href = "index-formal.php";
})
$(".button-formal").click(function() {
	window.location.href = "index-shigong.php";
})

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

$(function() {
	var d2 = $('.jq23').dad();
	var target = $('.dropzone2');

	d2.addDropzone(target, function(e) {
		e.find('span').appendTo(target);
		e.remove();
	});
});
$(function() {
	var d3 = $('.jq24').dad();
	var target = $('.dropzone3');

	d3.addDropzone(target, function(e) {
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