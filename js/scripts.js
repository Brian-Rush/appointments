$(function(){
  $("form#appointmentOne").submit(function(event){
    event.preventDefault();
    var name = $("#name1").val();
    var description = $("#description1").val();
    var date = $("#date1").val();
    var startTime = $("#startTime1").val();
    var endTime = $("#endTime1").val();

    $("#nameOutput").text(name);
    $("#descriptionOutput").text(description);
    $("#dateOutput").text(date);
    $("#startTimeOutput").text(startTime);
    $("#endTimeOutput").text(endTime);
  });
});
