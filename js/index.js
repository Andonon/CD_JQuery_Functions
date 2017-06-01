
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
        $("#cssgetterbutton").click(function(){
            var color = $("#csstest").css("background-color");
            var fontcolor = $("#csstest").css("color");
            var height = $("#csstest").css("height");
            var width = $("#csstest").css("width");
                alert("Orange specs: Color: "+color+", Font Color: "+fontcolor+", Height: "+height+", Width: "+width+".");
        });    
        $("#csssetterbutton").click(function(){
            $("#csstest").css("background-color", "white");
        });    
        $("#csssetter2button").click(function(){
            $("#csstest").css("background-color", "orange");
        });    

        $("#afterbutton").click(function(){
            $("#beforeaftertest").before("<p>Hello</p>");
        });    
        $("#beforebutton").click(function(){
            $("#beforeaftertest").after("<p>Goodbye</p>");
        });    
        $("#prependbutton").click(function(){
            $("#prependappendtest").prepend("Hello. ");
        });    
        $("#appendbutton").click(function(){
            $("#prependappendtest").append("Goodbye. ");
        });    
        $("#attrgetbutton").click(function(){
            var attribclass = $("#attrgetbutton").attr("class");
                alert("The first button has class: "+attribclass);
        });    
        $("#attrsetbutton").click(function(){
            $("#attrgetbutton").attr("class","eventbuttontoppurple");
        });    
        $("#htmlgetbutton").click(function(){
            var htmltext = $("#htmlshow p").html();
                alert("The html returned is: "+htmltext);
        });    
        $("#htmlsetbutton").click(function(){
            $("#htmltest").html("Congratulations, you just injected new HTML into this box...");
        });    
        $("#textgetbutton").click(function(){
            var texttesttext = $("#textshow").text();
                alert(texttesttext);
        });    
        $("#textsetbutton").click(function(){
            var texttesttext = $("#textshow").text();
            $("#texttest").text(texttesttext);
        });    
        $("#valbutton").click(function(){
            var valbuttontext = $("#yourname").val();
                alert("You entered "+valbuttontext+", however I'm gonna adjust that a little... ")
            console.log(valbuttontext);
            $("input:text").val("Glenn Quagmire, oh yeah!")
        });    
    });
