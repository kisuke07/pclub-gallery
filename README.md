# 📸 PClub Responsive Gallery

A **Pinterest-style responsive photo gallery** built with **React + Vanilla HTML/CSS** (without `create-react-app`).  
It includes **category filters, image hover captions, a lightbox feature, and dark/light mode toggling**.

---

## 🚀 1. Selected Task
**Task:** Responsive Landing Page for PClub with a Responsive Photo Gallery Grid

### ✅ Core Features Implemented:
- Responsive photo gallery layout (masonry grid)
- Minimum 3 filter categories
- Hover effect with image caption
- Images loaded dynamically from a predefined array
- Filtering logic (show images by category)
- Smooth transitions and animations

---

## 🎁 2. Bonus Features Implemented
- ✅ **Lightbox**: Fullscreen popup to view images
- ✅ **Theme Toggler**: Dark/Light mode switch (persists using localStorage)
- ✅ **Responsive**: Fully responsive design using CSS columns and media queries

---

## 💡 3. Innovative Implementation
- **Pure React CDN setup**: No `create-react-app`, this project runs directly in browser using React CDN (lightweight and portable).
- **Inline hover captions**: Uses `::after` pseudo-element to display captions over images with fade-in effect.
- **Persistent dark mode**: Theme state saved in `localStorage`, toggled by a React component.
- **Masonry-like layout**: Achieved with CSS `column-count` instead of external libraries.

---


## 🔁 4. Project Workflow

### Components & Functionality:
- `ImageItem` → Renders each image with a hover caption and click functionality
- `Gallery` → Renders filter buttons and gallery grid; manages filtering and lightbox
- `Lightbox` → Full-screen image preview popup
- `ThemeToggle` → Dark/light mode toggle button with local storage sync

### Process:
1. **User visits the gallery** – All images are displayed
2. **Filter buttons** – Show only selected category
3. **Hover over image** – Caption appears as overlay
4. **Click image** – Lightbox opens
5. **Click theme toggle** – Switch to light or dark mode

---

## 🛠️ Tech Stack
- HTML
- CSS (no libraries)
- JavaScript (ES6)
- React via CDN

---

## 📁 How to Run Locally

```bash
git clone https://github.com/kisuke07/pclub-gallery.git
cd pclub-gallery
open index.html
