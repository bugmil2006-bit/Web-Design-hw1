# Student Portfolio & Project Showcase

This is a mini-project for the UVT Web Development course (Labs 1-4, Lectures 1-2). 

## Chosen Scenario
**Student Project Showcase** - A 4-page portfolio website meant to display my personal academic journey in Artificial Intelligence at UVT, my C research data on sorting algorithms, and my dirt park startup.

## Implemented Requirements Checklist
- [x] **4 Pages Minimum:** `index.html`, `about.html`, `data.html`, `contact.html`.
- [x] **Semantic HTML5:** Used `<header>`, `<nav>`, `<main id="main-content">`, and `<footer>`.
- [x] **Accessibility (a11y):** Included a visually hidden skip-link, logical heading hierarchy (H1 -> H2 -> H3), and `aria-current` for navigation state.
- [x] **Tabular Data:** Created a 4-row data table tracking sorting algorithms using `<caption>`, `<thead>`, `<tbody>`, `<th>`, and proper `scope` attributes without using it for layout.
- [x] **Forms:** Included a 5-control form using `<fieldset>`, `<legend>`, `<label>` explicitly tied to inputs via `for`/`id` attributes, and basic HTML5 validation.
- [x] **CSS Formatting:** Kept strictly to one external `styles.css` file handling typography, colors, the box model, and clean selectors.

## Known Limitations
- The contact form is UI-only and does not process data via a backend. Action is currently set to `action="#"`.

Live website
https://bugmil2006-bit.github.io/Web-Design-hw1/
## HW3 Updates: Dynamic Portfolio & Validation
- [x] **New Page:** Added `cv.html` connected to the global navigation.
- [x] **Accessible Form:** Created a 5-input form (`text`, `textarea`, `url`, `date`, `select`) utilizing `<fieldset>`, explicit `<label>` tags, and `aria-describedby` for error handling.
- [x] **Client-Side JS Validation:** Implemented custom JS validation in `cv.js` that prevents default submission, evaluates input logic, dynamically renders WCAG-compliant error states, and supports form reset.
- [x] **Dynamic Table:** Successfully validated data is passed into a DOM creation function that generates new `<tr>` elements and prepends them to the portfolio table without reloading the page.
- [x] **Performance Optimization:** All injected table images utilize the `loading="lazy"` attribute, and the CSS uses a `.table-responsive` wrapper for cross-device usability.
- [x] **Bonus (Originality):** Added a `@keyframes` animation (`slideFadeIn`) so newly submitted projects slide smoothly into the data table.

### Lighthouse Audit Scores (HW3)
* **Performance:** 98/100
* **Accessibility:** 100/100 (Passes all ARIA and contrast checks)
* **Best Practices:** 100/100
* **SEO:** 100/100