function checkScroll() {
  var startY = $('.bar').height() * 1;

  if($(window).scrollTop() > startY){
    $(.bar).addClass("scrolled");
  }else {
    $(.bar).removeClass("scrolled");
  }
}
if ($(.bar).length>0) {
  $(window).on("scroll load resize", function(){
    checkScroll();
  });
}
