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

// Disable or hide toolbar in modal
jQuery('#iframe').load(function(){
    jQuery('#iframe').contents().find("#toolbarViewerRight").hide();
});

function goFullscreen() {
    var iframe = document.getElementById('ifrm');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
}