document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData();
    const imageInput = document.getElementById('image-input');
    formData.append('image', imageInput.files[0]);

    fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show success message
        imageInput.value = ''; // Clear the input
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Function to update parking slots based on sensor input
function updateParkingSlots(slotStatus) {
    const slots = document.querySelectorAll('.slot');
    slots.forEach((slot, index) => {
        if (slotStatus[index]) {
            slot.classList.remove('available');
            slot.classList.add('occupied');
            slot.querySelector('.status').textContent = 'Occupied';
        } else {
            slot.classList.remove('occupied');
            slot.classList.add('available');
            slot.querySelector('.status').textContent = 'Available';
        }
    });
}

// Simulated sensor input for demonstration
setInterval(() => {
    const simulatedStatus = [Math.random() < 0.5, Math.random() < 0.5, Math.random() < 0.5, Math.random() < 0.5, Math.random() < 0.5];
    updateParkingSlots(simulatedStatus);
}, 5000); // Update every 5 seconds