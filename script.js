$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        // Optional: Perform form validation before submission
        if ($('#name').val() === '') {
            alert('Name is required!');
            event.preventDefault();
        }
    });
});