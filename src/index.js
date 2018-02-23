"use strict";
{
    const $ = require('jquery');
    const hello = require('./say-hello.js');


    let sayHi = function () {
        console.log("Hello");
    };

    sayHi();


    $('h1').click(function() {
        $(this).css("background-color", "blue");
    });

    $('h2').click(function() {
        $(this).css("background-color", "yellow");
    });



}
