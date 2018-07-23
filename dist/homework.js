'use strict';

var $ = function $(e) {
    return document.querySelector(e);
};
var $$ = function $$(e) {
    return document.querySelectorAll(e);
};
var data = {
    menu: [{
        name: 'DASHBOARO'
    }, {
        name: 'AGENT'
    }, {
        name: 'MY CURISE'
    }, {
        name: 'HELP'
    }],
    history: [{
        text: 'bjstdmdfds01/Acceptance_text'
    }, {
        text: 'bjstdmdfds01/Acceptance_text'
    }, {
        text: 'bjstdmdfds01/Acceptance_text'
    }, {
        text: 'bjstdmdfds01/Acceptance_text'
    }, {
        text: 'bjstdmdfds01/Acceptance_text'
    }, {
        text: 'bjstdmdfds01/Acceptance_text'
    }, {
        text: 'bjstdmdfds01/Acceptance_text'
    }, {
        text: 'bjstdmdfds01/Acceptance_text'
    }, {
        text: 'bjstdmdfds01/Acceptance_text'
    }],
    cards: [{
        info: 123
    }, {
        info: 45
    }]
};

window.onload = function () {
    findForElement();
};

function findForElement() {
    var elms = $$('[nick-for]');
    elms.forEach(function (el) {
        var parent = el.parentElement;
        var frame = document.createDocumentFragment();
        var key = el.getAttribute('nick-for');
        var arr = data[key];
        if (Array.isArray(arr)) {
            arr.forEach(function (elt, index) {
                var clone_el = el.cloneNode(true);
                clone_el.removeAttribute('nick-for');
                clone_el = hindleElement(clone_el, elt);
                frame.appendChild(clone_el);
            });
        }
        parent.innerHTML = '';
        parent.appendChild(frame);
    });
}

function hindleElement(el, elt) {
    var element = el.hasAttribute('nick-text') ? el : el.querySelectorAll('[nick-text]');
    if (element) {
        if (element.length) {
            element.forEach(function (e) {
                e.innerHTML = elt[e.getAttribute('nick-text')];
            });
        } else {
            element.innerHTML = elt[element.getAttribute('nick-text')];
        }
    }

    return el;
}