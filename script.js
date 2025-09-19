function sendMail(event) {

    let status = document.getElementById("formStatus");

    event.preventDefault();

    let params = {
        user_name: document.getElementById("personName").value,
        user_email: document.getElementById("personEmail").value,
        subject: document.getElementById("personSubject").value,
        user_message: document.getElementById("personMessage").value,
    }

    emailjs.send("service_ey5gs2k", "template_1to4cqc", params)
        .then(function (response) {
            status.textContent = `${response.text}, Email has been sent`
            console.log(response);
            // Optionally clear the form here
            event.target.reset();

        }, function (error) {
            status.textContent = `Error: ${error}`
        });
}