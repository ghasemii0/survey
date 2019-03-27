$(document).ready(function(){
  $("#survey").submit(function(event){
    var beverage = $("#beverage").val();
    var iceCream = $("input:radio[name=flavor]:checked").val();
    var favoriteColor = $("#color").val();
    var dob = $("#born").val();
    //console.log(iceCream);
    $(".result").append(iceCream);
    $(".result").append(beverage);
    $(".result").append(dob);
    $(".result").append(favoriteColor);
    event.preventDefault();
  });
});
