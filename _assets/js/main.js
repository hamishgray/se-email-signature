

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
    $('#social').show();


  }else if( $("#country").val() == 'de' ){
    // Germany
    var web_url = "https://www.secretescapes.de";
    $('#social').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'it' ){
    // Italy
    var web_url = "https://www.secretescapes.it";
    $('#social').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'fr' ){
    // France
    var web_url = "https://www.evasionssecretes.fr";
    var logo_img = "https://d1x3cbuht6sy0f.cloudfront.net/media/_admin/email/evasionssecretes.png";
    $('#social').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'es' ){
    // Spain
    var web_url = "https://es.secretescapes.com";
    $('#social').hide();
    $('#address-row').hide();


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
    $('#social').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'be' ){
    // Belgium
    var web_url = "https://be.secretescapes.com";
    $('#social').hide();
    $('#address-row').hide();


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
    $('#social').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'no' ){
    // Norway
    var web_url = "https://no.secretescapes.com";
    $('#social').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'se' ){
    // Sweden
    var web_url = "https://www.secretescapes.se";
    $('#social').hide();
    $('#address-row').hide();


  }else if( $("#country").val() == 'us' ){
    // USA
    var web_url = "https://us.secretescapes.com";
    $('#social').hide();
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




