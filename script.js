const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
let isDropdownOpen = false;

dropdown.addEventListener('click', () => {
    if (isDropdownOpen) {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
    isDropdownOpen = !isDropdownOpen;
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
        dropdownContent.style.display = 'none';
        isDropdownOpen = false;
    }
});