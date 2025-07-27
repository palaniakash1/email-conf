function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_ejh0yw9", "template_7oh8huj", params)
    .then(function (response) {
      alert("Email sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch(function (error) {
      alert("Email sending failed.");
      console.error("FAILED...", error);
    });
}
