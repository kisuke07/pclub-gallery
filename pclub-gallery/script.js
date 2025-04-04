// Image Data Array
const images = [
    { url: 'images/nature1.jpg', category: 'nature', caption: 'Serene Waterfall' },
    { url: 'images/nature2.jpg', category: 'nature', caption: 'Lush Green Forest' },
    { url: 'images/architecture1.jpg', category: 'architecture', caption: 'Futuristic Skyscraper' },
    { url: 'images/architecture2.jpg', category: 'architecture', caption: 'Ancient Temple' },
    { url: 'images/people1.jpg', category: 'people', caption: 'Joyful Street Life' },
    { url: 'images/people2.jpg', category: 'people', caption: 'Market Scene' }
];

// Function to Load Images Dynamically
const gallery = document.getElementById("gallery");

function loadImages(filter = "all") {
    gallery.innerHTML = ""; // Clear gallery before loading new images

    images.forEach((img) => {
        if (filter === "all" || img.category === filter) {
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("gallery-item");
            imgContainer.setAttribute("data-caption", img.caption);

            const imgElement = document.createElement("img");
            imgElement.src = img.url;
            imgElement.alt = img.caption;

            imgContainer.appendChild(imgElement);
            gallery.appendChild(imgContainer);
        }
    });

    attachLightboxEvents(); // Re-attach lightbox events after filtering
}

// Load All Images Initially
loadImages();

// Filter Buttons
document.getElementById("filter-buttons").addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
        const category = e.target.dataset.category;
        loadImages(category);

        // Update active button style
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
    }
});

// Lightbox Feature
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function attachLightboxEvents() {
    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", (e) => {
            lightbox.style.display = "flex";
            lightboxImg.src = e.target.src;
        });
    });
}

// Close Lightbox on Click Outside
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});
