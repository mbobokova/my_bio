let isDragging = false; // Indicates if the modal is being dragged
let offset = { x: 0, y: 0 }; // Mouse offset for positioning
let currentModal = null; // Currently dragged modal

// Initialize drag functionality for a modal
function initDraggable(modal) {
    const header = modal.querySelector('.modal-header'); // Select modal header

    // Start dragging on mouse down
    header.addEventListener('mousedown', (e) => {
        isDragging = true; // Set dragging flag
        // Calculate offset between mouse and modal position
        offset.x = e.clientX - modal.getBoundingClientRect().left;
        offset.y = e.clientY - modal.getBoundingClientRect().top;
        currentModal = modal; // Track current modal
        document.body.style.cursor = 'move'; // Change cursor
    });
}

// Select all modals with the class "move_modal"
const modals = document.querySelectorAll('.move_modal');

// Apply drag functionality to each modal
modals.forEach(modal => {
    initDraggable(modal);
});

// Move the modal based on mouse position
document.addEventListener('mousemove', (e) => {
    if (isDragging && currentModal) {
        const modalContent = currentModal.querySelector('.modal-content');
        modalContent.style.position = 'absolute'; // Set position to absolute
        // Update modal position
        modalContent.style.left = `${e.clientX - offset.x}px`;
        modalContent.style.top = `${e.clientY - offset.y}px`;
    }
});

// Reset dragging state on mouse up
document.addEventListener('mouseup', () => {
    isDragging = false; // Reset dragging flag
    currentModal = null; // Clear current modal reference
    document.body.style.cursor = 'default'; // Reset cursor
});