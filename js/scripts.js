$(document).ready(function() {
  $("#book").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var description = $("#description").val();
    var date = $("#date").val();
    var startTime = $("#start_time").val();
    var endTime = $("#end_time").val();

  $(".name").text(name);
  $(".description").text(description);
  $(".date").text(date);
  $(".start-time").text(startTime);
  $(".end-time").text(endTime);

  $("#output").show();
  });
});
