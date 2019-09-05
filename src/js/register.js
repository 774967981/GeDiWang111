$(function(){
//     // 手机号码
    $('.td-sjhm').focus(function(){
        $('.sp-sjhm').text('请输入您的手机号码，方便日后找回');
    })
    $('.td-sjhm').blur(function(){
        let inp = $('.td-sjhm');
        let str = $('.td-sjhm').val();
        // console.log(str);
        let re = /^(13|14|15|17|18|19)[0-9]{9}$/;
        if(re.test(str) === true){
            $('.sp-sjhm').text('手机号码可用！');
            inp.css('border-color','pink');
        }else if(str === ''){
            $('.sp-sjhm').text('请输入您的手机号码，方便日后找回');
            inp.css('border-color','red');
        }else{
            $('.sp-sjhm').text('手机号码不可用！');
            inp.css('border-color','red');
        }
    })
// 登录密码
    $('.td-dlmm').focus(function(){
        $('.sp-dlmm').text('6-16个字符，由数字或字母组成');
    })
    $('.td-dlmm').blur(function(){
        let inp = $('.td-dlmm');
        let str = $('.td-dlmm').val();
        // console.log(str);
        let re = /^[a-zA-Z\d]{6,16}$/;
        if(re.test(str) === true){
            $('.sp-dlmm').text('密码可用');
            inp.css('border-color','pink');
        }else if(str === ''){
            $('.sp-dlmm').text('不能为空');
            inp.css('border-color','red');
        }else{
            $('.sp-dlmm').text('密码不可用');
            inp.css('border-color','red');
        }
    })
//     // 确认密码
    $('.td-qrmm').focus(function(){
        $('.sp-qrmm').text('请再输一次密码');
    })
    $('.td-qrmm').blur(function(){
        let qrmm_val = $('.td-qrmm').val();
        let dlmm_val = $('.td-dlmm').val();
        let inp = $('.td-qrmm');
        // console.log(dlmm_val);
        // console.log(qrmm_val);
        if($('.td-qrmm').val() === ''){
            $('.sp-qrmm').text('');
            inp.css('border-color','red');
        }else if( qrmm_val === dlmm_val){
            $('.sp-qrmm').text('密码正确');
            inp.css('border-color','pink');
        }else{
            $('.sp-qrmm').text('密码不正确');
            inp.css('border-color','red');
        }
    })
//     // 验证码
//     // $('.td-yzm').css('border-color','#ccc');
//     // $('.dx').css('border-color','#ccc');
//     //短信验证码
    
    $('.dx').click(function(){
        var num1 = '';
        num1 = Math.floor(Math.random() * (999999 - 99999 + 1) + 99999);
        $(this).val(num1);
        $('.dx').attr('aaa',num1); 
        $('.td-dx').blur(function(){
            // console.log($('.dx').attr('aaa'));
            if($(this).val() == $('.dx').attr('aaa')){
                alert('正确')
                $(this).css('border-color','pink');
            }else if($(this).val() == ''){
                $('.sp-dx').text('验证码不正确');
                $(this).css('border-color','red');
            }else{
                $('.sp-dx').text('验证码不正确');
                $(this).css('border-color','red');
            }
        })
    })
    $('.td-dx').focus(function(){
        $('.sp-dx').text('禁止频繁获取短信验证码，每天最多三次');
        $(this).css('border-color','red');
    })
    
        

    // 同意协议并注册
    $('.submit-ty').click(function(){
    // 获取原有cookie
    // registors={"账号" : '密码',"账号" : '密码'}
    let uname = $('.td-sjhm').val();
    let upwd = $('.td-dlmm').val();
    if(!uname){
        alert('手机号不能为空');
        return;
    }
    if(!upwd){
        alert('密码不能为空');
        return;
    }
    let cookieStr = $cookie.get('registors') ? $cookie.get('registors') : '';
    let cookieObj = strToObj(cookieStr);
    if(uname in cookieObj){
        alert('手机号已注册');
        return;
    }else{
        cookieObj[uname] = upwd;
    }
    var colors = $('#aa').css('border-color');
    if(colors == 'rgb(255, 192, 203)'){
        alert('注册成功')
    }else{
        alert('请填写真确信息')
    }
    //重新创建cookie
    $cookie.create('registors',JSON.stringify(cookieObj),7);
    
    
    function strToObj(str){
                if(!str){
                    return {};
                }
                return JSON.parse(str);
            }
        
    })
})  