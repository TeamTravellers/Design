
let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

function handleScroll() {
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const navBar = document.querySelector('.nav-bar');
    const contentSections = document.querySelectorAll('.row .container');

    if (prevScrollPos > currentScrollPos) {
        contentSections.forEach(section => {
            const bounding = section.getBoundingClientRect();

            if (bounding.bottom >= navBar.getBoundingClientRect().height) {
                section.classList.remove('hide');
            }
        });
    } else {
        contentSections.forEach(section => {
            const bounding = section.getBoundingClientRect();

            if (bounding.top <= navBar.getBoundingClientRect().height) {
                section.classList.add('fade-out', 'hide');
            } else {
                section.classList.remove('hide');
            }
        });
    }

    prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', handleScroll);

document.querySelector('.home').addEventListener('click', () => {
    window.location.href = 'main-page.html';
});

document.querySelector('.filter').addEventListener('click', () => {
    // Toggle dropdown menu visibility
    // Replace this with your dropdown menu logic
    console.log('Filter button clicked - Show dropdown menu');
    // Your code to show/hide the dropdown menu goes here
});

document.querySelector('.map').addEventListener('click', () => {
    window.open('map.html', '_blank');
});

document.querySelector('.profile').addEventListener('click', () => {
    window.open('profile.html', '_blank');
});

const offersButton = document.querySelectorAll('.button');
const modal = document.getElementById('offers');
const closeButton = document.querySelector('.close');

offersButton.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

