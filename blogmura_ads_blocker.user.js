// ==UserScript==
// @name         Blogmura Ads Blocker
// @namespace    https://github.com/e2718281828nop3/
// @version      0.2
// @description  block ads of blogmura
// @author       e2718281828nop3
// @copyright    2017, e2718281828nop3 (https://github.com/e2718281828nop3/)
// @license      GPL-3.0
// @match        http*://*.blogmura.com/*
// @require      https://github.com/e2718281828nop3/javascripts/raw/master/utilities/ext/object.js
// @require      https://github.com/e2718281828nop3/javascripts/raw/master/utilities/ext/array.js
// @require      https://github.com/e2718281828nop3/javascripts/raw/master/utilities/ext/dom.js
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function(){

        //logo
        let logo = $id('header-logo');
        if (logo) logo.parentNode.removeChild(logo);

        let headerMenuAd = $('div.header-menu-ad');
        if (headerMenuAd) {
          headerMenuAd.parentNode.removeChild(headerMenuAd);
          $id('header-navi').style.margin = 0;
        }

        //header ads
        $all('#header-wapper .header-adarea').each(function(ad){ad.parentNode.removeChild(ad);});

        let adtext = $('.adtext');
        if(adtext) adtext.parentNode.removeChild(adtext);

        ['footer', 'action'].forEach(function(id){
            let elem = $id(id);
            if (elem) elem.parentNode.removeChild(elem);
        });

        ['entry-ad', 'adarea', 'widget-wapper grid ttl2Green'].forEach(function(klass){
            Array.prototype.forEach.call(document.getElementsByClassName(klass), function(elem){
                elem.style.display='none';
            });
        });

    });

})();
