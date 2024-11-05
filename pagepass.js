$(document).ready(function() {
  $('a:not(".back")').each(function(){
    var link = $(this).attr('href');
  $(this).removeAttr('href');
  $(this).click(function(){
    location.href = link;
  });
});

});