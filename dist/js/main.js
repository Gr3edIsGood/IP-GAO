
$(document).ready(function(){
    $(".popup__changed").hide();
    $(".password__area").hide();
    $(".popup__changed").hide();
    $(".save__btn").click(function (){
        $(".popup__changed").slideDown();
    });
    $(".close__popup").click(function (){
        $(".popup__changed").slideUp();
    });
    $("#password").click(function (){
        $(".password__area").slideDown();
    })
    $(".burger").click(function (){
        $(".header__mobile-nav").slideToggle();
        $(".burger").hide();
        $(".close__burger").show();
    })
    $(".close__burger").click(function (){
        $(".header__mobile-nav").slideToggle();
        $(".burger").show();
        $(".close__burger").hide();
    })

    $(document).click(function(e) {
        if (!$(e.target).closest(".password__option").length) {
            $('.password__area').slideUp();
        }
        e.stopPropagation();
    })
})