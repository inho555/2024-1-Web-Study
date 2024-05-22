document.addEventListener('DOMContentLoaded', function() {
  var colorButton = document.getElementById('colorButton');
  var gdscText = document.getElementById('gdsc-text');
  
  colorButton.addEventListener('click', function() {
    if (gdscText.style.color === 'black') {
      gdscText.style.color = 'blue';
    } else {
      gdscText.style.color = 'black';
    }
  });
});

