
"use strict";
    $(document).ready(function(){
        $("#clickbutton1").click(function(){
            $("#clicktest").css("background-color", "red");
        });    
        $("#clickbutton2").click(function(){
            $("#clicktest").css("background-color", "white");
        });    
        $("#hidebutton").click(function(){
            $("#hidetest").hide();
        });    
        $("#showbutton").click(function(){
            $("#hidetest").show();
        });    
        $("#togglebutton").click(function(){
            $("#hidetest").toggle();
        });    
        $("#slideupbutton").click(function(){
            $("#slidetest").slideUp();
        });    
        $("#slidedownbutton").click(function(){
            $("#slidetest").slideDown();
        });    
        $("#slidetogglebutton").click(function(){
            $("#slidetest").slideToggle();
        });    
        $("#fadeinbutton").click(function(){
            $("#fadetest").fadeIn();
        });    
        $("#fadeoutbutton").click(function(){
            $("#fadetest").fadeOut();
        });    
        $("#fadetobutton").click(function(){
            $("#fadetest").fadeTo(0,.5);
        });    
        $("#addclassbutton").click(function(){
            $("#cssaddremovetest").addClass("clicktest2");
        });    
        $("#removeclassbutton").click(function(){
            $("#cssaddremovetest").removeClass("clicktest2");
        });    
        $("#cssbutton").click(function(){
            $("#cssaddremovetest").css("background-color");
        });    
    });
