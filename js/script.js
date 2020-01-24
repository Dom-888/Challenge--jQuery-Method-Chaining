
$(document).ready(function() {
 
    // First Challenge

    $("button").mouseenter(function(){
        $(this).removeClass("makeRed").addClass("makeBorder");
    });
    $("button").mouseleave(function(){
        $(this).removeClass("makeBorder").addClass("makeRed");
    });
    
    // Second Challenge

    $("button").click(function(){
        $("p").hide().show();
    });
    $("button").click(function(){
        $("p").fadeIn().fadeOut();
    });

}); 