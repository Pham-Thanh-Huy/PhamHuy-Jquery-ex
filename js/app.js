$(document).ready(function () {
    $('.list__slider__item img:first').addClass('active');
    var bigImage = $('.big__image');
    var thumbs = $('.list__slider__item img');

    thumbs.click(function () {
        bigImage.attr('src', this.src);
        thumbs.removeClass('active');
        $(this).addClass('active');
    });
    //cách làm 1
    // $('.fa-chevron-left').click(function () {
    //     var currentImage = bigImage.attr('src');
    //     var currentIndex = thumbs.index(thumbs.filter('[src="' + currentImage + '"]'));
    //     var prevIndex = (currentIndex - 1) % thumbs.length;
    //     bigImage.attr('src', thumbs.eq(prevIndex).attr('src'));
    //     thumbs.removeClass('active');
    //     thumbs.eq(prevIndex).addClass('active');
    // });

    // $('.fa-chevron-right').click(function () {
    //     var currentImage = bigImage.attr('src');
    //     var currentIndex = thumbs.index(thumbs.filter('[src="' + currentImage + '"]'));
    //     var nextIndex = (currentIndex + 1) % thumbs.length;
    //     bigImage.attr('src', thumbs.eq(nextIndex).attr('src'));
    //     thumbs.removeClass('active');
    //     thumbs.eq(nextIndex).addClass('active');
    // });

    //-cách làm 2
$('.fa-chevron-right').click(function(){
    if($('.list__slider__item img:last').hasClass('active')){
        $('.list__slider__item img:first').click();
    }else{
        $('.list__slider__item img.active').next().click();
    }
    
});

$('.fa-chevron-left').click(function(){
    if($('.list__slider__item img:first').hasClass('active')){
        $('.list__slider__item img:last').click();
    }else{
        $('.list__slider__item img.active').prev().click();
    }
    
});

});
