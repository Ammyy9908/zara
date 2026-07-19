# Zara-Inspired E-Commerce Homepage

A modern, elegant homepage inspired by Zara's minimalist design aesthetic, featuring smooth animations, responsive layouts, and interactive elements.

## Features

### Design
- **Modern & Minimalist**: Clean layout with focus on visual hierarchy
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Fade-in effects, hover interactions, and parallax scrolling
- **Typography**: Inter font family for modern, readable text

### Interactive Elements
- **Sticky Header**: Header stays visible while scrolling with backdrop blur effect
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Anchor links scroll smoothly to sections
- **Image Hover Effects**: Product images scale on hover
- **Intersection Observer**: Cards animate into view as you scroll
- **Newsletter Subscription**: Form validation with user feedback

### Sections
1. **Hero Section**: Large hero area with headline and description
2. **Feature Section**: Highlighted content with overlay text
3. **Product Cards**: Three-column grid showcasing collections
4. **Gallery Grid**: Six-item responsive image gallery
5. **Footer**: Multi-column footer with links and newsletter signup

## Technical Details

### Files
- `index.html` (154 lines) - Semantic HTML5 structure
- `css/index.css` (601 lines) - Modern CSS with animations and responsive design
- `js/index.js` (184 lines) - Interactive features and animations

### Technologies Used
- HTML5 with semantic markup
- CSS3 with Flexbox and Grid
- Vanilla JavaScript (no frameworks)
- Google Fonts (Inter, Tinos)
- Intersection Observer API
- CSS animations and transitions

### Accessibility
- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Alt text for images
- Focus states for interactive elements

## Browser Support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Performance Optimizations
- Lazy loading for images
- Debounced scroll events
- CSS-based animations (GPU accelerated)
- Optimized image sizes
- Minimal JavaScript footprint

## How to View
Simply open `index.html` in a modern web browser, or serve it with any HTTP server:

```bash
python3 -m http.server 8080
# Then visit http://localhost:8080
```

## Customization
- Update images by replacing Unsplash URLs in HTML
- Modify colors in CSS variables (can be added)
- Adjust typography in the CSS font declarations
- Add more sections following the existing pattern

---

Created as a modern, Zara-inspired e-commerce homepage clone.
