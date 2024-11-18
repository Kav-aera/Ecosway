document.addEventListener("DOMContentLoaded", function() {
  const checkpoints = document.querySelectorAll(".checkpoint");
  
  checkpoints.forEach(function(checkpoint) {
    checkpoint.addEventListener("click", function() {
      const index = parseInt(this.getAttribute("data-index"));
      const previousCheckpoint = document.querySelector(".active");
      if (previousCheckpoint) {
        previousCheckpoint.classList.remove("active");
      }
      this.classList.add("active");
      animateSprite(index);
    });
  });

  function animateSprite(targetIndex) {
    const sprite = document.querySelector(".sprite");
    const currentCheckpoint = document.querySelector(`.checkpoint[data-index="${targetIndex}"]`);
    const timeline = document.querySelector(".timeline");
    const timelineRect = timeline.getBoundingClientRect();
    const checkpointRect = currentCheckpoint.getBoundingClientRect();
    const offsetLeft = checkpointRect.left - timelineRect.left + checkpointRect.width / 2 - sprite.offsetWidth / 2;
    const offsetTop = checkpointRect.top - timelineRect.top + checkpointRect.height / 2 - sprite.offsetHeight / 2;
    sprite.style.left = offsetLeft + "px";
    sprite.style.top = offsetTop + "px";
  }
});
