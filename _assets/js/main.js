
//============================
// COUNTRY OPTIONS
//----------------------------

// Defaults / UK
var web_url = "https://www.secretescapes.com/";
var logo_img = "https://d1x3cbuht6sy0f.cloudfront.net/media/_admin/email/secretescapes.png";
var facebook_url = "https://www.facebook.com/SecretEscapes/";
var instagram_url = "https://www.instagram.com/secretescapes/";
var twitter_url = "https://twitter.com/secret_escapes";
var linkedin_url = "https://www.linkedin.com/company/secret-escapes/";
var youtube_url = "https://www.youtube.com/user/SecretEscapesUK/videos";
var address = "Floor 4, 120 Holborn, London, EC1N 2TD";

// Germany
var web_url_de = "https://www.secretescapes.de/";
var facebook_url_de = "https://www.facebook.com/SecretEscapes.de/";
var instagram_url_de = "https://www.instagram.com/secretescapesde/";
var address_de = "Klosterstraße 62  | 10179 Berlin";

// Italy
var web_url_it = "https://www.secretescapes.it";
var facebook_url_it = "https://www.facebook.com/SecretEscapesItalia";
var instagram_url_it = "https://www.instagram.com/secretescapes_italia/";
var youtube_url_it = "https://www.youtube.com/channel/UCh5OBs7fH7W4NQSy4q-1Hgg/videos";

// France
var logo_img_fr = "https://d1x3cbuht6sy0f.cloudfront.net/media/_admin/email/evasionssecretes.png";
var web_url_fr = "https://www.evasionssecretes.fr";
var facebook_url_fr = "https://www.facebook.com/EvasionsSecretes/";
var twitter_url_fr = "https://twitter.com/e_secretes";
var instagram_url_fr = "https://www.instagram.com/evasions_secretes/";
var youtube_url_fr = "https://www.youtube.com/channel/UCouHr30uo69QfiyLKkaW1KA";

// Spain
var web_url_es = "https://es.secretescapes.com";
var facebook_url_es = "https://www.facebook.com/SecretEscapesES";
var twitter_url_es = "https://twitter.com/SecretEscapesES";
var instagram_url_es = "https://www.instagram.com/secretescapes_es/";

// Netherlands
var web_url_nl = "https://nl.secretescapes.com";
var facebook_url_nl = "https://www.facebook.com/SecretEscapesNLBE/";
var youtube_url_nl = "https://www.youtube.com/channel/UCm8cmKl3bA5CjCoQgGDwiIA";
var address_nl = "Nieuwezijds Voorburgwal 162, 1012 SJ";

// Belgium
var web_url_be = "https://be.secretescapes.com";
var facebook_url_be = "https://www.facebook.com/SecretEscapesNLBE/";
var youtube_url_be = "https://www.youtube.com/channel/UCm8cmKl3bA5CjCoQgGDwiIA";
var address_be = "Nieuwezijds Voorburgwal 162, 1012 SJ";

// Switzerland
var web_url_ch = "https://ch.secretescapes.com";
var facebook_url_ch = "https://www.facebook.com/SecretEscapes.de/";
var instagram_url_ch = "https://www.instagram.com/secretescapesde/";

// Denmark
var web_url_dk = "https://dk.secretescapes.com";
var facebook_url_dk = "https://www.facebook.com/SecretEscapes.dk";

// Norway
var web_url_no = "https://no.secretescapes.com";
var facebook_url_no = "https://www.facebook.com/SecretEscapes.no";

// Sweden
var web_url_se = "https://www.secretescapes.se";
var facebook_url_se = "https://www.facebook.com/SecretEscapes.se";
var youtube_url_se = "https://www.youtube.com/channel/UCwNSxyjDxYxhZTuXPZdQLkA";
var instagram_url_se = "https://www.instagram.com/secretescapessverige";

// Hong Kong
var web_url_hk = "https://hk.secretescapes.com";
var twitter_url_hk = "https://twitter.com/secretescapessg";
var instagram_url_hk = "https://www.instagram.com/secretescapes_asia/";

// Indonesia
var web_url_id = "https://id.secretescapes.com";
var twitter_url_id = "https://twitter.com/secretescapessg";
var instagram_url_id = "https://www.instagram.com/secretescapes_asia/";

// Malaysia
var web_url_my = "https://my.secretescapes.com";
var twitter_url_my = "https://twitter.com/secretescapessg";
var instagram_url_my = "https://www.instagram.com/secretescapes_asia/";

// Singapore
var web_url_sg = "https://sg.secretescapes.com";
var twitter_url_sg = "https://twitter.com/secretescapessg";
var instagram_url_sg = "https://www.instagram.com/secretescapes_asia/";

// USA
var web_url_us = "https://us.secretescapes.com";
var instagram_url_us = "https://www.instagram.com/secretescapesus/";




