$(document).ready(function () {
    $('.counter').counterUp({
        delay: 70,
        time: 3000
    });

    $('.header__burger').click(function(){
        if(!$('.header-menu').hasClass('active-menu')){
            $('.header-menu').addClass('active-menu');
            $('.fa-bars').hide()
            $('.fa-close').show();
        }
        else{
            $('.header-menu').removeClass('active-menu');
            $('.fa-bars').show()
            $('.fa-close').hide();  
        }
    });

    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        let navHeight = $('.header-nav').innerHeight();
        let headerHeaight = $('header').innerHeight();

        if(scroll >= headerHeaight - navHeight){
            $('.header-nav').addClass('dark-bg')
        }
        else{
            $('.header-nav').removeClass('dark-bg')  
        }

        $('.header-menu__link').each(function(){
            let id = $(this).attr('href');
            let position = $(id).offset().top - navHeight;

            if(scroll >= position){
                $('.header-menu__item_active').removeClass('header-menu__item_active');
                $(this).parent().addClass('header-menu__item_active');
            }
        })
    });

    
    document.querySelector('.works-gallery__buttons').addEventListener('click', function(e){
        if(e.target.classList.contains('works-gallery__btn')){
            let tab = document.querySelectorAll('.works-gallery__buttons .works-gallery__btn');
            for(let i = 0; i < tab.length; i++){
                tab[i].classList.remove('works-gallery__btn_active')
            }
            e.target.classList.add('works-gallery__btn_active')
        }
    
        let dataTab = e.target.getAttribute('data-tab');
        let tabsBody = document.querySelectorAll('.works-gallery__body .works-gallery__content');
    
        for(let j = 0; j < tabsBody.length; j++){
            if(dataTab == j){
                tabsBody[j].style.display = 'flex';
            }
            else{
                tabsBody[j].style.display = 'none';
            }
        }
    });
});

