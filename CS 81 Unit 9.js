function changeRed() {
words = document.getElementsByTagName('strong');
for (var i = 0; i < words.length; i++) {
  words[i].onmouseover = function () {
    this.style.color = "red";
      };
    }
}
