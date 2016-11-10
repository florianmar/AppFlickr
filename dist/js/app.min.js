$(document).ready(function() {

  $(".button-collapse").sideNav();
  // appel de la sidenav



  $('a.btn').click(function(){
    $('div#photos').empty();
    var mot = $(this).text(); // je stock le text de l'élément cliquer et le rajoute ds l'url
    var query = "http://www.flickr.com/services/feeds/photos_public.gne?tags="+ mot + "&format=json";


    $.ajax({
      //tags:$(this).text(),
      data:{format: "json"},
      dataType: "jsonp",
      url: query,


    });

    jsonFlickrFeed = function (data) {
      console.log("reached jsonFlickerFeed");
      console.log(data);


      // Now
      $.each(data.items, function(i,item){
        console.log(item);

        $('<img />').attr('src', item.media.m).appendTo('#photos')
        console.log('fsdfd');

      });
    };

  });//fin de la fonction js




  $('button#envoi').click(function(){
    //au click du btn envoi
    console.log('jfgklds');
    var input = $('input#search').val();

    //je récupère la valeur de l'input
    console.log(input);
    //je l'envoi ds l'ul
    $('<a>',{
      class: 'btn',
      text: input,
    }).appendTo('nav');


    $('a.btn').click(function(){
      $('div#photos').empty();
      var mot = $(this).text(); // je stock le text de l'élément cliquer et le rajoute ds l'url
      var query = "http://www.flickr.com/services/feeds/photos_public.gne?tags="+ mot + "&format=json";


      $.ajax({
        //tags:$(this).text(),
        data:{format: "json"},
        dataType: "jsonp",
        url: query,


      });

      jsonFlickrFeed = function (data) {
        console.log("reached jsonFlickerFeed");
        console.log(data);


        // Now
        $.each(data.items, function(i,item){
          console.log(item);

          $('<img />').attr('src', item.media.m).appendTo('#photos')
          console.log('fsdfd');

        });

      };


    });//dela fonction js2
    $('a.button-collapse').sideNav('hide');
    console.log('balabala');

    console.log('hghghhghg');
    console.log('lala');
    $('li.tarace').after('<div class="chip">' + input + '</div>');
    console.log('hfkjdshlfdlkshfkjlsqhflkdsf');
    $('input#search').val("");



  });//fin de la fonction click

});//fin du ready
