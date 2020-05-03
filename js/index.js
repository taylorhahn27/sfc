// /*
//  * This is the plugin
//  */
// (function (a) {
//   a.createModal = function (b) {
//     defaults = {
//       title: "",
//       message: "Your Message Goes Here!",
//       // closeButton: true,
//       scrollable: false,
//     };
//     var b = a.extend({}, defaults, b);
//     var c =
//       b.scrollable === true
//         ? 'style="max-height: 420px;overflow-y: auto;"'
//         : "";
//     html = '<div class="modal fade" id="myModal">';
//     html += '<div class="modal-dialog">';
//     html += '<div class="modal-content">';
//     html += '<div class="modal-header">';
//     html +=
//       '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
//     if (b.title.length > 0) {
//       // html += '<h2 class="modal-title">' + b.title + "</h2>";
//     }
//     html += "</div>";
//     html += '<div class="modal-body" ' + c + ">";
//     html += b.message;
//     html += "</div>";
//     html += '<div class="modal-footer">';

//     html += "</div>";
//     html += "</div>";
//     html += "</div>";
//     html += "</div>";
//     a("body").prepend(html);
//     a("#myModal")
//       .modal()
//       .on("hidden.bs.modal", function () {
//         a(this).remove();
//       });
//   };
// })(jQuery);

// /*
//  * Here is how you use it
//  */
// $(function () {
//   $(".view-pdf").on("click", function () {
//     var pdf_link = $(this).attr("href");
//     //var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
//     //var iframe = '<object data="'+pdf_link+'" type="application/pdf"><embed src="'+pdf_link+'" type="application/pdf" /></object>'
//     var iframe =
//       '<object type="application/pdf" data="' +
//       pdf_link +
//       '" width="100%" height="500">No Support</object>';
//     $.createModal({
//       title: "My Title",
//       message: iframe,
//       // closeButton: true,
//       scrollable: false,
//     });
//     return false;
//   });
// });

//covid 19 popup modal
$(document).ready(function () {
  $("#myModal").modal("show");
});

// window.onload = function() {
//   document.getElementById("button").onclick = function() {
//     document.getElementById("modal").style.display = "none";
//   };
// };

// Navigation
// Responsive Toggle Navigation =============================================
let menuIcon = document.querySelector(".menuIcon");
let nav = document.querySelector(".overlay-menu");

menuIcon.addEventListener("click", () => {
  if (nav.style.transform != "translateX(0%)") {
    nav.style.transform = "translateX(0%)";
    nav.style.transition = "transform 0.2s ease-out";
  } else {
    nav.style.transform = "translateX(-100%)";
    nav.style.transition = "transform 0.2s ease-out";
  }
});

// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector(".menuIcon");

toggleIcon.addEventListener("click", () => {
  if (toggleIcon.className != "menuIcon toggle") {
    toggleIcon.className += " toggle";
  } else {
    toggleIcon.className = "menuIcon";
  }
});

// switch menu classes for color change on buttons
var header = document.getElementById("button-background");
var btns = header.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}

// mail chimp
type =
  "text/javascript" >
  window.dojoRequire(["mojo/signup-forms/Loader"], function (L) {
    L.start({
      baseUrl: "mc.us7.list-manage.com",
      uuid: "4ae5921a3912b451ab862009e",
      lid: "c5b62202c9",
      uniqueMethods: true,
    });
  });

//menu switching
function show(id) {
  document.getElementById("main_place").innerHTML = document.getElementById(
    id
  ).innerHTML;
}

// $.each($("*"), function() {
//   if ($(this).width() > $("body").width()) {
//     console.log("Wide Element: ", $(this), "Width: ", $(this).width());
//   }
// });

// makes any image parallax
// (function($) {
//   var parallax = -0.5;

//   var $bg_images = $(".wp-block-cover-image");
//   var offset_tops = [];
//   $bg_images.each(function(i, el) {
//     offset_tops.push($(el).offset().top);
//   });

//   $(window).scroll(function() {
//     var dy = $(this).scrollTop();
//     $bg_images.each(function(i, el) {
//       var ot = offset_tops[i];
//       $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
//     });
//   });
// })(jQuery);

// maybe!!!!
// (function($) {
//   $window = $(window);

//   $('*[data-type="parallax"]').each(function() {
//     var $bgobj = $(this);

//     $(window).scroll(function() {
//       var yPos = -($window.scrollTop() / $bgobj.data("speed"));
//       var coords = "50% " + yPos + "px";

//       $bgobj.css({ backgroundPosition: coords });
//     });
//   });
// })(jQuery);

// // Add active class to the current button (highlight it)

// $("#button-background .button").on("click", function() {
//   $("#button-background .button.active").removeClass("active");
//   $(this).addClass("active");
// });

// hero image
// $(".jumbotron").css({ height: $(window).height() + "px" });

// $(window).on("resize", function() {
//   $(".jumbotron").css({ height: $(window).height() + "px" });
// });

// active class color change for menu buttons
// $("#button-background .button").on("click", function() {
//   $("#button-background .button.active").removeClass("active");
//   $(this).addClass("active");
// });
