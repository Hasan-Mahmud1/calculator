function insertNumber(number){
    var existingNumber =  $("#result").val();
   $("#result").val(existingNumber + number)
}
function clearScreen(){
    $("#result").val('')
}
function calculate(){
    var result = eval($("#result").val())
    $("#result").val(result)
}
function deleteNumber(){
    var presentValue =  $("#result").val();
    if(presentValue !=''){
        $("#result").val(presentValue.slice(0,-1));
    }
}












/* 
function blinker() {
    $('.blink-me').fadeOut(200);
    $('.blink-me').fadeIn(200);
}
setInterval(blinker, 500);
*/
/* 
$(function(){
    $(".typed").typed({
      strings: ["website.", "android app.", "iphone app.", "pc software.", "management software.", "online shop."],
      typeSpeed: 1,
      loop: true,
      backDelay: 1000
    });
});

*/


