$(document).ready(function(){
  $( "#date" ).datepicker({
      showOn: "button",
      buttonImageOnly: true
    });
  $(".date-box i").click(function() {
      $(".ui-datepicker-trigger").click();
  });
});
