var _currentAnchor = '';
var VALID_ANCHORS = [ 'aboutme', 'projects' ];

function init() {
    window.onhashchange = function() {
        var newAnchor = location.hash;
        if(newAnchor.length > 0) {
            newAnchor = newAnchor.slice(1);
            if(VALID_ANCHORS.indexOf(newAnchor) >= 0) {
                if(_currentAnchor !== newAnchor) {
                    switchAnchor(newAnchor);
                }
            } else {
                location.hash = _currentAnchor;
            }
        } else {
            if(_currentAnchor !== newAnchor) {
                switchAnchor(newAnchor);
            }
        }
    };
}

function switchAnchor(newAnchor) {
    if(newAnchor.length == 0) {

    } else {
        
    }
    _currentAnchor = newAnchor;
}