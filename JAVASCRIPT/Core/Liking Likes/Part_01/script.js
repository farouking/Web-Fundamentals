
function Addlike() {
    let likeCount = document.getElementById('likeCount');
    let count = parseInt(likeCount.textContent);
    count++;
    likeCount.textContent = count;
  }