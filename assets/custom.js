jQuery(document).ready(function () {

//   $('.page_crowdfunding  .hero__link a.btn').click(function(){

// var hash = $(this).attr('href'),
// offtop = $(hash).offset().top - $('header').outerHeight();
//      $("html").animate({ scrollTop: offtop }, "slow");
//   }); 

  
            $('.back-to-first').hide();
            $('.parent-level').click(function(){           
            
                $('.dropdown-child').hide();
                  $('.back-to-first').show();
                 $('.drawer__scrollable').addClass('active');
                var activeTab = $(this).find('a').attr('href');
                $(activeTab).fadeIn();
                return true;
                });
            $('.back-to-first').click(function(){
                $('.dropdown-child').hide();
                  $('.drawer__scrollable').removeClass('active');
                  $('.back-to-first').hide();
            });
         });
$(document).on('click','.mobile-nav__has-sublist.discover-apricoat .mobile-nav__link--button',function(e) {
        $(this).parents('.mobile-nav').toggleClass('discover-submenu-open'); 
        $(this).parents('.drawer__contents').toggleClass('drawer__contents-scroll');
      });
      $('.pro-add-form .add-to-cart').attr("disabled", true);
      $(document).on("click"," .size_option_block label.variant__label",function(e) {
            e.preventDefault();
            e.stopPropagation();
          if($(this).parent().hasClass('is-open')){
            $(this).parent().removeClass('is-open');
          }else{
            $('.variant-wrapper').removeClass('is-open');
          $(this).parent().addClass('is-open');
          }
      });
      $(document).on("click", function () {
          $('.size_option_block .variant-wrapper').removeClass('is-open');
      });
      $(document).on("click",".collection-jackets-section .variant-input-wrap input[type=radio]",function(e) {
          e.stopPropagation();
          if($(this).hasClass('disabled')){
            $(this).parents('.size_option_block').next('.pro-add-form').find('.add-to-cart').attr("disabled", true).text('Sold Out');
            $(this).parents('.variant-wrapper').removeClass('is-open'); 
            $(this).parents('.size_option_block').next('.pro-add-form').find('.size_btn_overlap').show();
           $(this).parents('.size_option_block').next('.pro-add-form').find('.size_tooltip').show(); 
            
          }else{
           $(this).parents('.variant-wrapper').removeClass('is-open').addClass('active');
           $(this).parents('.size_option_block').next('.pro-add-form').find('.add-to-cart').attr("disabled", false).text(' Add to cart');
           $(this).parents('.size_option_block').next('.pro-add-form').find('.size_btn_overlap').hide();
           $(this).parents('.size_option_block').next('.pro-add-form').find('.size_tooltip').hide(); 
          }
          $(this).parents('.variant-input-wrap').prev().text($(this).val());
          var val = $(this).val();
          $(this).parents('.pro_form_block').find(".product-single__variants option").removeAttr('selected');
          $(this).parents('.pro_form_block').find('.product-single__variants option[data-title="'+val+'"]').attr('selected', 'selected');
      });
      $(document).on("click",".adventure-product-section .variant-input-wrap input[type=radio]",function(e) {         
          e.stopPropagation();          
          $('.variant-input-wrap input').attr('checked', false);
          $('.variant-input-wrap').prev().text($(this).val());
          var val = $(this).val();
          $('.variant-input-wrap input[value="'+val+'"]').prop("checked", true);
          $('.pro_form_block').find(".product-single__variants option").removeAttr('selected');
          $('.pro_form_block').find('.product-single__variants option[data-title="'+val+'"]').attr('selected', 'selected');
          var valdis = $(this).hasClass('disabled');
          setTimeout(function(){      
           if(valdis){
              $('.size_option_block').next('.pro-add-form').find('.add-to-cart').attr("disabled", true).text('Sold Out');
              $('.size_option_block').next('.pro-add-form').find('.size_btn_overlap').show();
              $('.size_option_block').next('.pro-add-form').find('.size_tooltip').show(); 
              $('.variant-wrapper').removeClass('is-open');
                 if($(window).width() <= 991 ){           
                      $('.adventure-product-section .product-header .size_option_block.product-block').css('display','none');
                      $('.adventure-product-section .product-header .product-block.pro-add-form .btn').css('display','block').text('Sold Out');
                     setTimeout(function(){
                         $('.adventure-product-section .product-header .product-block.pro-add-form .btn').text('Sold Out');
                     }, 1100);
                  }
                  }else{
                       $('.variant-wrapper').removeClass('is-open').addClass('active');
                       $('.size_option_block').next('.pro-add-form').find('.add-to-cart').attr("disabled", false).text(' Add to cart');
                       $('.size_option_block').next('.pro-add-form').find('.size_btn_overlap').hide();
                       $('.size_option_block').next('.pro-add-form').find('.size_tooltip').hide();
                      if($(window).width() <= 991 ){           
                          $('.adventure-product-section .product-header .size_option_block.product-block').css('display','none');
                          $('.adventure-product-section .product-header .product-block.pro-add-form .btn').css('display','block').text('Shop Now');
                         setTimeout(function(){
                             $('.adventure-product-section .product-header .product-block.pro-add-form .btn').text('Shop Now');
                         }, 1100);
                      }
                  }
         }, 1000);      
        }); 
        $(document).on("click"," .adventure-product-section .collapsible-trigger-reviews",function() {
             $('#stamped-main-widget').slideToggle();
       });
       $(document).on("click"," .adventure-product-section .product-header .site-nav__link",function(e) {
        var height = $('.adventure-product-section .product-header').outerHeight();
      e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);  
   if($(window).scrollTop() < 200){    
     $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 200
	    }, 1500, 'swing', function () {
	        // window.location.hash = target;
	    });     
   }else{
     $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - height
	    }, 1500, 'swing', function () {
	        // window.location.hash = target;
	    });
   }	   
 });
      $(document).ready(function() {	
           $(document).on("click",".product-nav-arrow,.product-logo" ,function(){
             $('.product-nav').toggleClass('show');
          });
          $(function() { // Wait for page to finish loading.
    if(navigator != undefined && navigator.userAgent != undefined) {
        user_agent = navigator.userAgent.toLowerCase();
        if(user_agent.indexOf('android') > -1) { // Is Android.
            $('body').addClass('android');
        }else{
           $('body').addClass('iphone');
        }
      console.log(user_agent)
    }
});
$('.mobile-nav__link--button[aria-controls="Linklist-3"]').click(function(){
  $('.mobile-nav__sublist#Linklist-3').toggleClass('is-open');    
});         
});
  
