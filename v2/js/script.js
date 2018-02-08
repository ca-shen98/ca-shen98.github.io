var _currentAnchor = '';
var VALID_ANCHORS = [ 'aboutme', 'projects' ];

function init() {
    window.onhashchange = function() {
        var newAnchor = location.hash;
        if(newAnchor.length > 0) {
            newAnchor = newAnchor.slice(1);
            if(VALID_ANCHORS.indexOf(newAnchor) >= 0) {
                switchAnchor(newAnchor);
            } // else
        } else {
            switchAnchor(newAnchor);
        }
    };
}

function switchAnchor(newAnchor) {
    if(VALID_ANCHORS.indexOf(_currentAnchor) >= 0) {
        $('#' + _currentAnchor + '_nav-item').removeClass('current-item', 200);
    } else if(_currentAnchor.length == 0) {
        $('#landing_nav-item').removeClass('current-item', 100);
    } // else
    if(VALID_ANCHORS.indexOf(newAnchor) >= 0) {
        $('#' + newAnchor + '_nav-item').addClass('current-item', 200);
    } else if(newAnchor.length == 0) {
        $('#landing_nav-item').addClass('current-item', 100);
    } // else
    _currentAnchor = newAnchor;
}