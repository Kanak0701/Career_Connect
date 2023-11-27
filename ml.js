careerFields = document.querySelectorAll('.career-field');

careerFields.forEach(field => {
    field.addEventListener('click', () => {
        const content = field.getAttribute('data-content');
        // Assuming you want to navigate to a new page with the selected career as a query parameter
        window.location.href = 'ds.html?career=${content}';
    });
});