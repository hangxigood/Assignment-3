// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Selecting the submit button and the main contact page element
const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

// Adding an event listener to the submit button
submitButton.addEventListener('click', function() {

    // Clearing the contents of the contact page
    contactPage.innerHTML = '';

    // Creating a new paragraph element for the thank you message
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for your message';
    thankYouMessage.style.fontSize = '24px';

    // Adding the thank you message to the contact page
    contactPage.appendChild(thankYouMessage);
});