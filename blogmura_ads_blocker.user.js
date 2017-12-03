// ==UserScript==
// @name         Blogmura Ads Blocker
// @namespace    https://github.com/e2718281828nop3/
// @version      0.1
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
        let logo = $('header-logo');
        if (logo) logo.parentNode.removeChild(logo);
        //if (logo) logo.style.display = 'none';

        //header ads
        let adareas = $('header-wapper').$class('header-adarea');
        //Array.prototype.forEach.call(adareas, function(adarea){adarea.parentNode.removeChild(adarea);});
        adareas.each(function(adarea){adarea.parentNode.removeChild(adarea);});
        //Array.prototype.forEach.call(adareas, function(adarea){adarea.style.display = 'none';});

        ['footer', 'action'].forEach(function(id){
            let elem = $id(id);
            if (!!elem) elem.parentNode.removeChild(elem);
            //if (!!elem) elem.style.display = 'none';
        });

        ['entry-ad', 'adarea', 'widget-wapper grid ttl2Green'].forEach(function(klass){
            Array.prototype.forEach.call(document.getElementsByClassName(klass), function(elem){
                elem.style.display='none';
            });
        });

    });

})();
