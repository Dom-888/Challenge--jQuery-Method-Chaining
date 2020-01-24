
$(document).ready(function() {
 
    $("button").mouseenter(function(){
        $(this).removeClass("makeRed").addClass("makeBorder");
    });
    $("button").mouseleave(function(){
        $(this).removeClass("makeBorder").addClass("makeRed");
    });
    
}); 