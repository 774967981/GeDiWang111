$(function(){
    // 手机号码
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
            inp.css('border-color','#ccc');
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
            inp.css('border-color','#ccc');
        }else if(str === ''){
            $('.sp-dlmm').text('不能为空');
            inp.css('border-color','red');
        }else{
            $('.sp-dlmm').text('密码不可用');
            inp.css('border-color','red');
        }
    })
    // 确认密码
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
            inp.css('border-color','#ccc');
        }else{
            $('.sp-qrmm').text('密码不正确');
            inp.css('border-color','red');
        }
    })
    // 验证码
    $('.td-yzm').css('color','#ccc');
    $('.td-dx').css('color','#ccc');
    //短信验证码
     var num1 = '';
    $('.dx').click(function(){

         num1 = Math.floor(Math.random() * (999999 - 99999 + 1) + 99999);
        // console.log(num1)
        $(this).val(num1);
        $('.dx').attr('aaa',num1); 
        $('.td-dx').blur(function(){
            if($(this).val() == $('.dx').attr('aaa')){
                alert('正确')
                $(this).css('color','#ccc');
            }else{
                $('.sp-dx').text('验证码不正确');
                $(this).css('color','red');
            }
        })
    })
    
    // console.log($('.dx').attr('aaa'));
    // console.log(num1);
    $('.td-dx').focus(function(){
        $('.sp-dx').text('禁止频繁获取短信验证码，每天最多三次');
    })
    // $('.td-dx').blur(function(){
    //     let str = $('.td-dx').val();
    //     console.log(str);
    //    if(str === num1){ 
    //         $('.sp-dx').text('验证成功');
    //    } 
    // })
})