
function displayQuote(){
	$( ".quote" ).fadeOut("fast");
	$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a) {
	  $(".quote").replaceWith('<div class="quote"><p class="quo">' + a[0].content + '</p>' + '<p>— ' + a[0].title + '</p></div>')
	});
	
    var displayQuote = document.getElementsByClassName('quo')[0].innerHTML;
console.log(displayQuote);
    $('#twitter-widget-0').remove();

    var newAnchorTag = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'https://twitter.com/intent/tweet')        
        .attr('data-text', displayQuote);
    $('.oneCoolDiv').append(newAnchorTag);
    //$(".twitter-share-button").attr('data-text', "new stuff");
	
	twttr.widgets.load()
}

document.getElementById("quoteButton").addEventListener("click", displayQuote);
/*
function twitterButton() {



}

twitterButton();
*/


