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
const sendEmailButton = $("#send-email-btn")


const serviceLink = $("#services-link");

//Events


sendEmailButton.click(sendEmail)


menuButton.click(openMenu);
menuButtonClose.click(closeMenu)
resumeViewBtn.click(showResume)
resumeViewBtnMenu.click(showResume)
resumeViewBtnClose.click(closeResumeViewer)

serviceLink.click(showServices)


function initState(){
    menuView.hide()
    resumeView.hide()
}



var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

initState();




//Function
function openMenu() {
    menuView.show()
    $(menuView).css({
        'transform': 'translateX(0%)scale(1)',
        'border-radius': '0%'
    });
    $('body').css('overflow', 'hidden');
}

function closeMenu() {
    $(menuView).css({
        'transform': 'translateX(-100%)scale(0.1)',
        'border-radius': '20%'
    });
    $('body').css({
        'overflow-x': 'hidden',
        'overflow-y': 'scroll',
    });
}



function showServices(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#services-section").offset().top
    }, 500);
    closeMenu()
}


//index.js  
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "Manthansutar99@gmail.com",
	Password : "7066604884",
	To : 'Manthansutar99@gmail.com',
	From : "teamhaztech@gmail.com",
	Subject : "Sending Email using javascript - manthansutar.in",
	Body : "Hello World!!",
	}).then(
		message => alert("mail sent successfully")
	);
}

function showResume(){
    if(isMobile.any()){
        window.location.href = './database/Manthan Sutar - Resume.pdf';
    }else{
        resumeView.show()
        $(resumeView).css({
            'transform': 'translateX(0%)scale(1)',
            'border-radius': '0%'
        });
        $('body').css('overflow', 'hidden');
    }
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
}


