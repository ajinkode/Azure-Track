// JavaScript for Carousel with Arrows
const carousel = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel-container img');
const totalImages = images.length;
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;

function updateCarousel() {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function moveToNextImage() {
    index = (index + 1) % totalImages;
    updateCarousel();
}

function moveToPreviousImage() {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
}

rightArrow.addEventListener('click', moveToNextImage);
leftArrow.addEventListener('click', moveToPreviousImage);


async function fetchAndDisplayCustomerData() {
    try {
        const response = await fetch('/api/task2');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // Get the table body
        const tableBody = document.querySelector('#customers-table tbody');
        tableBody.innerHTML = ''; // Clear existing rows

        // Create rows from the data
        data.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.CustomerID}</td>
                <td>${customer.FirstName}</td>
                <td>${customer.LastName}</td>
                <td>${customer.EmailAddress}</td>
                <td>${customer.Phone}</td>
                <td>${customer.Address}</td> <!-- Adjust based on your data fields -->
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching customer data:', error);
    }
}


async function fetchAndDisplayCategoryData() {
    try {
        const response = await fetch('/api/task3');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // Get the table body for categories
        const tableBody = document.querySelector('#customers-table-2 tbody');

         // Clear existing rows
        tableBody.innerHTML = '';


        // Create rows from the category data
        data.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.ProductName}</td>
                <td>${customer.Color}</td>
                <td>${customer.Size}</td>
                <td>${customer.Weight}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching category data:', error);
    }
}

// Call fetchData when the page loads
window.onload = function() {
    fetchAndDisplayCustomerData();
    fetchAndDisplayCategoryData();
};
