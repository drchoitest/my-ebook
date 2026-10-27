// 다크 모드 단추: 선택을 기억해 두었다가 다음에도 적용
(function () {
  var key = 'ebook-theme';
  try { if (localStorage.getItem(key) === 'dark') document.documentElement.dataset.theme = 'dark'; } catch (e) {}
  document.addEventListener('DOMContentLoaded', function () {
    var b = document.getElementById('theme');
    if (!b) return;
    b.addEventListener('click', function () {
      var dark = document.documentElement.dataset.theme !== 'dark';
      document.documentElement.dataset.theme = dark ? 'dark' : '';
      try { localStorage.setItem(key, dark ? 'dark' : 'light'); } catch (e) {}
    });
  });
})();
