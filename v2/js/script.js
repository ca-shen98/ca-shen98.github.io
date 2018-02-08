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
}

function switchAnchor(newAnchor) {
    $('#' + _currentAnchor + '_nav-item').removeClass('current-item', 200);
    $('#' + newAnchor + '_nav-item').addClass('current-item', 200);
    if(!isLandingAnchor(newAnchor) && isLandingAnchor(_currentAnchor)) {
        $('#nav-wrapper').css('bottom', $('#page-wrapper').height() - $('#nav-wrapper').offset().top - $('#nav-wrapper').outerHeight(true));
        $('#nav-wrapper').css('top', '');
        $('#nav-wrapper').animate({ bottom: 0 }, 200);
    } else if(isLandingAnchor(newAnchor)) {
        $('#nav-wrapper').animate({ top: 0 }, 200);
        $('#nav-wrapper').css('bottom', '');
    }
    _currentAnchor = newAnchor;
}

function isLandingAnchor(anchor) {
    return anchor.length > 0;
}