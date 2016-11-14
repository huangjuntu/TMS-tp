<!DOCTYPE html>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<html>
	<head>
		<title>i-stack登录界面</title>
		<link rel="stylesheet" type="text/css" href="css/Login_style.css" />
		<script type="text/javascript" src="js/Login_javascript.js"></script>
	</head>
	<body>
		<!--<div class="login_frame"></div>-->
		<div class="LoginWindow">
				<form method="post" action="../copy-index.php" onsubmit="return user_input()" class="login">
					<h1 class="title">登录</h1>
					<p>
						<input type="text" name="id" id="id" value="" placeholder="用户名">
					</p>
					<p>
						<input type="password" name="password" id="password" value="" placeholder="密码">
					</p>
					<button type="submit" class="btn-submit">进入</button>
				</form>
		</div>
		<!--<div id="timeArea">
			<script>
				LoadBlogParts();
			</script>
		</div>-->
	</body>

</html>