var _CurrentPage = 'landing';
var VALID_ANCHORS = [ 'aboutme', 'experience', 'projects', 'shenanigans' ];
var CONTENT_MAP = {
    'aboutme': {
        'Aspiring computer engineer': "<p>As an aspiring computer engineer, what drives me is a passion for developing impactful technologies. I'm a learning enthusiast, interested in the <b>fields of Big Data, Machine Learning, and the Internet of Things</b>, and how these technologies can be leveraged to build smart systems across a broad range of industries, including health care, enterprise/business, manufacturing, sport, entertainment, and more. I like to read about the latest tech news, as well as more detailed, in-depth articles on cool algorithms and technologies.</p>",
        'High achieving student': "<p>I'm a <b>2B computer engineering student</b> at the <b>University of Waterloo</b>. I'm also planning on completing a minor in Economics. I've excelled academically so far, achieving a <b>cumulative average of 93.1%</b> over my first 3 terms, and placing on the Term Dean's Honour List for all of these terms. Moreover, I've <b>ranked 2nd</b> out of over 160 students in my class for the past 2 terms.</p>",
        /* publications, awards */
        'Skilled software developer': "<p>With about three years of relevant technical experience through meaningful coop work terms, interesting personal projects, and courses, I've gained a strong foundation of technical skills. My most comfortable programming languages are <b>Java, Javascript, C#, Python, and C++</b>. I've also worked with some fundamentals like <b>SQL, ReST services, MVC, AJAX</b>, and more. This foundation is complemented by my experience with some cutting edge technologies, including <b>Apache Spark, Hadoop, Microsoft Azure, SAP HANA, and Node.js.</b></p>",
        /* skills */
    },
    'experience': {
        'SAP': "<h6><b>Software Developer | Big Data Tooling Team</b> - May to Aug 2017</h6>" +
        "<h6>Full stack JavaScript development for the SAP HANA Database Explorer Node.js web app, leveraging SAP UI5 and WATT frameworks, including development related to displaying, filtering, and simple dynamic analysis of datasets.</h6>" +
        "<p>- Built a SQL debugging interface for procedures and functions, providing previously unavailable functionality, which increased usage and adoption of the tool.</p>",
        'UWaterloo': "<h6><b>Undergraduate Research Assistant | Department of ECE | Dr. V. Gaudent</b> - Jan to Apr 2017</h6>" +
        "<p>- Used the OpenMP API in C to increase scalability/parallelism of custom LDPC decoder algorithm simulation/analysis software, improving performance 4-fold.</p>",
        'CRC': "<h6><b>Juniour Engineering | Network Applications Group</b> - Sep to Dec 2016</h6>" +
        "<h6>Development in Java, Python, and C# of applications, systems, and data analysis scripts that leveraged Microsoft Azure, SQL Server, and Apache Spark for a radio spectrum environment analysis testbed system.</h6>" +
        "<p>- Designed and implemented a new automated batch processing data analysis flow for monitoring WiFi and LTE usage, improving scalability and reducing execution time from about 5 hours to 15 minutes.</p>",
        'Tigercat': "<h6><b>Systems Software Developer | Telematics Team</b> - Jan to Apr 2016</h6>" +
        "<h6>C# development of applications for telematics diagnostics, monitoring, and testing purposes, including the development of a new internal desktop tool.</h6>" +
        "<p>- Designed and developed a tool and service system for importing, decrypting, and visualizing detailed SQLite log data from telematics devices, providing a simplified diagnostics work flow used by about 25% of employees.</p>"
    },
    'projects': {
        'Twitter Trends Analyzer': "<p>A (Java) Spark Streaming script that performs basic data analysis on tweets related to a search term.</p>",
        'NHL Data Viz': "<p>In Progress</p>",
        'Spatial-Temporal Data Viz': "<p>A prototype data analysis tool for dynamically filtering, aggregating, and visualizing spatial data based on a map’s zoom and bounds.</p>" +
        "<p>Consisted of a JavaScript user interface (leveraging Leaflet and Chart.js libraries) interfacing with an Apache Druid data store, and leveraging a Geohash algorithm for spatial indexing.</p>",
        'BikeSafe for V2V': "<p>A Pebble watch app (written in C) that detected arm gestures from cyclists based on accelerometer data.</p>" +
        "<p>Presented at Hack the North 2016</p>",
        'Dead Reckoning Indoor Navigation App': "<p>An Android app that navigates a user within pre-mapped indoor rooms using a heuristic route-finding algorithm, and tracks a user’s position using an accelerometer-based step displacement algorithm.</p>",
        'CryptoServer': "<p>A ReSTful C# server that allows clients to upload and decrypt/encrypt files using locally stored keys.</p>",
        'SleepForce': "<p>A  smart bed monitoring system that recognizes bed-related activities based on data from force sensors using a supervised machine learning generated decision tree.</p>" +
        "<p>A Java program interfacing with force sensors via a ZigBee node.</p>" +
        "<p>Participated in CWSF 2015 and received a Bronze Medal Excellence Award.</p>",
        'Fallen': "<p>An Android app for detecting falls using accelerometer data, and alerting pre-specified contacts using the Twilio API.</p>",
        'RFInDer': "<p>A Java program interfacing with a passive RFID handheld reader to find objects with RFID tags (tag IDs were mapped to objects in a MySQL database).</p>"
    },
    'shenanigans': "<p></p>"
    /* <p>This page is just a section for me to talk about some non-technical interests outside of work/school.</p>
    <!-- sports, travel, movies/tv, reading --> */
};

