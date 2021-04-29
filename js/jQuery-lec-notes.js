$("h3").click(function() {
    // $(this).next().slideToggle(500);
    if( $(this).next().children('img').css("display")==="none") {
    $(this).next().children("p").fadeToggle(600);
}
    $(this).next().children("img").slideToggle(600);
});