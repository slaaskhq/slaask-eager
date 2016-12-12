(function() {
  if (!INSTALL_OPTIONS.slaaskApiKey) {
    return;
  }

  var slk = document.createElement('script');
  slk.src = 'https://cdn.slaask.com/chat.js';
  slk.type = 'text/javascript';
  slk.async = 'true';
  slk.onload = slk.onreadystatechange = function() {
    var rs = this.readyState;
    if (rs && rs != 'complete' && rs != 'loaded') return;
    try {
      _slaask.init(INSTALL_OPTIONS.slaaskApiKey);
    } catch (e) {}
  };
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(slk, s);
})();
