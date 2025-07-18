document.addEventListener('DOMContentLoaded', function() {
    // --- Wi-Fi QR Code Toggle Functionality ---
    // Get the Wi-Fi toggle button by its ID
    const toggleWifiButton = document.getElementById('toggleWifiButton');
    // Get the container holding the Wi-Fi QR codes by its ID
    const wifiQrContainer = document.getElementById('wifiQrContainer');

    // Add an event listener to the Wi-Fi button. This code runs when the button is clicked.
    if (toggleWifiButton) { // Ensure the button element exists
        toggleWifiButton.addEventListener('click', function() {
            // Toggle the 'active' class on the QR container.
            // This class (defined in style.css) will control visibility.
            wifiQrContainer.classList.toggle('active');
        });
    }

    // --- Click-to-Copy Functionality ---
    // Helper function to copy text to the clipboard
    function copyTextToClipboard(text) {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = text;
        // Make the textarea invisible and add it to the body
        textarea.style.position = 'fixed';
        textarea.style.opacity = 0;
        document.body.appendChild(textarea);
        
        // Select the text and copy it
        textarea.select();
        document.execCommand('copy');
        
        // Remove the temporary textarea
        document.body.removeChild(textarea);
        
        // Show a confirmation message to the user
        alert('تم نسخ: ' + text); 
    }

    // Get all buttons that have the 'data-copy' attribute
    const copyButtons = document.querySelectorAll('[data-copy]');

    // Add an event listener to each copy button
    copyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent the default link behavior (we only want to copy)
            event.preventDefault(); 
            // Get the text to copy from the 'data-copy' attribute
            const textToCopy = this.getAttribute('data-copy');
            copyTextToClipboard(textToCopy);
        });
    });
});