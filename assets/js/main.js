// Mobile navigation toggle
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

// Publication filter by research area
(function () {
  var buttons = document.querySelectorAll('.filter button');
  if (!buttons.length) return;

  function apply(filter) {
    document.querySelectorAll('.pub-list .pub').forEach(function (el) {
      var areas = (el.getAttribute('data-areas') || '').split(' ');
      el.classList.toggle('hidden', filter !== 'all' && areas.indexOf(filter) === -1);
    });
    // Hide year groups and sections that became empty
    document.querySelectorAll('.pub-year, .pub-section').forEach(function (group) {
      var visible = group.querySelectorAll('.pub:not(.hidden)').length;
      group.classList.toggle('hidden', visible === 0);
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      buttons.forEach(function (x) { x.classList.remove('active'); });
      b.classList.add('active');
      apply(b.getAttribute('data-filter'));
    });
  });
})();


// Home: Selected Projects carousel arrows
(function () {
  var track = document.getElementById('case-track');
  if (!track) return;
  var btns = document.querySelectorAll('.car-btn');
  function step() {
    var card = track.querySelector('.case');
    var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
  }
  function update() {
    var max = track.scrollWidth - track.clientWidth - 2;
    btns.forEach(function (b) {
      b.disabled = b.getAttribute('data-dir') === '-1' ? track.scrollLeft <= 2 : track.scrollLeft >= max;
    });
  }
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      track.scrollBy({ left: step() * parseInt(b.getAttribute('data-dir'), 10), behavior: 'smooth' });
    });
  });
  track.addEventListener('scroll', function () { window.requestAnimationFrame(update); });
  window.addEventListener('resize', update);
  update();
})();
