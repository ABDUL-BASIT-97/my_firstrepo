// JS for handling dropdown on click for mobile responsiveness
const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
dropdownElementList.map(function (dropdownToggleEl) {
    dropdownToggleEl.addEventListener('click', function () {
        let nextEl = this.nextElementSibling;
        if (nextEl.style.visibility === 'visible') {
            nextEl.style.visibility = 'hidden';
            nextEl.style.opacity = '0';
        } else {
            nextEl.style.visibility = 'visible';
            nextEl.style.opacity = '1';
        }
    });
});
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        // Deselect all cards
        document.querySelectorAll('.card').forEach(function(card) {
            card.classList.remove('selected');
        });
        // Select the clicked card
        this.classList.add('selected');

        // Get data from the selected card
        const selectedBrand = this.getAttribute('data-brand');
        const selectedPackage = this.getAttribute('data-package');
        const selectedPrice = this.getAttribute('data-price');
        const selectedDays = this.getAttribute('data-days');
        const selectedFood = this.getAttribute('data-food');
        const selectedLocation = this.getAttribute('data-location');

        // Update booking summary
        document.getElementById('selectedBrand').textContent = selectedBrand;
        document.getElementById('selectedPackage').textContent = selectedPackage;
        document.getElementById('selectedPrice').textContent = selectedPrice;
        document.getElementById('selectedDays').textContent = selectedDays;
        document.getElementById('selectedFood').textContent = selectedFood;
        document.getElementById('selectedLocation').textContent = selectedLocation;

        // Enable 'Proceed to Payment' button
        document.getElementById('payNowBtn').disabled = false;
    });
});

// Handle payment button click
document.getElementById('payNowBtn').addEventListener('click', function() {
    alert('Payment Successful! Thank you for booking.');
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
        document.getElementById('contactForm').reset(); // Clear form after submission
    } else {
        alert('Please fill out all fields.');
    }
});
document.getElementById('queryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate form submission and show success message
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('queryType').value = '';
    document.getElementById('message').value = '';

    // Optional: Simulate error message instead of success
    // document.getElementById('errorMessage').style.display = 'block';
    // document.getElementById('successMessage').style.display = 'none';
});
