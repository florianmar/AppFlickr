$(document).ready(function() {

  $(".button-collapse").sideNav();
  // Querystring, "tags" search term, comma delimited
var query = "http://www.flickr.com/services/feeds/photos_public.gne?tags=rugby&format=json";

// Ajax call to retrieve data, strange it calls jsonFlickrFeed, tried
// get a callback but throws an error
$.ajax({
   data:{format: "json"},
   dataType: "jsonp",
   url: query
});

// This function is called once the call is satisfied
// http://stackoverflow.com/questions/13854250/understanding-cross-domain-xhr-and-xml-data
jsonFlickrFeed = function (data) {
    console.log("reached jsonFlickerFeed");
    console.log(data);


    // Now start cycling through our array of Flickr photo details
    $.each(data.items, function(i,item){
      console.log(item);

      $('<img />').attr('src', item.media.m).appendTo('#photos')
      console.log('fsdfd');

    });
};




  // $.getJSON("http://www.flickr.com/services/feeds/photos_public.gne?tags=soccer&format=jsonp")
  // .done(function(datas){
  //   console.log(datas);
    // jquery : boucle sur datas each()



    // append()
    // thumbnailUrl
});
