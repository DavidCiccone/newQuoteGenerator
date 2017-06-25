
function displayQuote(){
	$( ".quote" ).fadeOut("fast");
	$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a) {
	  $(".quote").replaceWith('<div class="quote"><p class="quo">' + a[0].content + '</p>' + '<p>— ' + a[0].title + '</p></div>')
	});
}

document.getElementById("quoteButton").addEventListener("click", displayQuote);
