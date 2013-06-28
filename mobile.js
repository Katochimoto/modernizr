/**
 * User: rikishi
 * Date: 29.06.13
 * Time: 1:52
 *
 */
(function(Modernizr) {
    'use strict';

    Modernizr.addTest('ipad', function () {
        return /iPad/i.test(navigator.userAgent);
    });

    Modernizr.addTest('iphone', function () {
        return /iPhone/i.test(navigator.userAgent);
    });

    Modernizr.addTest('ipod', function () {
        return /iPod/i.test(navigator.userAgent);
    });

    Modernizr.addTest('appleios', function () {
        return Modernizr.ipad || Modernizr.ipod || Modernizr.iphone;
    });

})(Modernizr);