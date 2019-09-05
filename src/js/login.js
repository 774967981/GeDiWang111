$(function(){
    const uname_inp = $('.uname');
    const upwd_inp = $('.upwd');
    const login_dl = $('.login-dl-btn');
    const p_p = $('p');
    $('.login-dx a').eq(1).click(function(){
        location.href = 'register.html';
    })
    
    // 用户验证
         uname_inp.blur(function(){
            const uname = $('.uname').val();
            if(!uname){
                p_p.css('display','block');
                p_p.text('用户名不能为空');
                return;
            }else{
                p_p.css('display','none');
            }
        })
       upwd_inp.blur(function(){
           const upwd = $('.upwd').val();
           if(!upwd){
                p_p.css('display','block');
                p_p.text('密码不能为空');
                return;
            }else{
                p_p.css('display','none');
            }
       })
    login_dl.click(function(){
        const uname = $('.uname').val();
        const upwd = $('.upwd').val();
        let cookieStr = $cookie.get('registors') ? $cookie.get('registors') : '';
        let cookieObj = strToObj(cookieStr);
        if(uname in cookieObj){
            if(cookieObj[uname] == upwd){
                p_p.css('display','block');
                p_p.text('登陆成功');
                location.href = 'home_page.html';
            }else{
                p_p.css('display','block');
                p_p.text('密码错误');
                return;
            }
        }else{
            p_p.css('display','block');
            p_p.text('用户名不存在');
            return;
        }
       
        // 重新创建cookie
        if($("input[type='checkbox']").is(':checked')){
            $cookie.create('registors',JSON.stringify(cookieObj),30);
        }
        function strToObj(str){
            if(!str){
                return{};
            }
            return JSON.parse(str);
        }
    })
})