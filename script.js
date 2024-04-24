// This function will be called when the page loads
window.onload = function() {
    openPopup();
}

function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    // Replace 'YourPassword' with your desired password
    if (password === "ip=0343") {
        closePopup();
    } else {
        alert("Incorrect password. Please try again.");
        document.getElementById("passwordInput").value = "";
    }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}