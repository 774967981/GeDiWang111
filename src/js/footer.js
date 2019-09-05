$(function(){
    $('#footer .footer-top .footer-top-logo li').each(function(index,value){
       
        $(value).hover(function(){
            $(this).children('a').css('color','#147efb')
        },function(){
            $(this).children('a').css('color','#cd9368')
        })
    })
    $('#footer p > a').hover(function(){
        $(this).css(
            {'color':'#cd9368' , 'text-decoration' : 'underline'}
        )},function(){
           $(this).css({'color' : '#444', 'text-decoration' : 'none'})
        
        })
})