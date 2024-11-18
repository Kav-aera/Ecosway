document.getElementById('donate-button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Show the popup message
  showPopup();
});

function showPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}
