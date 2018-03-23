var loadScript = function (src, noCache) {
    document.write('<script src="' + src + (noCache ? '?' + Math.random() : '') + '"><\/script>');
  };
  // var base = './';
  var base = window.location.origin;
  loadScript(base + '/scripts/jquery.js', true);
  loadScript(base + '/scripts/home/main.js', true);
  