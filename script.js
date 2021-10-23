

$(document).ready(function () {

    // loadServicesAnimations()

    $(window).scroll(function (e) {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop) / (docHeight - winHeight);
        var scrollPercentRounded = Math.round(scrollPercent * 100);
        const scrollPercentElement = document.getElementById("scroll-percentage")
        scrollPercentElement.style = "width:" + scrollPercentRounded + "%;z-index:2"
        repositionLabel();
        console.log(scrollPercentRounded);
    });

    $(window).resize(function () {
        repositionLabel();
    });

    function repositionLabel() {
        $('#scrollPercentLabel').css({
            position: 'fixed',
            left: ($(window).width() - $('#scrollPercentLabel').outerWidth()) / 2,
            top: (($(window).height() - $('#scrollPercentLabel').outerHeight()) / 2) - $('#scrollPercentLabel').height()
        });
    }

    repositionLabel();
});




//Selectors
const menuButton = $("#menu-btn")
const menuButtonClose = $("#menu-btn-close")
const menuView = $("#ms-menu")
const scrollPercentElement = $("#scroll-percentage")
//Events
menuButton.click(openMenu);
menuButtonClose.click(closeMenu)


//Function
function openMenu() {
    menuButton.hide()
    $(menuView).css({
        'transform': 'translateX(0%)scale(1)',
        'border-radius': '0%'
    });
    $('body').css('overflow', 'hidden');
}

function closeMenu() {
    menuButton.show()
    $(menuView).css({
        'transform': 'translateX(-100%)scale(0.1)',
        'border-radius': '20%'
    });
    $('body').css({
        'overflow-x': 'hidden',
        'overflow-y': 'scroll',
    });
}


// function loadServicesAnimations() {
//     const appDevAnimationElement = document.getElementById("app_dev_animation")
//     const webDevAnimationElement = document.getElementById("web_dev_animation")
//     const seoAnimationElement = document.getElementById("seo_animation")

//     bodymovin.loadAnimation({
//         container: appDevAnimationElement,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         path: 'assets/lottie-animations/app-dev.json' // the path to the animation json
//     })
//     bodymovin.loadAnimation({
//         container: webDevAnimationElement,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         path: 'assets/lottie-animations/web-development-design.json' // the path to the animation json
//     })
//     bodymovin.loadAnimation({
//         container: seoAnimationElement,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         path: 'assets/lottie-animations/seo.json' // the path to the animation json
//     })
// }


