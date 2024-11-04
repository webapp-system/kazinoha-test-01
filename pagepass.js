if (window.navigator.standalone) {
    $('a').on('touchend', function(e) {
      e.preventDefault();
      location.href = e.target.href;
      return false;
    });
  }