$(document).ready(function(){
  $('.image_wrapper').each(function(){
    var no = $('.range-slider__range').val();
    $('.product_image[data-index="'+no+'"]').addClass('active');
    $('.block_list[data-index="'+no+'"]').addClass('active');
  });
  
const settings={
  fill: 'rgba(24, 194, 156, 0.2)',
  background: 'rgba(120, 120, 128, 0.2)'
}


const sliders = document.querySelectorAll('.range-slider');
Array.prototype.forEach.call(sliders,(slider)=>{
  slider.querySelector('input').addEventListener('input', (event)=>{
    applyFill(event.target);
  });
  applyFill(slider.querySelector('input'));
});

function applyFill(slider) {
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}

  $('.range-slider__range').on('input', function() {
    var value = $(this).val();
   $('.iamges .image_wrapper .product_image').removeClass('active');
  $(".iamges .image_wrapper .product_image[data-index = "+ value  +"]" ).addClass('active');
    $('.iamges .image_wrapper .block_list ').removeClass('active');
  $(".iamges .image_wrapper .block_list[data-index = "+ value  +"]" ).addClass('active');
  });
               
  $('.number_block_slider').hide();
              
  $(document).on("click",".block_numbers ",function(e){ 
     e.preventDefault();
     e.stopPropagation();
    var d_id = $(this).parents('.image_wrapper').attr('data-id');              
    var ip  = $(this).attr('data-index');                 
    if($("#"+ d_id).children().children().length > 0){        
      $('.number_block_slider').hide();
      $("#"+ d_id).show();
      $(".slider--range .slider-data" ).addClass('slide-drawer');
      $(".slider--range .slide_image " ).addClass('slide-pb');
      $("#"+ d_id).find(".main-slider-content" ).flickity({                 
        pageDots: false 
      });
     
   //   var index = ip - 1; 
      var index = $('.content_wrapper[data-slide-no="'+ $(this).data('slide-no') +'"]').parent().index();
      $("#"+ d_id).find(".main-slider-content" ).flickity( 'select', index );        
                    
      if ($(window).width() < 991) {                   
        $('body').toggleClass('show-modal');
      }
   }else{
       $('.number_block_slider').hide(); 
    $('body').removeClass('show-modal'); 
    $(".slider--range .slider-data" ).removeClass('slide-drawer');
       $(".slider--range .slide_image " ).removeClass('slide-pb');
   }

    var classname = $("#"+ d_id).find(".main-slider-content" );
    setTimeout(function(){
      classname.addClass('slider-class');
    }, 800);
                  
  });

//  $(document).on('click','.slider--range .close,.slider-data-overlay',function(e){
    
    $('.slider--range .close,.slider-data-overlay').click(function(e){
    e.stopImmediatePropagation();
   
    $('.number_block_slider').hide(); 
    $('body').removeClass('show-modal'); 
    $(".slider--range .slider-data" ).removeClass('slide-drawer'); 
    $(".slider--range .slide_image " ).removeClass('slide-pb');
    $(".main-slider-content" ).removeClass('slider-class');
   
});

   $('.main-slider-content').on("click", function (e) {
        e.stopPropagation();
    });
    
    $(document).on("click", function () {
        $('.number_block_slider').hide(); 
        $('body').removeClass('show-modal'); 
        $(".slider--range .slider-data" ).removeClass('slide-drawer'); 
        $(".slider--range .slide_image " ).removeClass('slide-pb');
        $(".main-slider-content" ).removeClass('slider-class');
    });
  

  if($('.size_option_block div').length == 0){
    $('.pro_form_block').addClass('size-not-display');
    $('.pro-add-form .add-to-cart').attr("disabled", false);
  }

    
        $('.content_wrapper').each(function(){
           var ino =  $(this).data('slide-no');
           $('.block_numbers[data-slide-no="'+ ino +'"]').addClass('show');
        });
    
if ($(window).width() > 1024) {

     $(document).on('mouseover', function () {
        $('.MIWT_wrapper .icon-content p').slideUp();
    });
    
    $(".MIWT_wrapper .icon-content").bind('mouseover',function(e){
          $(this).parents('.icon-text').find('.icon-content p').slideDown();
          e.stopPropagation();
    });  

    $('.MIWT_wrapper .icon-content').bind('mouseleave', function(e) {
         $(this).parents('.icon-text').find('.icon-content p').slideUp();
        e.stopPropagation();
    });
  
}
else {

   // $(document).on('click', function () {
   //      $('.MIWT_wrapper .icon-content p').slideUp();
   //  });
    
   //  $(".MIWT_wrapper .icon-content").on('click',function(e){
   //        $(this).parents('.icon-text').find('.icon-content p').slideToggle();
   //        e.stopPropagation();
   //  });  
  
}

  $(document).on("click",".template-collection .add-to-cart",function(e) {
     document.dispatchEvent(new CustomEvent('cart:build' , {bubbles: true }));
    document.dispatchEvent(new CustomEvent('cart:refresh', {bubbles: true }));
debugger;
      // Now I will do a get to show the itens from cart
   setTimeout(function() {
   jQuery.getJSON('/cart.js', function(cart) {
        let cartData = cart.items;
        document.dispatchEvent(new CustomEvent('cart:build' , {bubbles: true})); 
        document.dispatchEvent(new CustomEvent('cart:refresh', {
            bubbles: true,
             detail: cartData
        })); 
   });
   }, 600); 
  });

    $('.size_tooltip').on("click", function (e) {
        e.stopPropagation();
    });
    $(".size_btn_overlap").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.size_tooltip').removeClass('show');
        $(this).prev('.size_tooltip').addClass('show');
    });
    $(document).on("click", function () {
        $('.size_tooltip').removeClass('show');
    });

  $('.video_popup').on("click", function (e) {
    $('body').addClass('video-modal-show');
  });
  $('.video-modal__close-btn').on("click", function (e) {
    $('body').removeClass('video-modal-show');
  });
  
});
if($('#comparison').length > 0 ){
  var divisor = document.getElementById("divisor"),
      handle = document.getElementById("handle"),
      slider = document.getElementById("slider");
  
      mob_divisor = document.getElementById("mob_divisor");
      mob_handle = document.getElementById("mob_handle"),
      mob_slider = document.getElementById("mob_slider");

  function moveDivisor() {
    handle.style.left = slider.value+"%";
  	divisor.style.width = slider.value+"%";
    
    mob_handle.style.left = mob_slider.value+"%";
  	mob_divisor.style.width = mob_slider.value+"%";
  }
  
  window.onload = function() {
    moveDivisor();
  };
}