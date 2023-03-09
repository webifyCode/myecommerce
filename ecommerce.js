$(document).ready(function () {
  
 $("#hamburger img").on('click', function () {
    $("#navmenu").slideDown('fast');
    $("#dim").fadeIn('fast');
    });
    
  $("#close").on('click', function () {
    $("#navmenu").slideUp('fast');
    $("#dim").fadeOut('fast');
  });


  //Counter
  
  var num = $("input#quantityInput").val();

  $("button#incr").click( function() {
    $("input#quantityInput").val(++num) ;
  });

  $("button#dcr").click( function() {
    $("input#quantityInput").val(--num) ;
  });

//Add to cart
  $("button.addButton").click( function () {
    var number = $("input#quantityInput").val();
    var total = number * 125;
    //what to show if cart empty
    var empty = '<p>Your cart is empty.</p>'
    //what to show if cart has content
    var content = '<div><img class="purchaseThumbnail" src="images/image-product-1-thumbnail.jpg" alt=""><span>';
        content += 'Autumn Limited Edition...<br>'; 
        content += '$125.00 x' + ' ' + number + ' ' + '<span id="total">' + '$' + total + '</span></span>';
        content += '<img class="delete" src="images/icon-delete.svg" alt=""></div>';
        content += '<button class="addButton">Checkout</button>';
    var purchaseContent = $("span#purchaseContent");
  
    //add to cart when items more than 0
    //and add label
   if (num > 0) {
    purchaseContent.html(content);
    $("#cartVolume").html(num).fadeIn('fast')
    };

    //empty cart and remove label
    $("img.delete").click( function () {
      purchaseContent.html(empty);
      $("#cartVolume").fadeOut('fast', () => {
          $(this).empty();
      });
    });
  });

 

  $("#cart").click( function () {
    $("#cartContent").slideToggle('fast').css('display', 'flex');
  });
  
  //Thumbnails section

  $("#thumb1 img").addClass('selected');

  $("#thumb1 img").click(function () {
    $("#thumbnails img").removeClass('selected');
    $("#thumb1 img").addClass('selected');
  });

  $("#thumb2 img").click(function () {
    $("#thumbnails img").removeClass('selected');
    $("#thumb2 img").addClass('selected');
  });

  $("#thumb3 img").click(function () {
    $("#thumbnails img").removeClass('selected');
    $("#thumb3 img").addClass('selected');
  });

  $("#thumb4 img").click(function () {
    $("#thumbnails img").removeClass('selected');
    $("#thumb4 img").addClass('selected');
  });

  //Activate focusmode

  $(".slide img").click( function () {
    $("#focusMode").fadeIn('fast').css('display', 'flex');
  });

  $("#focusPreviews svg").click(function () {
    $("#focusMode").fadeOut('fast');
  });




  //focusmode thumbnails

  $("#focusThumb1 img").addClass('selected');

  $("#focusThumb1 img").click(function () {
    $("#focusThumbnails img").removeClass('selected');
    $("#focusThumb1 img").addClass('selected');
  });

  $("#focusThumb2 img").click(function () {
    $("#focusThumbnails img").removeClass('selected');
    $("#focusThumb2 img").addClass('selected');
  });

  $("#focusThumb3 img").click(function () {
    $("#focusThumbnails img").removeClass('selected');
    $("#focusThumb3 img").addClass('selected');
  });

  $("#focusThumb4 img").click(function () {
    $("#focusThumbnails img").removeClass('selected');
    $("#focusThumb4 img").addClass('selected');
  });

});






