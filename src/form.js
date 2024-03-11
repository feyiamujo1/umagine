const fullname = document.getElementById("fullname");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const contact_us_form = document.getElementById("ContactForm");
const buttonText = document.getElementById("buttonText");
const buttonLoader = document.getElementById("buttonLoader");
const contactFormButton = document.getElementById("contactFormButton");
const correct_response_indicator = document.getElementById("correct_response");
const error_response_indicator = document.getElementById("error_response");

const SubmitContactForm = e => {
  e.preventDefault();
  contactFormButton.disabled = true;
  const access_key = "a502968f-9479-4c40-8998-a0a38cbc88a6";
  const formData = {
    access_key: access_key,
    Name: fullname.value,
    Email: email.value,
    Phone: phoneNumber.value,
    Subject: subject.value,
    Message: message.value
  };
  const json = JSON.stringify(formData);

  buttonText.classList.add("hidden");
  buttonLoader.classList.remove("hidden");
  error_response_indicator.classList.add("hidden");
  correct_response_indicator.classList.add("hidden");
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios
    .post("https://api.web3forms.com/submit", json)
    .then(response => {
      if (response.status === 200) {
        correct_response_indicator.classList.remove("hidden");
        contactFormButton.disabled = false;
        buttonText.classList.remove("hidden");
        buttonLoader.classList.add("hidden");
        contact_us_form.reset();
        setTimeout(() => {
          error_response_indicator.classList.add("hidden");
          correct_response_indicator.classList.add("hidden");
        }, 5000);
      }
    })
    .catch(error => {
      console.log(error);
      error_response_indicator.classList.remove("hidden");
      contactFormButton.disabled = false;
      buttonText.classList.remove("hidden");
      buttonLoader.classList.add("hidden");
      setTimeout(() => {
        error_response_indicator.classList.add("hidden");
        correct_response_indicator.classList.add("hidden");
      }, 5000);
    });
};
