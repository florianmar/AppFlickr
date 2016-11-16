$(document).ready(function() {

  $(".button-collapse").sideNav();
  // appel de la sidenav

  // var slider = document.getElementById('test5');
  // noUiSlider.create(slider, {
  //  start: [20, 80],
  //  connect: true,
  //  step: 1,
  //  range: {
  //    'min': 10,
  //    'max': 100
  //  },
  //  format: wNumb({
  //    decimals: 0
  //  })
  // });


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

          var img = $('<img />').attr('src', item.media.m);


          img.hover(function(){
            console.log("coucou");
            $(this).addClass('animated shake')
          }, function(){
            $(this).removeClass('animated shake')
          });

          img.appendTo('#photos')

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
