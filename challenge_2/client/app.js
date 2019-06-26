import $ from '../node_modules/jquery';

$(document).ready(function(){ 
  $('form').on('submit', function(e) {
    e.preventDefault(); //prevents refreshing when clicking submit button

    var formData = {
      'text' : $('textarea[name=jsonData]').val()

    };

    $.ajax({
      method: 'POST', 
      url: '/upload_json',  
      data: formData,
      dataType: 'json'
    })
      .done(function(data) {
        console.log(data);
      });
  });

});