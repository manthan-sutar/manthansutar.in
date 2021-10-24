
$(document).ready(function () {
    buildComponents()
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
const resumeView = $("#resume-viewer")
const resumeViewBtn = $("#resume-view-btn")
const resumeViewBtnMenu = $("#resume-view-btn-menu")
const resumeViewBtnClose = $("#resume-view-btn-close")
const scrollPercentElement = $("#scroll-percentage")
//Events


menuButton.click(openMenu);
menuButtonClose.click(closeMenu)
resumeViewBtn.click(showResume)
resumeViewBtnMenu.click(showResume)
resumeViewBtnClose.click(closeResumeViewer)





function initState(){
    menuView.hide()
    resumeView.hide()
}

initState();

//Function
function openMenu() {
    menuView.show()
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
    setTimeout(function(){
        menuView.hide()
    }, 1000)
}

function showResume(){
    resumeView.show()
    $(resumeView).css({
        'transform': 'translateX(0%)scale(1)',
        'border-radius': '0%'
    });
    $('body').css('overflow', 'hidden');
}


function closeResumeViewer(){
    $(resumeView).css({
        'transform': 'translateX(-100%)scale(0.1)',
        'border-radius': '20%'
    });
    $('body').css({
        'overflow-x': 'hidden',
        'overflow-y': 'scroll',
    });
    setTimeout(function(){
        resumeView.hide()
    }, 1000)
}