"use strict";$(function(){var i=$(".uname"),e=$(".upwd"),t=$(".login-dl-btn"),c=$("p");$(".login-dx a").eq(1).click(function(){location.href="register.html"}),i.blur(function(){if(!$(".uname").val())return c.css("display","block"),void c.text("用户名不能为空");c.css("display","none")}),e.blur(function(){if(!$(".upwd").val())return c.css("display","block"),void c.text("密码不能为空");c.css("display","none")}),t.click(function(){var i,e=$(".uname").val(),t=$(".upwd").val(),o=$cookie.get("registors")?$cookie.get("registors"):"",s=(i=o)?JSON.parse(i):{};if(!(e in s))return c.css("display","block"),void c.text("用户名不存在");if(s[e]!=t)return c.css("display","block"),void c.text("密码错误");c.css("display","block"),c.text("登陆成功"),location.href="home_page.html",$("input[type='checkbox']").is(":checked")&&$cookie.create("registors",JSON.stringify(s),30)})});