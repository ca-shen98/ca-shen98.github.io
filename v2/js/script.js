var _currentAnchor = '';
var VALID_ANCHORS = [ '', 'aboutme', 'projects' ];

function init() {
    window.onhashchange = function() {
        var newAnchor = location.hash;
        if(newAnchor.length > 0) {
            newAnchor = newAnchor.slice(1);
        }
        if(VALID_ANCHORS.indexOf(newAnchor) >= 0) {
            switchAnchor(newAnchor);
        } else {
            location.hash = _currentAnchor;
        }
    };
    var tempAnchor = location.hash;
    if(tempAnchor.length > 0) {
        tempAnchor = tempAnchor.slice(1);
    }
    if(VALID_ANCHORS.indexOf(tempAnchor) >= 0) {
        switchAnchor(tempAnchor);
    } else {
        location.hash = '';
    }
}

function switchAnchor(newAnchor, animate=true) {
    $('#' + _currentAnchor + '_nav-item').removeClass('current-item', animate ? 250 : 0);
    $('#' + newAnchor + '_nav-item').addClass('current-item', animate ? 250 : 0);
    if(!isLandingAnchor(newAnchor) && isLandingAnchor(_currentAnchor)) {
        $('.nav-row').css('border-top', '1px solid darkgreen');
        $('.nav-row').css('padding-top', '5px');

        $('#_nav-item').css('bottom', $('.page-wrapper').height() - $('#_nav-item').offset().top - $('#_nav-item').outerHeight(true) - 45);
        $('.nav-wrapper').css('bottom', $('.page-wrapper').height() - $('.nav-wrapper').offset().top - $('.nav-wrapper').outerHeight(true));

        $('#_nav-item').css('top', '');
        $('.nav-wrapper').css('top', '');
        if(animate) {
            $('#_nav-item').animate({ bottom: -45 }, { duration: 250, queue: false });
            $('.nav-wrapper').animate({ bottom: 0 }, { duration: 250, queue: false });
        } else {
            $('#_nav-item').css('bottom', -45);
            $('.nav-wrapper').css('bottom', 0);
        }

        // $('.body-wrapper').css('top', '');
        $('.nav-row').css('border-bottom', '0px');
        $('.nav-row').css('padding-bottom', '10px');
    } else if(isLandingAnchor(newAnchor)) {
        $('.nav-row').css('border-bottom', '1px solid darkgreen');
        $('.nav-row').css('padding-bottom', '5px');

        if(animate) {
            $('#_nav-item').animate({ top: -0 }, { duration: 250, queue: false });
            $('.nav-wrapper').animate({ top: 0 }, { duration: 250, queue: false });
        } else {
            $('#_nav-item').css('top', -0);
            $('.nav-wrapper').css('top', 0);
        }

        // $('.body-wrapper').css('top', '45px');
        $('.nav-row').css('border-top', '0px');
        $('.nav-row').css('padding-top', '10px');
    }
    _currentAnchor = newAnchor;
}

function isLandingAnchor(anchor) {
    return anchor.length > 0;
}