// Funtions to toggle navigation bar
document.getElementById('navbt').addEventListener('click', function() {
    var navList = document.getElementById('navbarSupportedContent');
    navList.classList.toggle('show');
});
// Function to open dropodown window
document.getElementById('dropdownbtn').addEventListener('click', function() {
    var navList = document.getElementById('dropdownlist');
    navList.classList.toggle('show');
});
// Function to open a modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close a modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close the modal when clicked outside of it
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Function to open a modal
// function openModal(modalId) {
//     var modal = document.getElementById(modalId);
//     modal.style.display = "block";
//   }

  // FIXME: Function to toggle password visibility
  // function myFunction() {
  //   var x = document.getElementById("myInputpass");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }
  // FIXME: Function to check password validity
  // function checkpass() {
  //   var y = document.getElementById("myInputpass");
  //   var x = document.getElementById("myInputuser");
  //   if (x.value == "" && y.value == "") {
  //     alert("please enter username and password");
  //   }
  //   else if (x.value == "SRSV" && y.value == "Srsvpart2") {
  //     alert("you are logged in");
  //     document.getElementById("sign1").style.display="none";
  //   }
  //   else {
  //     alert("sorry you are not allowed to login");
  //     window.location.href = "error.html";
  //   }
  // }
  // FIXME: Function to toggle password type
  // function changetype() {
  //   var x = document.getElementById("myInputpass");
  //   if (x.type === "text") {
  //     x.type = "password";
  //   }
  //   else{
  //     return;
  //   }
  // }
  // FIXME: Function to show the modal
  // function showModal() {
  //   document.getElementById("sign1").style.display = "flex";
  // }

  // FIXME: Function to close the modal
  // Show the modal when the page loads
  // window.onload = function () {
  //   showModal();
  // };
  // Function to open login page whenever the website loads
  // window.onload = function () {
  //   var modal = document.getElementById("modal-content");
  //   modal.style.display = "block";
  // };