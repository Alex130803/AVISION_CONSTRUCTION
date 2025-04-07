//Dragable
const slider = document.getElementById('portfolio-scroll');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // brže prevlačenje
    slider.scrollLeft = scrollLeft - walk;
  });

//Prozor u slideru

const projectData = {
    project1: {
        title: "Rent a Car Company",
        img: "media/portfolio/CostaMare.png",
        desc: "A simple reservation website with date and location filters.",
        link: "https://example.com/rentacar"
    },
    project2: {
        title: "Sports Management",
        img: "media/portfolio/Electus.png",
        desc: "Showcase website for a sports agency, with team details and media.",
        link: "https://example.com/electus"
    },
    project3: {
        title: "Restaurant Website",
        img: "media/restaurant.png",
        desc: "Landing page for a restaurant with menu, booking, and reviews.",
        link: "https://example.com/restaurant"
    },
    project4: {
        title: "Real Estate",
        img: "media/realestate.png",
        desc: "Responsive listing platform for high-end real estate properties.",
        link: "https://example.com/realestate"
    }
    };

    const modal = document.getElementById("project-modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const modalLink = document.getElementById("modal-link");

    document.querySelectorAll(".learn-more").forEach(button => {
    button.addEventListener("click", (e) => {
        const card = e.target.closest(".portfolio-card");
        const id = card.getAttribute("data-project");
        const data = projectData[id];

        modalImg.src = data.img;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        modalLink.href = data.link;

        modal.style.display = "flex";
    });
});

document.querySelector(".close-btn").addEventListener("click", () => {
modal.style.display = "none";
});

//white black mode
