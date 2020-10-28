function showAnimation() {

    drawCircle(150, 150, 100).then(div => {
      div.classList.add('animation');
      div.append("TIIDELab!");
    });
}
  
  function drawCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'animationCircle';
    document.body.append(div);
    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 3 + 'px';
        div.style.height = radius * 3 + 'px';
        div.addEventListener('transitionend', function handler() {
          resolve(div);
        });
      }, 0);
    })
  }