document.addEventListener("DOMContentLoaded", function() {

    let qrImage = document.getElementById("qrImage");
    let qrUPIIDorAmount = document.getElementById("qrUPIIDorAmount");
    
    function generateQR() {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + qrUPIIDorAmount.value;
    }
    document.getElementById("generateButton").addEventListener("click", function() {
        generateQR();
    });
});

