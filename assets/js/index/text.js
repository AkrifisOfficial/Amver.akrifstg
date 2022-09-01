  $(function() {
      var title = document.title,
        animSeq = ["|"],
          animIndex = 0,
          titleIndex = 0;
      function doInverseSpinZeroPitch() {
          var loadTitle = title.substring(0, titleIndex);
          if (titleIndex > title.length) {
              animIndex = 0;
              titleIndex = 0
          }
          if (animIndex > 1) {
              titleIndex++;
              animIndex = 0
          }
          document.title = loadTitle + animSeq[0];
          animIndex++
      }
      window.setInterval(doInverseSpinZeroPitch, 150);
  });
$(function() {
	$(".typed").typed({
        strings: ['Just a dev', "Wilkommen auf meiner Seite", "Razer", "termuxtu3tor", "FTG", "stupid shit of a stupid shit", "mom's friend's son", "Hello world!", "bruh"],
        typeSpeed: 100,
        loop: true,
        cursorChar: "|",
    });
});
