document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('product-form');
    const resultsDiv = document.getElementById('product-results');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const query = document.getElementById('query').value.toLowerCase();
        const category = document.getElementById('category').value.toLowerCase();

        // Example product data
        const products = [
            { id: 1, name: 'Eco-Friendly Toothbrush', category: 'Personal Care', image: 'tooth.jpg' },
            { id: 2, name: 'Reusable Water Bottle', category: 'Accessories', image: 'bottle.jpg' },
            { id: 3, name: 'Organic Cotton Shirt', category: 'Apparel', image: 'shirt.jpg' }
        ];

        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) &&
            product.category.toLowerCase().includes(category)
        );

        if (filteredProducts.length === 0) {
            resultsDiv.innerHTML = '<p class="text-red-500">No products found.</p>';
            return;
        }

        resultsDiv.innerHTML = filteredProducts.map(product => `
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <img src="${product.image}" alt="${product.name}" class="mx-auto mb-4 h-48 w-48 object-cover">
                <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
                <p class="text-gray-600 mb-4">Category: ${product.category}</p>
                <a href="#" class="text-green-500 hover:underline">View Details</a>
            </div>
        `).join('');
    });
});