function reset(){
  $('#social').show();
  $('#social').children().show();
  $('#address-row').show();
  // reset default data
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



function localisation(country){
  reset();
  if( $("#country").val() == 'uk' ){
    reset();
  }else if( country == 'de' ){
    // Germany
    $('#web').html(web_url_de);
    $('#web_href').attr("href",web_url_de);
    $('#logo_href').attr("href",web_url_de);
    $('#facebook').attr("href",facebook_url_de);
    $('#instagram').attr("href",instagram_url_de);
    $('#address-row').html(address_de);
    $('#twitter').hide();
    $('#youtube').hide();

  }else if( country == 'it' ){
    // Italy
    $('#web').html(web_url_it);
    $('#web_href').attr("href",web_url_it);
    $('#logo_href').attr("href",web_url_it);
    $('#facebook').attr("href",facebook_url_it);
    $('#instagram').attr("href",instagram_url_it);
    $('#youtube').attr("href",youtube_url_it);
    $('#twitter').hide();

  }else if( country == 'fr' ){
    // France
    $('#web').html(web_url_fr);
    $('#web_href').attr("href",web_url_fr);
    $('#logo_href').attr("href",web_url_fr);
    $('#logo_img').attr("src",logo_img_fr);
    $('#facebook').attr("href",facebook_url_fr);
    $('#instagram').attr("href",instagram_url_fr);
    $('#youtube').attr("href",youtube_url_fr);
    $('#twitter').attr("href",twitter_url_fr);

  }else if( country == 'es' ){
    // Spain
    $('#web').html(web_url_es);
    $('#web_href').attr("href",web_url_es);
    $('#logo_href').attr("href",web_url_es);
    $('#facebook').attr("href",facebook_url_es);
    $('#instagram').attr("href",instagram_url_es);
    $('#twitter').attr("href",twitter_url_es);
    $('#youtube').hide();

  }else if( country == 'nl' ){
    // Netherlands
    $('#web').html(web_url_nl);
    $('#web_href').attr("href",web_url_nl);
    $('#logo_href').attr("href",web_url_nl);
    $('#facebook').attr("href",facebook_url_nl);
    $('#youtube').attr("href",youtube_url_nl);
    $('#address-row').html(address_nl);
    $('#twitter').hide();
    $('#instagram').hide();

  }else if( country == 'be' ){
    // Belgium
    $('#web').html(web_url_be);
    $('#web_href').attr("href",web_url_be);
    $('#logo_href').attr("href",web_url_be);
    $('#facebook').attr("href",facebook_url_be);
    $('#youtube').attr("href",youtube_url_be);
    $('#address-row').html(address_be);
    $('#twitter').hide();
    $('#instagram').hide();

  }else if( country == 'ch' ){
    // Switzerland
    $('#web').html(web_url_ch);
    $('#web_href').attr("href",web_url_ch);
    $('#logo_href').attr("href",web_url_ch);
    $('#facebook').attr("href",facebook_url_ch);
    $('#instagram').attr("href",instagram_url_ch);
    $('#twitter').hide();
    $('#youtube').hide();
    $('#address-row').hide();

  }else if( country == 'dk' ){
    // Denmark
    $('#web').html(web_url_dk);
    $('#web_href').attr("href",web_url_dk);
    $('#logo_href').attr("href",web_url_dk);
    $('#facebook').attr("href",facebook_url_dk);
    $('#twitter').hide();
    $('#instagram').hide();
    $('#youtube').hide();
    $('#address-row').hide();

  }else if( country == 'no' ){
    // Norway
    $('#web').html(web_url_no);
    $('#web_href').attr("href",web_url_no);
    $('#logo_href').attr("href",web_url_no);
    $('#facebook').attr("href",facebook_url_no);
    $('#twitter').hide();
    $('#instagram').hide();
    $('#youtube').hide();
    $('#address-row').hide();

  }else if( country == 'se' ){
    // Sweden
    $('#web').html(web_url_se);
    $('#web_href').attr("href",web_url_se);
    $('#logo_href').attr("href",web_url_se);
    $('#facebook').attr("href",facebook_url_se);
    $('#instagram').attr("href",instagram_url_se);
    $('#youtube').attr("href",youtube_url_se);
    $('#twitter').hide();
    $('#address-row').hide();

  }else if( country == 'hk' ){
    // Hong Kong
    $('#web').html(web_url_hk);
    $('#web_href').attr("href",web_url_hk);
    $('#logo_href').attr("href",web_url_hk);
    $('#instagram').attr("href",instagram_url_hk);
    $('#twitter').attr("href",twitter_url_hk);
    $('#youtube').hide();
    $('#address-row').hide();


  }else if( country == 'id' ){
    // Indonesia
    $('#web').html(web_url_id);
    $('#web_href').attr("href",web_url_id);
    $('#logo_href').attr("href",web_url_id);
    $('#instagram').attr("href",instagram_url_id);
    $('#twitter').attr("href",twitter_url_id);
    $('#youtube').hide();
    $('#address-row').hide();

  }else if( country == 'my' ){
    // Malaysia
    $('#web').html(web_url_my);
    $('#web_href').attr("href",web_url_my);
    $('#logo_href').attr("href",web_url_my);
    $('#instagram').attr("href",instagram_url_my);
    $('#twitter').attr("href",twitter_url_my);
    $('#youtube').hide();
    $('#address-row').hide();

  }else if( country == 'sg' ){
    // Singapore
    $('#web').html(web_url_sg);
    $('#web_href').attr("href",web_url_sg);
    $('#logo_href').attr("href",web_url_sg);
    $('#instagram').attr("href",instagram_url_sg);
    $('#twitter').attr("href",twitter_url_sg);
    $('#youtube').hide();
    $('#address-row').hide();

  }else if( country == 'us' ){
    // USA
    $('#web').html(web_url_us);
    $('#web_href').attr("href",web_url_us);
    $('#logo_href').attr("href",web_url_us);
    $('#instagram').attr("href",instagram_url_us);
    $('#address-row').hide();

  }

}



$("#country").on('change', function(){
  var country = $("#country").val();
  localisation(country);
});

$(document).ready(function(){
  var urlParams = new URLSearchParams(window.location.search);
  var country = urlParams.get('country');
  var name = urlParams.get('name');
  var position = urlParams.get('position');
  var phone = urlParams.get('phone');
  var email = urlParams.get('email');
  if(country){
    document.getElementById('country').value = country;
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
    document.getElementById('input-phone').value = phone;
    $('#phone').html(phone);
  }
  if(email){
    document.getElementById('input-email').value = email;
    $('#email').html(email);
  }
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



