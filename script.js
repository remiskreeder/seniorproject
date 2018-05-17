$(document).ready(function() {
  $('.dropdown-trigger').dropdown();


  console.log('HELLO World');
  console.log('Remi\'s Project');

  function getUrlParameter(sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : sParameterName[1];
          }
      }
  };

  var title = 'default title!';
  var title = 'DOG';

  var title = getUrlParameter('symptom');
  console.log(title);

  //$("#title").html("fun!!!!!!");
  //$(".optioncategory").html("helloooooo")

  var full_title = "PEDs " + title + " Express Lane";

  $("#title").html(full_title);



  $("#multbutton").click(function() {
    var num1 = $("#firstnumber").val();
    var num2 = $("#secondnumber").val();
    console.log(num1, num2);

    var multiply = parseInt(num1) * parseInt(num2);
    var title = 'multiply';
    $("#multiply").html(multiply);
  });

});
