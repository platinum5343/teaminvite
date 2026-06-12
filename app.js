// Plain JS for the Teams invite page.
(function () {
  var btn = document.getElementById('joinBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      window.location.href = 'https://login.microsoft.com/device';
    });
  }

  // Countdown for "Code expires in X minutes"
  var el = document.getElementById('expires');
  if (el) {
    var total = 15 * 60;
    function tick() {
      var m = Math.floor(total / 60);
      var s = total % 60;
      el.textContent = m + ' minute' + (m === 1 ? '' : 's') +
        (m < 5 ? ' ' + String(s).padStart(2, '0') + 's' : '');
      if (total-- <= 0) { el.textContent = 'expired'; clearInterval(t); }
    }
    tick();
    var t = setInterval(tick, 1000);
  }
})();