
//============================
// COUNTRY OPTIONS
//----------------------------

// UK Default
var web_url = "https://www.secretescapes.com/";
var logo_img = "https://d1x3cbuht6sy0f.cloudfront.net/media/_admin/email/secretescapes.png";
var facebook_url = "https://www.facebook.com/SecretEscapes/";
var instagram_url = "https://www.instagram.com/secretescapes/";
var twitter_url = "https://twitter.com/secret_escapes";
var linkedin_url = "https://www.linkedin.com/company/secret-escapes/";
var youtube_url = "https://www.youtube.com/user/SecretEscapesUK/videos";
var address = "Floor 4, 120 Holborn, London, EC1N 2TD";

// Dropdown
function localisation(){
  // reset social
  $('#social').show();
  $('#social').children().show();
  $('#address-row').show();
  var logo_img = "https://d1x3cbuht6sy0f.cloudfront.net/media/_admin/email/secretescapes.png";

  if( $("#country").val() == 'uk' ){
    // United Kingdom
    var web_url = "https://www.secretescapes.com";
    var facebook_url = "https://www.facebook.com/SecretEscapes/";
    var instagram_url = "https://www.instagram.com/secretescapes/";
    var twitter_url = "https://twitter.com/secret_escapes";
    var linkedin_url = "https://www.linkedin.com/company/secret-escapes/";
    var youtube_url = "https://www.youtube.com/user/SecretEscapesUK/videos";
    var address = "Floor 4, 120 Holborn, London, EC1N 2TD";


  }else if( $("#country").val() == 'de' ){
    // Germany
    var web_url = "https://www.secretescapes.de";
    var address = "Klosterstraße 62  | 10179 Berlin";
    $('#social').hide();


  }else if( $("#country").val() == 'it' ){
    // Italy
    var web_url = "https://www.secretescapes.it";
    var facebook_url = "https://www.facebook.com/SecretEscapesItalia";
    var instagram_url = "https://www.instagram.com/secretescapes_italia/";
    var youtube_url = "https://www.youtube.com/channel/UCh5OBs7fH7W4NQSy4q-1Hgg/videos";
    $('#twitter').hide();
    $('#linkedin').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'fr' ){
    // France
    var logo_img = "https://d1x3cbuht6sy0f.cloudfront.net/media/_admin/email/evasionssecretes.png";
    var web_url = "https://www.evasionssecretes.fr";
    var facebook_url = "https://www.facebook.com/EvasionsSecretes/";
    var twitter_url = "https://twitter.com/e_secretes";
    var instagram_url = "https://www.instagram.com/evasions_secretes/";
    var youtube_url = "https://www.youtube.com/channel/UCouHr30uo69QfiyLKkaW1KA";


  }else if( $("#country").val() == 'es' ){
    // Spain
    var web_url = "https://es.secretescapes.com";
    var facebook_url = "https://www.facebook.com/SecretEscapesES";
    var twitter_url = "https://twitter.com/SecretEscapesES";
    var instagram_url = "https://www.instagram.com/secretescapes_es/";
    $('#youtube').hide();


  }else if( $("#country").val() == 'hk' ){
    // Hong Kong
    var web_url = "https://hk.secretescapes.com";
    $('#social').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'id' ){
    // Indonesia
    var web_url = "https://id.secretescapes.com";
    $('#social').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'my' ){
    // Malaysia
    var web_url = "https://my.secretescapes.com";
    $('#social').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'nl' ){
    // Netherlands
    var web_url = "https://nl.secretescapes.com";
    var facebook_url = "https://www.facebook.com/SecretEscapesNLBE/";
    var youtube_url = "https://www.youtube.com/channel/UCm8cmKl3bA5CjCoQgGDwiIA";
    var instagram_url = "https://www.instagram.com/secretescapes_es/";
    var address = "Nieuwezijds Voorburgwal 162, 1012 SJ";
    $('#twitter').hide();
    $('#instagram').hide();


  }else if( $("#country").val() == 'be' ){
    // Belgium
    var web_url = "https://be.secretescapes.com";
    var facebook_url = "https://www.facebook.com/SecretEscapesNLBE/";
    var youtube_url = "https://www.youtube.com/channel/UCm8cmKl3bA5CjCoQgGDwiIA";
    var instagram_url = "https://www.instagram.com/secretescapes_es/";
    var address = "Nieuwezijds Voorburgwal 162, 1012 SJ";
    $('#twitter').hide();
    $('#instagram').hide();


  }else if( $("#country").val() == 'ch' ){
    // Switzerland
    var web_url = "https://ch.secretescapes.com";
    $('#social').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'sg' ){
    // Singapore
    var web_url = "https://sg.secretescapes.com";
    $('#social').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'dk' ){
    // Denmark
    var web_url = "https://dk.secretescapes.com";
    var facebook_url = "https://www.facebook.com/SecretEscapes.dk";
    $('#twitter').hide();
    $('#instagram').hide();
    $('#youtube').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'no' ){
    // Norway
    var web_url = "https://no.secretescapes.com";
    var facebook_url = "https://www.facebook.com/SecretEscapes.no";
    $('#twitter').hide();
    $('#instagram').hide();
    $('#youtube').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'se' ){
    // Sweden
    var web_url = "https://www.secretescapes.se";
    var facebook_url = "https://www.facebook.com/SecretEscapes.se";
    var youtube_url = "https://www.youtube.com/channel/UCwNSxyjDxYxhZTuXPZdQLkA";
    var instagram_url = "https://www.instagram.com/secretescapessverige";
    $('#twitter').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'us' ){
    // USA
    var web_url = "https://us.secretescapes.com";
    var instagram_url = "https://www.instagram.com/secretescapesus/";
    $('#address-row').hide();

  }

  // Update content
  $('#web').html(web_url);
  $('#web_href').attr("href",web_url);
  $('#logo_href').attr("href",web_url);
  $('#logo_img').attr("src",logo_img);
  $('#facebook').attr("href",facebook_url);
  $('#instagram').attr("href",instagram_url);
  $('#twitter').attr("href",twitter_url);
  $('#linkedin').attr("href",linkedin_url);
  $('#youtube').attr("href",youtube_url);
  $('#address-row').html(address);
}


$("#country").on('change', function(){
  localisation();
});




//============================
// Editor fields
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
  $('#email_href').attr("href",content);
});

$('input[name=display-email]').change(function(){
  if ( $(this).is(':checked') ){
    $('#email-row').show();
  }else{
    $('#email-row').hide();
  }
});



