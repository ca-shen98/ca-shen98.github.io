var _currentAnchor = '';
var VALID_ANCHORS = [ '', 'aboutme', 'projects' ];

function init() {
    window.onhashchange = function() {
        var newAnchor = location.hash;
        if (newAnchor.length > 0) {
            newAnchor = newAnchor.slice(1);
        }
        if (VALID_ANCHORS.indexOf(newAnchor) >= 0) {
            switchAnchor(newAnchor);
        } else {
            location.hash = _currentAnchor;
        }
    };
    window.onresize = function(eventParams) {
        if (isLandingAnchor(_currentAnchor)) {
            $('#_nav-item').css('bottom', eventParams.target.innerWidth >= 550 ? -45 : -64);
        } else {
            $('#_nav-item').css('top', eventParams.target.innerWidth >= 550 ? -45 : -63);
            $('.body-wrapper').css('top', eventParams.target.innerWidth >= 550 ? 45 : 95);
        }
    };
    var tempAnchor = location.hash;
    if (tempAnchor.length > 0) {
        tempAnchor = tempAnchor.slice(1);
        if (VALID_ANCHORS.indexOf(tempAnchor) >= 0) {
            switchAnchor(tempAnchor);
        } else {
            location.hash = '';
        }
    } else {
        location.hash = '';
    }
}

function switchAnchor(newAnchor, animate=true) {
    $('#' + _currentAnchor + '_nav-item').removeClass('current-item', animate ? 250 : 0);
    if (animate) {
        $('#' + _currentAnchor + '_content-wrapper').removeClass('fadeIn');
        $('#' + _currentAnchor + '_content-wrapper').addClass('fadeOut');
    }
    $('#' + _currentAnchor + '_content-wrapper').addClass('not-active');
    if (isLandingAnchor(newAnchor)) {
        $('#_nav-item').css('bottom', $('.page-wrapper').height() - $('#_nav-item').offset().top - $('#_nav-item').outerHeight(true) - ($(window).width() >= 550 ? 45 : 90));
        $('.nav-wrapper').css('bottom', $('.page-wrapper').height() - $('.nav-wrapper').offset().top - $('.nav-wrapper').outerHeight(true));
        $('.nav-row').css('padding-top', 5);
        $('#_nav-item').css('top', '');
        $('.nav-wrapper').css('top', '');
        if (animate) {
            $('.nav-row').css('border-top', '1px solid darkgreen');
            $('#_nav-item').animate({ bottom: $(window).width() >= 550 ? -45 : -64 }, { duration: 250, queue: false });
            $('.nav-wrapper').animate({ bottom: 0 }, { duration: 250, queue: false });
            $('.body-wrapper').animate({ top: 0 }, { duration: 250, queue: false });
            $('.nav-row').animate({ 'border-bottom': '0' }, { duration: 250, queue: false });
        } else {
            $('.nav-row').css('border-top', '1px solid darkgreen');
            $('#_nav-item').css('bottom', $(window).width() >= 550 ? -45 : -64);
            $('.nav-wrapper').css('bottom', 0);
            $('.body-wrapper').css('top', 0);
            $('.nav-row').css('border-bottom', 0);
        }
        $('.nav-row').css('padding-bottom', 10);
    } else if (!isLandingAnchor(newAnchor) && isLandingAnchor(_currentAnchor)) {
        $('#_nav-item').css('top', $('.page-wrapper').height() - $('#_nav-item').outerHeight(true) - ($(window).width() >= 550 ? 45 : 64));
        $('.nav-wrapper').css('top', $('.page-wrapper').height() - $('.nav-wrapper').outerHeight(true));
        $('.nav-row').css('padding-bottom', 5);
        $('#_nav-item').css('bottom', '');
        $('.nav-wrapper').css('bottom', '');
        if (animate) {
            $('.nav-row').css('border-bottom', '1px solid darkgreen');
            $('#_nav-item').animate({ top: $(window).width() >= 550 ? -45 : -63 }, { duration: 250, queue: false });
            $('.nav-wrapper').animate({ top: 0 }, { duration: 250, queue: false });
            $('.body-wrapper').animate({ top: $(window).width() >= 550 ? 45 : 95 }, { duration: 250, queue: false });
            $('.nav-row').animate({ 'border-top': '0' }, { duration: 250, queue: false });
        } else {
            $('.nav-row').css('border-bottom', '1px solid darkgreen');
            $('#_nav-item').css('top', $(window).width() >= 550 ? -45 : -63);
            $('.nav-wrapper').css('top', 0);
            $('.body-wrapper').css('top', $(window).width() >= 550 ? 45 : 95);
            $('.nav-row').css('border-top', 0);
        }
        $('.nav-row').css('padding-top', 10);
    }
    $('#' + newAnchor + '_content-wrapper').removeClass('not-active');
    if (animate) {
        $('#' + newAnchor + '_content-wrapper').removeClass('fadeOut');
        $('#' + newAnchor + '_content-wrapper').addClass('fadeIn');
    }
    $('#' + newAnchor + '_nav-item').addClass('current-item', animate ? 250 : 0);
    _currentAnchor = newAnchor;
}

function isLandingAnchor(anchor) {
    return anchor.length == 0;
}

function onNavMenuItemClick(source) {
    if (source.id.slice(0, source.id.indexOf('_')) == _currentAnchor) {
        $('.nav-wrapper').addClass( 'rubberBand' );
        $('#_nav-item').addClass( 'rubberBand' );
        setTimeout( function() {
            $('.nav-wrapper').removeClass( 'rubberBand' );
            $('#_nav-item').removeClass( 'rubberBand' );
        }, 500 );
    }
}
