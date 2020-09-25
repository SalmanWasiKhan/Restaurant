$(document).ready(function(){
  $("#button-info").click(function(){
    event.preventDefault();
    $(".sidebar ul li button").removeClass("sidebar-active");
    $(this).addClass("sidebar-active");
    $("#update-info").fadeIn();
    $("#menu-items").css("display","none");
    $("#orders").css("display","none");
    $("#managers").css("display","none");
    $("#personal-info").css("display","none");
  });
  $("#button-menu").click(function(){
    event.preventDefault();
    $(".sidebar ul li button").removeClass("sidebar-active");
    $(this).addClass("sidebar-active");
    $("#update-info").css("display","none");
    $("#menu-items").fadeIn();
    $("#orders").css("display","none");
    $("#managers").css("display","none");
    $("#personal-info").css("display","none");
  });
  $("#button-orders").click(function(){
    event.preventDefault();
    $(".sidebar ul li button").removeClass("sidebar-active");
    $(this).addClass("sidebar-active");
    $("#update-info").css("display","none");
    $("#menu-items").css("display","none");
    $("#orders").fadeIn();
    $("#managers").css("display","none");
    $("#personal-info").css("display","none");
  });
  $("#button-managers").click(function(){
    event.preventDefault();
    $(".sidebar ul li button").removeClass("sidebar-active");
    $(this).addClass("sidebar-active");
    $("#update-info").css("display","none");
    $("#menu-items").css("display","none");
    $("#orders").css("display","none");
    $("#managers").fadeIn();
    $("#personal-info").css("display","none");
  });
  $(".info a").click(function(){
    event.preventDefault();
    $(".sidebar ul li button").removeClass("sidebar-active");
    $("#update-info").css("display","none");
    $("#menu-items").css("display","none");
    $("#orders").css("display","none");
    $("#managers").css("display","none");
    $("#personal-info").fadeIn();
  });

  $("i.fa-edit").click(function(){
    var inputField = $(this).parent().next();
    if(inputField.css("display") == "none"){
      inputField.slideDown();
    }else {
      inputField.slideUp();
    }
  });

  $("#add-manager-btn").click(function(){
    event.preventDefault();
    $(this).fadeOut();
    $(".portion.add-manager").slideDown();
  });

  $("#close-manager-btn").click(function(){
    event.preventDefault();
    $("#add-manager-btn").fadeIn();
    $(".portion.add-manager").fadeOut();
  });
});
