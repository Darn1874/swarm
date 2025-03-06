// Slideshow functionality for the hero section
let heroSlideIndex = 0;

function showHeroSlides() {
  const slides = document.querySelectorAll(".slide");

  // Hide all slides
  slides.forEach((slide) => {
    slide.style.opacity = 0;
  });

  // Move to the next slide
  heroSlideIndex++;
  if (heroSlideIndex > slides.length) {
    heroSlideIndex = 1;
  }

  // Show the current slide
  slides[heroSlideIndex - 1].style.opacity = 1;

  // Change slide every 5 seconds
  setTimeout(showHeroSlides, 5000);
}

// Start the hero slideshow
showHeroSlides();

// Form submission to Google Apps Script
document.getElementById("workshopSignupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const workshopId = document.getElementById("workshop").value;

  // Find the selected workshop name
  const workshop = workshops.find((w) => w.id == workshopId);
  const workshopName = workshop ? `${workshop.name} - ${workshop.date}${workshop.location ? ` (${workshop.location})` : ""}` : "";

  // Send data to Google Apps Script
  fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
    method: "POST",
    body: JSON.stringify({ name, email, workshop: workshopName }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.text())
    .then(() => {
      alert("Thank you for signing up! We'll contact you with more details.");
      signupModal.style.display = "none";
      document.getElementById("workshopSignupForm").reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    });
});

// Sample data for upcoming workshops
const workshops = [
  { id: 1, name: "Composting 101", date: "October 15, 2023" },
  { id: 2, name: "Sustainable Waste Management", date: "November 5, 2023" },
  { id: 3, name: "Urban Farming Techniques", date: "December 10, 2023" },
  { id: 4, name: "Environmental Day", date: "March 23, 2025", location: "KICC Nairobi" }, // New workshop
];

// Populate workshop dropdown in the modal
const workshopSelect = document.getElementById("workshop");
workshops.forEach((workshop) => {
  const option = document.createElement("option");
  option.value = workshop.id;
  option.textContent = `${workshop.name} - ${workshop.date}${workshop.location ? ` (${workshop.location})` : ""}`;
  workshopSelect.appendChild(option);
});

// Testimonial carousel functionality
const testimonials = document.querySelectorAll(".testimonial");
let testimonialIndex = 0;

function showNextTestimonial() {
  // Hide the current testimonial
  testimonials[testimonialIndex].classList.remove("active");

  // Move to the next testimonial
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;

  // Show the next testimonial
  testimonials[testimonialIndex].classList.add("active");
}

// Show the first testimonial initially
testimonials[testimonialIndex].classList.add("active");

// Automatically switch testimonials every 5 seconds
setInterval(showNextTestimonial, 5000);

// Partner carousel functionality
let partnerSlideIndex = 0;
const partnerSlides = document.querySelector(".partner-slides");
const totalPartnerSlides = document.querySelectorAll(".partner").length;

function showPartnerSlide(index) {
  if (index < 0) {
    partnerSlideIndex = totalPartnerSlides - 1;
  } else if (index >= totalPartnerSlides) {
    partnerSlideIndex = 0;
  } else {
    partnerSlideIndex = index;
  }
  const offset = -partnerSlideIndex * 100;
  partnerSlides.style.transform = `translateX(${offset}%)`;
}

document.querySelector(".carousel-prev").addEventListener("click", () => {
  showPartnerSlide(partnerSlideIndex - 1);
});

document.querySelector(".carousel-next").addEventListener("click", () => {
  showPartnerSlide(partnerSlideIndex + 1);
});

// Automatically cycle through partner slides every 5 seconds
setInterval(() => {
  showPartnerSlide(partnerSlideIndex + 1);
}, 5000);

document.getElementById("careerApplicationForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const position = document.getElementById("position").value;
    const message = document.getElementById("message").value;
  
    // Simulate form submission (replace with actual backend integration)
    console.log("Application Details:", { fullName, email, phone, position, message });
  
    alert("Thank you for your application! We will contact you soon.");
    document.getElementById("careerApplicationForm").reset();
  });
