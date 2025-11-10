document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (phone && message) {
      alert("Message sent!\n\nPhone: " + phone + "\nMessage: " + message);
      this.reset();
    } else {
      alert("Please fill in both fields before sending!");
    }
  });
  