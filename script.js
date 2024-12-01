document.getElementById('contactForm').addEventListener('submit', function (event) {  
    event.preventDefault();  
    alert('Thank you for your message!');  
    this.reset();  
});




function filterProducts() {  
    const filterValue = document.getElementById('filter').value;  
    const products = document.querySelectorAll('#productList li');  

    products.forEach(product => {  
        if (filterValue === 'all' || product.dataset.category === filterValue) {  
            product.style.display = 'list-item';  
        } else {  
            product.style.display = 'none';  
        }  
    });  
}  

function sortProducts() {  
    const productList = document.getElementById('productList');  
    const products = Array.from(productList.children);  
    const sortValue = document.getElementById('sort').value;  

    products.sort((a, b) => {  
        if (sortValue === 'high') {  
            return b.dataset.rating - a.dataset.rating; // High to Low  
        } else if (sortValue === 'low') {  
            return a.dataset.rating - b.dataset.rating; // Low to High  
        }  
        return 0; // Default order  
    });  

    products.forEach(product => productList.appendChild(product)); // Update the DOM  
}





