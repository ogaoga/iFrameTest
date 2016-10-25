(function(){
  // URL handling
  var result = window.location.search.match(/\?url=([^&]+)/);
  var url = 'http://www.ogaoga.org/';
  if (result && result[1]) {
    url = result[1];
  }
  var frame = document.getElementById('frame');
  frame.setAttribute('src', url);

  // add event listener
  var body = document.getElementById('body');
  window.addEventListener('scroll', function(e){
    if (window.scrollY > 0) {
      body.setAttribute('class', 'show');
    }
  });
})();
