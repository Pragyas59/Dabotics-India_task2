function generateQRCode() {
    var inputText = document.getElementById('input').value;
    var errorMessage = document.getElementById('error-message');
    
    // Clear previous QR code and error message
    document.getElementById("qr-code").innerHTML = "";
    errorMessage.textContent = "";

    if (inputText) {
        try {
            // Generate new QR code
            var qrcode = new QRCode(document.getElementById("qr-code"), {
                text: inputText,
                width: 128,
                height: 128
            });
        } catch (error) {
            errorMessage.textContent = "Error generating QR code. Please try again.";
        }
    } else {
        errorMessage.textContent = "Please enter a message or URL";
    }
}
function resetForm() {
    // Reset input, QR code, and error message
    document.getElementById('input').value = '';
    document.getElementById('qr-code').innerHTML = '';
    document.getElementById('error-message').textContent = '';
}