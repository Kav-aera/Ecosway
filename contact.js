
    // Image Change
    let images = ["quino-al-mBQIfKlvowM-unsplash.jpg", "aaron-burden-Fq5-qbqYpzs-unsplash"]; // Add image URLs here
    let imageIndex = 0;
    let imageElement = document.querySelector(".contact-image");
  
    setInterval(() => {
      imageIndex = (imageIndex + 1) % images.length;
      imageElement.src = images[imageIndex];
    }, 8000); // Change image every 8 seconds (8000 milliseconds)
