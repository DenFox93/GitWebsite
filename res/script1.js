$(document).ready(function () {
    //jquery for toggle sub menus
    $('.sub-btn').click(function () {
            $(this).next('.sub-menu').slideToggle();
            $(this).find('.dropdown').toggleClass('rotate');
    });
});





  // Script for the hamburger open & close 
  function openNav() {
    document.getElementById("mySidebar").style.width = "28%";
    document.getElementById("main").style.marginLeft = "16%";
    document.getElementById("page_frame").style.marginLeft = "14%";
    document.getElementById("page_frame").style.width = "70%";
    document.getElementById("open").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("page_frame").style.marginLeft = "0";
    document.getElementById("page_frame").style.width = "100%";
    document.getElementById("open").style.display = "block";
}
// Script for the onclick event 
// For the sub-menu
$(document).ready(function () {

    $('.sub-menu > .item')
            .click(function (e) {
                    $('.sub-menu > .item')
                            .removeClass('active');
                    $(this).addClass('active');
            });
});
// for the main menu 
$(document).ready(function () {

    $('.item > .sub-btn')
            .click(function (e) {
                    $('.item > .sub-btn')
                            .removeClass('act');
                    $(this).addClass('act');
            });
});

// For the sub-menu
$(document).ready(function () {

        $('.sub-menu .item > .sub-menu .item')
                .click(function (e) {
                        $('.sub-menu .item > .sub-menu .item ')
                                .removeClass('activ');
                        $(this).addClass('activ');
                });
    });

// Onclick event script end 







// $(document).ready(function() {
//         $('.item ').hide();
//         $('.item  a').click(function(e) {
//             e.preventDefault();
//             var $menuItem = $(this).next('.item');
//             $menuItem.slideToggle();
//             $('.item ').not($menuItem).slideUp();
//         });
//     });



// $(document).ready(function(){
//         // Show hide popover
//         $(".menu ").click(function(){
//             $(this).find(".sub-menu").slideToggle("fast");
//         });
//     });
//     $(document).on("click", function(event){
//         var $trigger = $(".menu");
//         if($trigger !== event.target && !$trigger.has(event.target).length){
//             $(".sub-menu").slideUp("fast");
//         }            
//     });


// $(document).ready(function(){
//         $(".menu .item").hover(function(){
//             var dropdownMenu = $(this).children(".item .sub-menu");
//             if(dropdownMenu.is(":visible")){
//                 dropdownMenu.parent().toggleClass("open");
//             }
//         });
//     });     




// $(document).ready(function() {
//         $('.item').hide();
//         $(".sub-menu:has(a)").click(function() {
//             $(".menu", this).toggle('slow');
//         });
//     });​




// $(document).ready(function() {
//         //variable where currentAnchor is stored
//         var currentSection = 0;
//         // hides the submenu as soon as the DOM is ready
//         $('.menu').hide();
//         // toggles the submenu on clicking the noted link  
//         $('.menu .item a').click(function() {
      
//           // remove active class
//           $('.menu .item a').removeClass('active');
//           // add active class
//           $(this).addClass('active');
      
//           var href = $(this).attr('a');
//           //hide all submenus
//           $('.item>.sub-btn').hide();
      
//           //show one particular menu
//           $(href).show();
      
      
//           //logic for hiding and showing submenu
//           if (currentSection == 0) {
//             $('.menu').slideToggle(200);
//             currentSection = href;
//           } else if (currentSection == href) {
//             $('.menu').slideToggle(200);
//             currentSection = 0;
//           } else {
//             currentSection = href;
//           }
//           return false;
//         });
//       });
      
      // Based on http://jsfiddle.net/skram/AyNSS/7/
      




//       $("#toggle").on('click', function() {
//         $('menu').toggleClass("active");
//       });

//           $(document).ready(function () {
//               $('.menu .iten ').click(function () {
//                   $('.menu .item a').not(this).find('.item').hide();
//                   $(this).find('.item').toggle(1000);
//               });
//           });