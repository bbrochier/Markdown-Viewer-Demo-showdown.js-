(function($){
'use strict';

  // Load README.md, convert content into HTML, display HTML in #results
  var converter = new Showdown.converter();

  var jqxhr =
    $.ajax({
        url:"README.md",
        data: 'text'
    })
    .done(function(data){
        var ret = converter.makeHtml(data);
        document.getElementById('results').innerHTML = ret;
    })
    .fail(function() {
        console.log( "ajax error" );
    })
    .always(function(){
      //ajax callback
    });


})(jQuery);