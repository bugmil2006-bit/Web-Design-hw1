document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('portfolio-form');
    const tbody = document.getElementById('projects-tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop page reload immediately

        // Clear previous errors
        clearErrors();

        // Extract values
        const name = document.getElementById('proj-name').value.trim();
        const desc = document.getElementById('proj-desc').value.trim();
        const url = document.getElementById('proj-url').value.trim();
        const date = document.getElementById('proj-date').value;
        const tech = document.getElementById('proj-tech').value;
        const imgUrl = document.getElementById('proj-img').value.trim();

        let isValid = true;

        // Validation Logic
        if (!name) {
            showError('proj-name', 'name-error', 'Project name is required.');
            isValid = false;
        }

        if (!desc) {
            showError('proj-desc', 'desc-error', 'Description is required.');
            isValid = false;
        }

        if (url && !isValidUrl(url)) {
            showError('proj-url', 'url-error', 'Please enter a valid URL.');
            isValid = false;
        }

        if (!date) {
            showError('proj-date', 'date-error', 'Please select a date.');
            isValid = false;
        }

        if (!tech) {
            showError('proj-tech', 'tech-error', 'Please select a technology.');
            isValid = false;
        }

        if (imgUrl && !isValidUrl(imgUrl)) {
            showError('proj-img', 'img-error', 'Please enter a valid image URL.');
            isValid = false;
        }

        // If validation passes, create the table row
        if (isValid) {
            addProjectToTable(name, desc, url, date, tech, imgUrl);
            form.reset(); // Clear form on success
            
            // Optional: return focus to the first input for accessibility
            document.getElementById('proj-name').focus();
        }
    });

    // Reset listener to clear errors when the user clicks 'Reset'
    form.addEventListener('reset', clearErrors);

    // --- Helper Functions --- //

    function showError(inputId, errorId, message) {
        const input = document.getElementById(inputId);
        const errorSpan = document.getElementById(errorId);
        
        input.classList.add('input-error');
        input.setAttribute('aria-invalid', 'true');
        
        errorSpan.textContent = message;
        errorSpan.style.display = 'block';
    }

    function clearErrors() {
        const inputs = form.querySelectorAll('input, textarea, select');
        const errors = form.querySelectorAll('.error-message');
        
        inputs.forEach(input => {
            input.classList.remove('input-error');
            input.removeAttribute('aria-invalid');
        });
        
        errors.forEach(error => {
            error.style.display = 'none';
            error.textContent = '';
        });
    }

    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    function addProjectToTable(name, desc, url, date, tech, imgUrl) {
        const tr = document.createElement('tr');
        tr.classList.add('new-row-animation'); // Bonus requirement

        // Handle missing images safely
        const safeImg = imgUrl ? `<img src="${imgUrl}" alt="Thumbnail for ${name}" class="table-thumb" loading="lazy">` : `<div class="no-img">No Image</div>`;
        const safeLink = url ? `<a href="${url}" target="_blank" rel="noopener">View</a>` : `N/A`;

        tr.innerHTML = `
            <td>${safeImg}</td>
            <td><strong>${name}</strong></td>
            <td>${desc}</td>
            <td><span class="tech-badge">${tech}</span></td>
            <td>${date}</td>
            <td>${safeLink}</td>
        `;

        tbody.prepend(tr); // Adds new project to the top of the table
    }
});