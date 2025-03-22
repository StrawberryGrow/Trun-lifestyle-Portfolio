// Scroll to contact section when clicking button
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Handle form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    alert("Thank you for contacting us! We will get back to you soon.");
    this.reset(); // Clear the form
  });

// Image sets for each product box
const productImages = {
  box1: [
    "Image/P1/First Day At Office (1).jpg",
    "Image/P1/First day at Office.jpg",
    "Image/P1/First Day At Office (1).jpg",
    "Image/P1/Joining kit.jpg",
  ],
  box2: [
    "https://via.placeholder.com/300x400?text=Product2+Image1",
    "https://via.placeholder.com/300x400?text=Product2+Image2",
    "https://via.placeholder.com/300x400?text=Product2+Image3",
    "https://via.placeholder.com/300x400?text=Product2+Image4",
  ],
  box3: [
    "https://via.placeholder.com/300x400?text=Product3+Image1",
    "https://via.placeholder.com/300x400?text=Product3+Image2",
    "https://via.placeholder.com/300x400?text=Product3+Image3",
    "https://via.placeholder.com/300x400?text=Product3+Image4",
  ],
  box4: [
    "https://via.placeholder.com/300x400?text=Product4+Image1",
    "https://via.placeholder.com/300x400?text=Product4+Image2",
    "https://via.placeholder.com/300x400?text=Product4+Image3",
    "https://via.placeholder.com/300x400?text=Product4+Image4",
  ],
};

// Track current index for each product box
const indices = {
  box1: 0,
  box2: 0,
  box3: 0,
  box4: 0,
};

// Function to update images every 5 seconds
function startImageRotation(boxId) {
  setInterval(() => {
    indices[boxId] = (indices[boxId] + 1) % productImages[boxId].length;
    const imgElement = document.querySelector(`#${boxId} img`);
    imgElement.style.opacity = 0; // Fade out

    // After fade out, change image and fade in
    setTimeout(() => {
      imgElement.src = productImages[boxId][indices[boxId]];
      imgElement.style.opacity = 1; // Fade in
    }, 500);
  }, 5000); // 5 seconds
}
// Array of hero section background images
const heroImages = [
  "Image/Hero/hero1.jpg", //,
  // "Image/Hero/hero2.jpg",
  // "Image/Hero/hero3.jpg",
  // "Image/Hero/hero4.jpg",
];

let heroIndex = 0;

// Function to change background image
function changeHeroImage() {
  document.querySelector(
    ".hero"
  ).style.backgroundImage = `url('${heroImages[heroIndex]}')`;
  heroIndex = (heroIndex + 1) % heroImages.length;
}

// Initial Background Setup
changeHeroImage();

// Auto-slide every 5 seconds
setInterval(changeHeroImage, 5000);

// Start rotation for each box
startImageRotation("box1");
startImageRotation("box2");
startImageRotation("box3");
startImageRotation("box4");
