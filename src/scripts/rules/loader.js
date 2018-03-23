var loadScript = function (src, query) {
    document.write('<script src="' + src + '?' + query + '"><\/script>');
  };
  // var base = './';
  var key = Math.random();
  var base = window.location.origin;
  loadScript(base + '/scripts/jquery.js', 'key=blombler');
  loadScript(base + '/scripts/rules/rules.js', 'key=' + key );
  