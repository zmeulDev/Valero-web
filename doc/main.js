document.addEventListener('DOMContentLoaded', () => {
    const navigationContainer = document.getElementById('navigation');
    
    if (navigationContainer) {
        fetch('navigation.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Navigation could not be loaded');
                }
                return response.text();
            })
            .then(data => {
                navigationContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading navigation:', error);
                navigationContainer.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        Unable to load navigation. Please refresh the page.
                    </div>
                `;
            });
    }
});

    