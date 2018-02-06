var _currentAnchor = '';
var VALID_ANCHORS = [ 'aboutme', 'projects' ];

function init() {
    window.onhashchange = function() {
        var newAnchor = location.hash;
        if (newAnchor.length > 0) {
            newAnchor = newAnchor.slice(1);
            if (VALID_ANCHORS.indexOf(newAnchor) >= 0) {
                // switch to newAnchor if not already there
                _currentAnchor = newAnchor;
            } else {
                location.hash = _currentAnchor;
            }
        } else {
            // switch to home if not already there
            _currentAnchor = newAnchor;
        }
    };
}