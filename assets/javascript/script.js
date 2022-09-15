//set date
//var d = new Date();

//var month = d.getMonth()+1;
//var day = d.getDate();

//var output = d.getFullYear() + '/' +
    //(month<10 ? '0' : '') + month + '/' +
    //(day<10 ? '0' : '') + day;

$(document).ready(function(){
    setInterval(function () {
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")) 
    }, 0, 1000);
//change box color depenging on time
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

function theHour () {
    var thisHour = moment().hour();
    console.log(thisHour);

$(".hours").each(function () {
    var rowHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(rowHour, thisHour);
if (rowHour < thisHour) {
    $(this).children(".description").addClass("past");
    $(this).children(".description").removeClass("present");
    $(this).children(".description").removeClass("future");
} 
else if (rowHour === thisHour) {
    $(this).children(".description").removeClass("past");
    $(this).children(".description").addClass("present");
    $(this).children(".description").removeClass("future");
}
else {
    $(this).children(".description").removeClass("past");
    $(this).children(".description").removeClass("present");
    $(this).children(".description").addClass("future");
}
});
}
theHour();
});
