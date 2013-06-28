/**
 * User: rikishi
 * Date: 29.06.13
 * Time: 1:29
 *
 */
(function(Modernizr) {
    'use strict';

    Modernizr.addTest('msie', function() {
        var ua = navigator.userAgent.toLowerCase();
        var match = /(msie) ([\w.]+)/.exec(ua) || [];

        if (match[1]) {
            return match[2] || '0';
        }

        return false;
    });

    Modernizr.addTest('chrome', function() {
        var ua = navigator.userAgent.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || [];

        if (match[1]) {
            return match[2] || '0';
        }

        return false;
    });

    Modernizr.addTest('webkit', function() {
        var ua = navigator.userAgent.toLowerCase();
        var match = /(webkit)[ \/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || [];

        if (match[1]) {
            return match[2] || '0';
        }

        return false;
    });

    Modernizr.addTest('opera', function() {
        var ua = navigator.userAgent.toLowerCase();
        var match = /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua);

        if (match[1]) {
            return match[2] || '0';
        }

        return false;
    });

    Modernizr.addTest('mozilla', function() {
        var ua = navigator.userAgent.toLowerCase();
        var match = ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

        if (match[1]) {
            return match[2] || '0';
        }

        return false;
    });

    Modernizr.addTest('safari', function() {
        var ua = navigator.userAgent.toLowerCase();
        if (!/(chrome)[ \/]([\w.]+)/.test(ua)) {
            var match = /(webkit)[ \/]([\w.]+)/.exec(ua) || [];

            if (match[1]) {
                return match[2] || '0';
            }
        }

        return false;
    });

    /**
     * Detects whether or not the current browser is IE8 in compatibility mode (i.e. acting as IE7).
     */
    Modernizr.addTest('ie8compat', function() {
        return !window.addEventListener
            && !!document.documentMode
            && document.documentMode === 7;
    });

})(Modernizr);