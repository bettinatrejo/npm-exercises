"use strict";
{
    const $ = require('jquery');


    let sayHi = function () {
        console.log("Hello");
    };

    sayHi();


    $('h1').click(function() {
        $(this).css("background-color", "blue");
    });



}
