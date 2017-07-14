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
        'SAP': "<h6><b>Software Developer | Big Data Tooling</b> - May to Aug 2017</h6>" +
        "<h6>Designed and developed features, and fixed bugs for the HANA Database Explorer web app using Javascript within a Node.js environment, and using a MVC plugin architecture, leveraging SAP UI5 and SAP Web App Toolkit (WATT) frameworks.</h6>" +
        "<p>- Implemented a SQL debug editor component, interfacing with existing debugging functionality.</p>" +
        "<p>- Designed and developed revamped functionaltiy for the tabular data preview filtering features, taking into account big data considerations.</p>" +
        "<p>- Improved catalog browser control for viewing and selecting database connections and schema objects.</p>",
        'UWaterloo': "<h6><b>Undergraduate Research Assistant | Department of ECE | Dr. V. Gaudent</b> - Jan to Apr 2017</h6>" +
        "<h6>Improved scalability and performance of LDPC (low density parity check) and stochastic decoding and error checking algorithm simulation software in C by using OpenMP to increase parallelism.</h6>",
        'CRC': "<h6><b>Juniour Engineering | Network Applications</b> - Sep to Dec 2016</h6>" +
        "<h6>Developed and deployed Java, Python, and C# applications to leverage Apache Spark for the (Radio) Spectrum Environment Analysis testbed system, which was built within a Microsoft Azure cloud infrastructure.</h6>" +
        "<p>- Implemented data analysis algorithms for automated daily batch processing of radio spectrum sensor data uploaded to Hadoop blob storage using Apache Spark, Azure Data Factory, and SQL Server, improving scalability and automation, and increasing performance (reduced execution time from about 3 hours to 2-5 minutes).</p>" +
        "<p>- Designed and implemented a prototype verison of a real time sensor manager hub service, using Spark Streaming in Java to listen to and handle Azure Event Hub sensor status events as an alternative to the Azure Stream Analytics service</p>" +
        "<p>- Designed and built a prototype user-driven map/chart-based data analysis and visualization tool for dynamically aggregating and filtering geospatial and temporal data, producing on-demand reports providing information about WiFi sniffer data. Leveraged Apache Spark in python, a python ReST service, and a Javascript user interface.</p>",
        'Tigercat': "<h6><b>Systems Software Developer | Telematics</b> - Jan to Apr 2016</h6>" +
        "<h6>Designed and built features of a C# application for monitoring and visualizing data from embedded telematics devices, including a tool and service to decrypt, import, visualize, and export data from detailed device diagnostic log files.</h6>" +
        "<p>- Designed and developed feature to process, analyze, and visualize detailed SQLite diagnostics log data from telematics device and export sections of the data to accessible MySQL databases.</p>" +
        "<p>- Built a ReST cryptography service for decrypting and encrypting packaged telematics diagnostics files, including SQLite log data.</p>" +
        "<p>- Implemented user preferences and alert notifications feature and integrated Active Directory authentication within internal diagnostics application.</p>"
    },
    'projects': {
        'Dynamic Geospatial Data Analysis Visualization': "<p>Leveraged Apache Spark (PySpark), Apache Druid, and a Geohash algorithm, and developed a user interface in Javascript leveraging Leaflet and Chart.js libraries to develop a generic user-driven data visualization tool for dynamically aggregating, filtering, and analyzing location and time stamped data.</p>",
        'Spark Streaming Twitter Trends Sentiment Analysis': "<p>Currently developing a Java application, leveraging Apache Spark's Twitter Spark Streaming API, to do basic data analysis on Twitter data for a user-inputted search phrase.</p>",
        'Grocery List Messenger Chat Bot': "<p>Currently building a Facebook Messenger grocery list chat bot which parses message based commands and respond by updating SQLite database tables and display them as lists.</p>",
        'Pebble Cyclist Gesture Detection App': "<p>Designed and developed a Pebble watch app in C to detect, recognize, and broadcast arm/hand signals/gestures from cyclists for the purpose of demoing a system to allow safer integration of cyclists with potential vehicle to vehicle communication systems of the future.</p>",
        'Dead Reckoning Indoor Navigation Android App': "<p>Developed an Android application for tracking a user's position within premapped indoor rooms, and for providing directions to navigate users around walls to a destination within these rooms. " +
        "Designed and implemented a state machine based step detection algorithm using data from various smartphone sensors to track the user's movements, as well as an \"avoid-walls\" heuristic based route finding algorithm to provide directions.</p>",
        'Smart Bed Monitoring System': "<p>Designed and built a system for monitoring bed related activities for the purpose of health care (e.g. sleep quality, Alzheimer's patients wandering from beds, seniors falling from beds) and using only non-invasive piezoelectric force sensors placed under the bed. " +
        "Designed and built a circuit to output the force sensor voltage readings to a ZigBee node, and developed a Java program which used a ZigBee sensor manager library to continuously poll the ZigBee node for real time measurements from the force sensors, then processed the raw data to useful force measurements, and stored historical data in a MySQL database. " +
        "Implemented a supervised machine learning generated decision tree algorithm for recognizing various bed related activities based on the processed force sensor data.</p>",
        'Cryptography Server': "<p>Built a ReST cryptography server in C# to handle upload, decryption, and encryption of files using various cryptography schemes (RSA, AES) with remotely stored private keys and uniquely generated, expiring session IDs.</p>",
        'Fall Detection Android App': "<p>Developed an Android application leveraging the Twilio API to detect falls and alert a specified contact, implementing a state machine based fall detection algorithm based on data from various smartphone sensors.</p>",
        'RFID Based Object Locater': "<p>Implemented a Java program that received data from an passive RFID handheld reader and used a MySQL database of known RFID tags to identify and find previously tagged items.</p>"
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
