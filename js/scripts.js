
function displayQuote(){
	$( ".quote" ).fadeOut("fast");
	$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a) {
	  $(".quote").replaceWith('<div class="quote"><p class="quo">' + a[0].content + '</p>' + '<p>— ' + a[0].title + '</p></div>')
	});
	/*
	var quote = document.getElementsByClassName('quo')[0].innerHTML;
	 $("#twitter").attr("data-text", quote);
	 console.log(quote);
	 */
}

document.getElementById("quoteButton").addEventListener("click", displayQuote);



twttr.widgets.createShareButton(
  "https:\/\/dev.twitter.com\/web\/tweet-button",
  document.getElementById("twitter"),
  {
    size: "large",
    text: "custom share text",
    hashtags: "example,demo",
    via: "twitterdev",
    related: "twitterapi,twitter"
  }
);