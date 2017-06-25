
function displayQuote(){
	$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a) {
	  $(".quo").replaceWith(a[0].content + "<p>— " + a[0].title + "</p>")
	});
}

document.getElementById("quoteButton").addEventListener("click", displayQuote);
