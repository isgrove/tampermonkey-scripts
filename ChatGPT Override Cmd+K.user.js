// ==UserScript==
// @name         ChatGPT Override Cmd+K
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Override Firefox's Cmd+K search shortcut for ChatGPT
// @author       Sam Isgrove
// @match        https://chatgpt.com/*
// @grant        none
// ==/UserScript==

document.addEventListener('keydown', function(event) {
    if (event.metaKey && event.key === 'k') {
        event.preventDefault();
        const inputField = document.querySelector('textarea');
        if (inputField) {
            inputField.focus();
        }
    }
});
