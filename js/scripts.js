$(document).ready(function(){
var counter = 0;
var storeQuote = document.getElementsByClassName('quote')[0].innerHTML;
var storeName = document.getElementsByClassName('quote')[0].innerHTML;

function displayQuote(){
	
    
	$.ajax({
   
    url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    cache: false,
    success: function(a) {
    $(".quote").replaceWith('<div class="quote"><p class="quo">' + a[0].content + '</p>' + '<p>— ' + a[0].title + '</p></div>')
      storeQuote = document.querySelector("body > div.wrapper > div > p:nth-child(2)").innerHTML;
      storeName = document.querySelector("body > div.wrapper > div > p:nth-child(4)").innerHTML;
      
      $('#twitter-widget-' + counter).remove();
        
        var newAnchorTag = $('<a></a>')
            .addClass('twitter-share-button')
            .attr('href', 'https://twitter.com/intent/tweet')        
            .attr('data-text', storeQuote + storeName);
        $('.oneCoolDiv').append(newAnchorTag);
        //$(".twitter-share-button").attr('data-text', "new stuff");
        
        twttr.widgets.load()
        ++counter;},
        error: function() {
          console.log('API not working :(')
        }
  });    
}


document.getElementById("quoteButton").addEventListener("click", displayQuote);

});

