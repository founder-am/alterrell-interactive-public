var AI_CONFIG = {
  SUBSTACK_URL: 'https://alterrell.substack.com/s/alterrell-interactive?utm_source=newsletter_page',
  YOUTUBE_URL: 'https://www.youtube.com/playlist?list=PLBmJd1HY9o6YvRW5PDW0jOGJley2AjNYS'
};

(function () {
  function applyConfigURLs() {
    document.querySelectorAll('[data-config-url="substack"]').forEach(function (el) {
      el.href = AI_CONFIG.SUBSTACK_URL;
    });
    document.querySelectorAll('[data-config-url="youtube"]').forEach(function (el) {
      el.href = AI_CONFIG.YOUTUBE_URL;
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConfigURLs);
  } else {
    applyConfigURLs();
  }
})();
