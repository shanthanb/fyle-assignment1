   function resizeheight() {
        var viewPortHeight;
    
        // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
        if (typeof window.innerWidth != 'undefined') {
        viewPortHeight = window.innerHeight
        }
    
        // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
        else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        viewPortHeight = document.documentElement.clientHeight
        }
    
        // older versions of IE
        else {
        viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
        }

        return viewPortHeight;
    }
    function resizewidth() {
        var viewPortWidth;    
        // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
        if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth
        }
    
        // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
        else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth
        }
    
        // older versions of IE
        else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth
        }
        return viewPortWidth;
    }
var navBarHeight;
navBarHeight = $('#navBar').height();
$('.forePage').css('margin-top', navBarHeight);

var viewPortHeight = resizeheight();
var viewPortWidth = resizewidth();

$(".resize").css('width', viewPortWidth - 5);
$(".resize").css('height', viewPortHeight);


$(window).resize(function() {
    viewPortHeight = resizeheight();
    viewPortWidth = resizewidth();
    debugger;
    $(".resize").css('width', viewPortWidth - 5);
    $(".resize").css('height', viewPortHeight);
    $('.forePage').css('margin-top', navBarHeight);
});


$("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){
        window.location.hash = hash;
      });
    }
  });