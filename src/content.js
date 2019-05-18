var titles = document.querySelectorAll("div.post-title > h2 > a");
if (titles !== null) {
    for (var i = 0, l = titles.length; i < l; i++) {
      var title = titles[i].innerText;

      title = title.replace(/[\xc2\xa1].*\!\s/i, "");
      title = title.replace(/[\xc2\xbf].*\?\s/i, "");
      title = title.replace(/\([^)]*\)/, "");
      title = title.replace(/\[[^)]*\]/, "");

      titles[i].innerText = title;
    }
}
