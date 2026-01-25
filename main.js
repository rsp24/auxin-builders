// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');

function openMobileMenu() {
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
}

if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
}

// Close menu when a link is clicked
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Project Modals
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLoc = document.getElementById('modal-loc');
const modalYear = document.getElementById('modal-year');

const projectDetails = {
    1: {
        title: "Modern Hillside Villa",
        img: "images/project_thumb_1.png",
        desc: "A stunning residential villa built on a hillside, featuring panoramic views, sustainable materials, and a contemporary open-plan design. This 3,500 sq ft home integrates seamlessly with the natural landscape.",
        loc: "Munnar, Kerala",
        year: "2023"
    },
    2: {
        title: "Skyline Corporate Tower",
        img: "images/project_thumb_2.png",
        desc: "A state-of-the-art commercial complex in the heart of the city. This 15-story building features a double-skin glass facade for energy efficiency and modern office spaces designed for productivity.",
        loc: "Kochi, Kerala",
        year: "2022"
    },
    3: {
        title: "Urban Luxury Interiors",
        img: "images/project_thumb_3.png",
        desc: "Complete interior renovation of a luxury apartment. We used premium teak wood, imported marble, and smart home automation to create a sophisticated living space.",
        loc: "Calicut, Kerala",
        year: "2024"
    },
    4: {
        title: "Logistics Hub",
        img: "images/project_thumb_4.png",
        desc: "A large-scale industrial warehouse with advanced steel structural framing. Built for high-volume logistics with polished concrete flooring and automated loading docks.",
        loc: "Kannur, Kerala",
        year: "2021"
    },
    5: {
        title: "Green Eco Home",
        img: "images/project_thumb_1.png",
        desc: "A certified green building utilizing solar power, rainwater harvesting, and rammed earth walls. A perfect example of sustainable living without compromising on modern comforts.",
        loc: "Wayanad, Kerala",
        year: "2023"
    },
    6: {
        title: "Community Center",
        img: "images/project_thumb_2.png",
        desc: "A public community center designed for versatility. Includes a multi-purpose hall, library, and outdoor recreational areas. Built with locally sourced materials.",
        loc: "Kasargod, Kerala",
        year: "2022"
    }
};

function openModal(projectId) {
    const project = projectDetails[projectId];
    if (project) {
        modalImg.src = project.img;
        modalTitle.textContent = project.title;
        modalDesc.textContent = project.desc;
        modalLoc.textContent = project.loc;
        modalYear.textContent = project.year;

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    // Clear content after animation
    setTimeout(() => {
        modalImg.src = "";
    }, 300);
}

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openModal(id);
    });
});

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send data to a backend
        alert('Thank you for your message! We will get back to you shortly.');
        contactForm.reset();
    });
}