function init() {
    window.onhashchange = function() {
        var newPage = location.hash;
        if( newPage ) {
            newPage = newPage.slice( 1 );
            if( VALID_ANCHORS.indexOf( newPage ) >= 0 ) {
                if( newPage !== _CurrentPage ) {
                    switchPage( { newPage: newPage } );
                }
            } else {
                location.hash = _CurrentPage === 'landing' ? '' : _CurrentPage;
            }
        } else {
            if( _CurrentPage !== 'landing' ) {
                switchPage( { newPage: newPage } );
            }
        }
    };
    window.onresize = function( oEvent ) {
        var pageWrapper = $( 'div.page-wrapper' ), containerWrapper = $( 'div.container-wrapper' ), windowWidth = oEvent.target.innerWidth;
        containerWrapper.css( { 'margin-top': ( pageWrapper.height() - containerWrapper.height() ) / 5 + 'px' } );
        if( windowWidth < 550 ) {
            if( _CurrentPage !== 'landing' ) {
                $( 'div.section.navmenu' ).css( { 'top': '39px' } );
                pageWrapper.css( { 'margin-top': '189px', 'margin-bottom': '44px', 'height': 'calc(100% - 233px)' } );
            }
        } else {
            if( _CurrentPage !== 'landing' ) {
                $( 'div.section.navmenu' ).css( { 'top': '0px' } );
                pageWrapper.css( { 'margin-top': '64px', 'margin-bottom': '44px' } );
            }
        }
    }
    $( 'div[id="aboutme_content"]' ).html( CONTENT_MAP['aboutme']['Aspiring computer engineer'] );
    $( 'div[id="experience_content"]' ).html( CONTENT_MAP['experience']['SAP'] );
    var projectsSelect = $( 'div[id="projects_content-wrapper"] select');
    for( key in CONTENT_MAP["projects"] ) {
        projectsSelect.append( new Option( key ) );
    }
    $( 'div[id="projects_content"]' ).html( CONTENT_MAP['projects'][projectsSelect[0].value] );
    $( 'div[id="shenanigans_content"]' ).html( CONTENT_MAP['shenanigans'] );
    var initialPage = location.hash;
    if( initialPage ) {
        initialPage = initialPage.slice( 1 );
        if( VALID_ANCHORS.indexOf( initialPage ) >= 0 ) {
            setTimeout( function() {
                switchPage( { newPage: initialPage } );
            }, 250 );
            return;
        }
    }
    // else
    location.hash = '';
}

