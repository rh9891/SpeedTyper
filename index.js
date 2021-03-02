const modal = document.querySelector(".modal");
const directionsButton = document.querySelector(".directions-button");
const closeButton = document.querySelector(".close-button");

// Function to show modal.
toggleModal = () => {
  modal.classList.toggle("show-modal");
};

// Function for the modal to be hidden when clicking outside the modal.
windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
};

// Event listener for the modal to show when the directions button is clicked.
directionsButton.addEventListener("click", toggleModal);

// Event listener for the modal to be hidden when the close button is clicked.
closeButton.addEventListener("click", toggleModal);

// Event listener for the modal to be hidden when clicking outside the modal.
window.addEventListener("click", windowOnClick);
