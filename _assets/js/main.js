
//============================
// COUNTRY OPTIONS
//----------------------------

function reset(){
  // reset default data
  $('#web').html( $("#uk-website").html() );
  $('#logo_img').html( $("#uk-logo").html() );
  $('#address-row').html( $("#uk-address").html() );
  $('#social').html( $("#uk-social").html() );
}

function localisation(country){
  reset();
  $('#social').html( $("#" + country + "-social").html() );
  $('#address-row').html( $("#" + country + "-address").html() );
  $('#web-row').html( $("#" + country + "-website").html() );
  $('#logo').html( $("#" + country + "-logo").html() );
  $('#legal-row').html( $("#" + country + "-legal").html() );
}

$("#input-country").on('change', function(){
  var country = $("#input-country").val();
  localisation(country);
});



//============================
// PREFILL FROM QUERY
//----------------------------

$(document).ready(function(){
  var urlParams = new URLSearchParams(window.location.search);
  var country = urlParams.get('country');
  var name = urlParams.get('name');
  var position = urlParams.get('position');
  var phone = urlParams.get('phone');
  var email = urlParams.get('email');
  if(country){
    document.getElementById('input-country').value = country;
    localisation(country);
  }
  if(name){
    document.getElementById('input-name').value = name;
    $('#name').html(name);
  }
  if(position){
    document.getElementById('input-position').value = position;
    $('#position').html(position);
  }
  if(phone){
    if(phone == 'false'){
      $('#phone-row').hide();
    }else{
      document.getElementById('input-phone').value = phone;
      $('#phone').html(phone);
      var phUrl = "tel:" + phone.replace(/\s/g, '');
      $('#phone_href').attr("href",phUrl);
    }
  }
  if(email){
    if(email == 'false'){
      $('#email-row').hide();
    }else{
      document.getElementById('input-email').value = email;
      $('#email').html(email);
      $('#email_href').attr("href","mailto:" + email);
    }
  }

});



//============================
// FORM FIELDS
//----------------------------

$('#input-name').on("input", function(){
  var content = this.value;
  $('#name').html(content);
});

$('#input-position').on("input", function(){
  var content = this.value;
  $('#position').html(content);
});

$('#input-phone').on("input", function(){
  var content = this.value;
  var phUrl = "tel:" + content.replace(/\s/g, '');
  $('#phone').html(content);
  $('#phone_href').attr("href",phUrl);
});

$('input[name=display-phone]').change(function(){
  if ( $(this).is(':checked') ){
    $('#phone-row').show();
  }else{
    $('#phone-row').hide();
  }
});

$('#input-email').on("input", function(){
  var content = this.value;
  $('#email').html(content);
  $('#email_href').attr("href","mailto:" + content);
});

$('input[name=display-email]').change(function(){
  if ( $(this).is(':checked') ){
    $('#email-row').show();
  }else{
    $('#email-row').hide();
  }
});

