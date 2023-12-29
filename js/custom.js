$ (function(){

    $('.main_visual_slide').slick({
        arrows: false,
        dots: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
    });

   
    
    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    })

   

    window.addEventListener('scroll', ()=> {
        let SCT = window.scrollY;
        SCT > 0 
        ? document.querySelector('.Header').classList.add('on')
        : document.querySelector('.Header').classList.remove('on');
    
    });
    
        AOS.init();
})