function switchPage( oParams ) {
    var newPage = 'landing';
    if( oParams && oParams.newPage ) {
        newPage = oParams.newPage;
    }
    
    var homeButtonContainer = $( 'div.stickyhome' );
    if( newPage === 'landing' ) {
        homeButtonContainer.removeClass( 'fadeIn' );
        homeButtonContainer.addClass( 'fadeOut' );
        setTimeout( function() {
            currentPageBackground.hide();
        }, 400 );
    }

    var containerWrapper = $( 'div.container-wrapper' ), currentPageContent = $( 'div[id="' + _CurrentPage + '_content-wrapper"]' );
    containerWrapper.removeClass( 'zoomIn' );
    containerWrapper.addClass( 'zoomOut' );
    setTimeout( function() {
        currentPageContent.hide();
    }, 250 );

    var currentNavMenuButton = $( 'button.navmenu-item.current' ), navmenuContainer = $( 'div.section.navmenu' ), mainWrapper = $( 'div.main-wrapper' ), windowWidth = window.innerWidth;
    currentNavMenuButton.removeClass( 'current' );
    if( newPage === 'landing' ) {
        navmenuContainer.css( 'bottom', mainWrapper.height() - navmenuContainer.offset().top - navmenuContainer.outerHeight( true ) );
        navmenuContainer.css( 'top', '' );
        navmenuContainer.animate( { bottom: '32px' }, 400 );
    } else {
        if( _CurrentPage === 'landing' ) {
            if( windowWidth < 550 ) {
                navmenuContainer.animate( { top: '39px' }, 400 );
            } else {
                navmenuContainer.animate( { top: '0px' }, 400 );
            }
            navmenuContainer.css( 'bottom', '' );
        }

        homeButtonContainer.removeClass( 'fadeOut' );
        homeButtonContainer.show();
        homeButtonContainer.addClass( 'fadeIn' );  
    }

    var currentPageBackground = $( 'div.' + _CurrentPage + '_page-background' ), newPageBackground = $( 'div.' + newPage + '_page-background' );
    currentPageBackground.removeClass( 'fadeIn' );
    currentPageBackground.addClass( 'fadeOut' );
    setTimeout( function() {
        currentPageBackground.hide();
    }, 250 );
    newPageBackground.removeClass( 'fadeOut' );
    newPageBackground.show();
    newPageBackground.addClass( 'fadeIn' );
    
    var pageWrapper = $( 'div.page-wrapper' ), newPageContent = $( 'div[id="' + newPage + '_content-wrapper"]' );
    setTimeout( function() {
        newPageContent.show();
        if( newPage === 'landing' ) {
            containerWrapper.css( { 'background': 'rgba(0, 0, 0, 0)', 'border-width': '0px' } );
            if( windowWidth < 550 ) {
                pageWrapper.css( { 'margin-top': '12px', 'margin-bottom': '182px' } );
            } else {
                pageWrapper.css( { 'margin-top': '12px', 'margin-bottom': '96px' } );
            }
            containerWrapper.css( { 'display': 'table-cell' } );
        } else {
            if( _CurrentPage === 'landing' ) {
                containerWrapper.css( { 'background': 'rgba(222, 222, 222, 0.67)', 'border-width': '1px' } );
                if( windowWidth < 550 ) {
                    pageWrapper.css( { 'margin-top': '189px', 'margin-bottom': '44px', 'height': 'calc(100% - 233px)' } );
                } else {
                    pageWrapper.css( { 'margin-top': '64px', 'margin-bottom': '44px' } );
                }
                containerWrapper.css( { 'display': 'block' } );
            }
            containerWrapper.css( { 'margin-top': ( pageWrapper.height() - containerWrapper.height() ) / 5 + 'px' } );
        }
        containerWrapper.removeClass( 'zoomOut' );
        containerWrapper.addClass( 'zoomIn' );
        _CurrentPage = newPage;

        var newCurrentNavMenuButton = $( 'button.navmenu-item[id="' + newPage + '_button"]' );
        newCurrentNavMenuButton.addClass( 'current' );
    }, 250 );
}

function onNavMenuButtonClick( oSource ) {
    var newPage = 'landing';
    if( oSource && oSource.id && oSource.id.indexOf( '_button' ) >= 0 ) {
        newPage = oSource.id.slice( 0, oSource.id.indexOf( '_button' ) );
    }
    
    var navmenuContainer = $( 'div.section.navmenu' );
    if( newPage === _CurrentPage ) {
        navmenuContainer.addClass( 'rubberBand' );
        setTimeout( function() {
            navmenuContainer.removeClass( 'rubberBand' );
        }, 500 );
        return;
    }

    location.hash = newPage;
}

function onCloseButtonClick() {
    location.hash = '';
}

function onPageContentChanged( oParams ) {
    if( oParams && oParams.oSource ) {
        if( oParams.oSource.className && oParams.oSource.className === 'current' ) {
            return;
        } // else
        var sPage = oParams.page, oSource = oParams.oSource, sContentHeader = null, oPageContent = $( 'div[id="' + sPage + '_content"]' );

        if( sPage === 'projects' ) {
            sContentHeader = oSource.value;
        } else {
            sContentHeader = oSource.innerText;
            $( 'div.content-wrapper[id="' + sPage + '_content-wrapper"] h5.content-header span.current' ).removeClass( 'current', 250 );
            $( oSource ).addClass( 'current', 250 );
        }
        
        if( CONTENT_MAP[sPage] && CONTENT_MAP[sPage][sContentHeader] ) {
            oPageContent.html( CONTENT_MAP[sPage][sContentHeader] );
        } else {
            oPageContent.html( '' );
        }
    }
}
