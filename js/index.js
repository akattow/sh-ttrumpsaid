$(document).ready(function() {
  pullQuote();
  
    $("#getQuote").on("click", pullQuote);
  
  $("#tweetMe").on("click", function() {
    window.open("https://www.twitter.com/intent/tweet?text=" + $("h3").html() + " " + "-Donald Trump")
  });

});

function pullQuote() {  $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data){
    $(".quoteText").empty();
    $(".quoteText").append("<h3>" + data.message + "</h3>");
    $(".quoteText").show();
      });
}