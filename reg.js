// Add a listener to the form submission to check if passwords are matching

document.querySelector('form').addEventListener('submit', function(event) {
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    // Check if the two passwords match
    if (password !== confirmPassword) {
        alert('The two passwords do not match.');
        event.preventDefault();
    }
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }