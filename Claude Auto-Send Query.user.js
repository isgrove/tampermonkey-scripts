// ==UserScript==
// @name         Claude Auto-Send Query
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically clicks the Send Message button on claude.ai/new when a query parameter is present
// @author       Sam Isgrove
// @match        https://claude.ai/new*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    let retryCount = 0;
    const maxRetries = 5;

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    function clickSendButton() {
        const sendButton = document.querySelector('button[aria-label="Send Message"]');

        if (sendButton) {
            sendButton.click();
            return;
        }
    }

    function init() {
        const query = getQueryParam('q');

        if (query) {
            clickSendButton();
        }
    }

    init();
})();
