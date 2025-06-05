const brandsData = {
    Ferrari: [
      {
        name: "Ferrari 488",
        specs: "3.9L V8 Twin Turbo, 661 hp, 0-60mph in 3.0s",
        price: "$330,000",
        colors: ["Red", "Yellow", "Black"],
        imgSrc: "images/car1.jpg" 
      },
      {
        name: "Ferrari F8",
        specs: "3.9L V8 Twin Turbo, 710 hp, 0-60mph in 2.9s",
        price: "$280,000",
        colors: ["Red", "White", "Blue"],
        imgSrc: "images/car2.jpg"
      },
      {
        name: "Ferrari SF90",
        specs: "4.0L V8 Hybrid, 986 hp, 0-60mph in 2.5s",
        price: "$625,000",
        colors: ["Red", "Grey", "Black"],
        imgSrc: "images/car3.jpg"
      },
      {
        name: "Ferrari Portofino",
        specs: "3.9L V8 Turbo, 591 hp, 0-60mph in 3.5s",
        price: "$215,000",
        colors: ["Red", "Blue", "White"],
        imgSrc: "images/car4.jpg"
      },
      {
        name: "Ferrari Roma",
        specs: "3.9L V8 Twin Turbo, 611 hp, 0-60mph in 3.4s",
        price: "$222,000",
        colors: ["Black", "Silver", "Red"],
        imgSrc: "images/car5.jpg"
      },
      {
        name: "Ferrari LaFerrari",
        specs: "6.3L V12 Hybrid, 950 hp, 0-60mph in 2.4s",
        price: "$1,500,000",
        colors: ["Red", "Yellow"],
        imgSrc: "images/car6.jpg"
      }
    ],
    McLaren: [
      {
        name: "McLaren 720S",
        specs: "4.0L V8 Twin Turbo, 710 hp, 0-60mph in 2.8s",
        price: "$300,000",
        colors: ["White", "Orange", "Black"],
        imgSrc: "images/car7.jpg"
      },
      {
        name: "McLaren GT",
        specs: "4.0L V8 Twin Turbo, 612 hp, 0-60mph in 3.1s",
        price: "$210,000",
        colors: ["Grey", "Orange", "Red"],
        imgSrc: "images/car8.jpg"
      },
      {
        name: "McLaren Artura",
        specs: "3.0L V6 Hybrid, 671 hp, 0-60mph in 3.0s",
        price: "$225,000",
        colors: ["Blue", "White", "Black"],
        imgSrc: "images/car9.jpg"
      },
      {
        name: "McLaren 600LT",
        specs: "3.8L V8 Twin Turbo, 592 hp, 0-60mph in 2.9s",
        price: "$215,000",
        colors: ["Red", "Blue", "Yellow"],
        imgSrc: "images/car11.jpg"
      },
      {
        name: "McLaren P1",
        specs: "3.8L V8 Hybrid, 903 hp, 0-60mph in 2.7s",
        price: "$1,200,000",
        colors: ["Black", "Red"],
        imgSrc: "images/car12.jpg"
      },
      {
        name: "McLaren Sabre",
        specs: "4.0L V8 Twin Turbo, 835 hp, 0-60mph in 2.8s",
        price: "$3,400,000",
        colors: ["Matte Black", "Silver"],
        imgSrc: "images/car13.jpg"
      }
    ],
    Lamborghini: [
      {
        name: "Lamborghini Huracan",
        specs: "5.2L V10, 630 hp, 0-60mph in 2.9s",
        price: "$261,000",
        colors: ["Yellow", "Orange", "Green"],
        imgSrc: "images/car14.jpg"
      },
      {
        name: "Lamborghini Aventador",
        specs: "6.5L V12, 740 hp, 0-60mph in 2.8s",
        price: "$417,000",
        colors: ["Red", "Green", "Black"],
        imgSrc: "images/car15.jpg"
      },
      {
        name: "Lamborghini Urus",
        specs: "4.0L V8 Twin Turbo, 641 hp, 0-60mph in 3.6s",
        price: "$218,000",
        colors: ["White", "Blue", "Black"],
        imgSrc: "images/car16.jpg"
      },
      {
        name: "Lamborghini Sián",
        specs: "6.5L V12 Hybrid, 819 hp, 0-60mph in 2.8s",
        price: "$3,600,000",
        colors: ["Green", "Blue", "Gold"],
        imgSrc: "images/car17.jpg"
      },
      {
        name: "Lamborghini Gallardo",
        specs: "5.2L V10, 562 hp, 0-60mph in 3.4s",
        price: "$200,000",
        colors: ["Orange", "Black", "Grey"],
        imgSrc: "images/car18.jpg"
      },
      {
        name: "Lamborghini Centenario",
        specs: "6.5L V12, 759 hp, 0-60mph in 2.8s",
        price: "$1,750,000",
        colors: ["Black", "Silver"],
        imgSrc: "images/car19.jpg"
      }
    ],
    Porsche: [
      {
        name: "Porsche 911",
        specs: "3.0L Turbo Flat-6, 443 hp, 0-60mph in 3.5s",
        price: "$99,000",
        colors: ["Red", "White", "Black"],
        imgSrc: "images/car20.jpg"
      },
      {
        name: "Porsche 718",
        specs: "2.0L Turbo Flat-4, 300 hp, 0-60mph in 4.8s",
        price: "$62,000",
        colors: ["Blue", "Silver", "Red"],
        imgSrc: "images/car21.jpg"
      },
      {
        name: "Porsche Taycan",
        specs: "Electric, 750 hp, 0-60mph in 3.0s",
        price: "$150,000",
        colors: ["White", "Black", "Green"],
        imgSrc: "images/car22.jpg"
      },
      {
        name: "Porsche Macan",
        specs: "2.0L Turbo I4, 248 hp, 0-60mph in 6.3s",
        price: "$53,000",
        colors: ["Grey", "Red", "White"],
        imgSrc: "images/car23.jpg"
      },
      {
        name: "Porsche Cayenne",
        specs: "3.0L V6 Turbo, 335 hp, 0-60mph in 5.9s",
        price: "$67,500",
        colors: ["Black", "Blue", "Silver"],
        imgSrc: "images/car24.jpg"
      },
      {
        name: "Porsche Panamera",
        specs: "2.9L V6 Turbo, 325 hp, 0-60mph in 5.2s",
        price: "$87,000",
        colors: ["White", "Black", "Red"],
        imgSrc: "images/car25.jpg"
      }
    ],
    Bugatti: [
      {
        name: "Bugatti Chiron",
        specs: "8.0L W16 Quad-Turbo, 1,479 hp, 0-60mph in 2.3s",
        price: "$3,000,000",
        colors: ["Blue", "Black", "Silver"],
        imgSrc: "images/car26.jpg"
      },
      {
        name: "Bugatti Veyron",
        specs: "8.0L W16 Quad-Turbo, 1,001 hp, 0-60mph in 2.5s",
        price: "$1,700,000",
        colors: ["Red", "Blue", "White"],
        imgSrc: "images/car27.jpg"
      },
      {
        name: "Bugatti Divo",
        specs: "8.0L W16 Quad-Turbo, 1,479 hp, 0-60mph in 2.4s",
        price: "$5,800,000",
        colors: ["Purple", "Black"],
        imgSrc: "images/car28.jpg"
      },
      {
        name: "Bugatti Centodieci",
        specs: "8.0L W16 Quad-Turbo, 1,600 hp, 0-60mph in 2.4s",
        price: "$9,000,000",
        colors: ["Gray", "Black"],
        imgSrc: "images/car29.jpg"
      },
      {
        name: "Bugatti La Voiture Noire",
        specs: "8.0L W16 Quad-Turbo, 1,479 hp, One-off",
        price: "$18,700,000",
        colors: ["Black"],
        imgSrc: "images/car30.jpg"
      },
      {
        name: "Bugatti Chiron Super Sport",
        specs: "8.0L W16 Quad-Turbo, 1,577 hp, 0-60mph in 2.3s",
        price: "$3,900,000",
        colors: ["Blue", "White"],
        imgSrc: "images/car31.jpg"
      }
    ],
    AstonMartin: [
      {
        name: "Aston Martin Vantage",
        specs: "4.0L V8 Twin Turbo, 503 hp, 0-60mph in 3.6s",
        price: "$140,000",
        colors: ["Green", "Blue", "Red"],
        imgSrc: "images/car32.jpg"
      },
      {
        name: "Aston Martin DB11",
        specs: "5.2L V12 Twin Turbo, 630 hp, 0-60mph in 3.9s",
        price: "$205,000",
        colors: ["Silver", "Black", "White"],
        imgSrc: "images/car33.jpg"
      },
      {
        name: "Aston Martin DBS Superleggera",
        specs: "5.2L V12 Twin Turbo, 715 hp, 0-60mph in 3.4s",
        price: "$316,000",
        colors: ["Red", "Grey", "Blue"],
        imgSrc: "images/car34.jpg"
      },
      {
        name: "Aston Martin Valhalla",
        specs: "4.0L V8 Hybrid, 950 hp, 0-60mph in 2.5s",
        price: "TBA",
        colors: ["Black", "Yellow"],
        imgSrc: "images/car35.jpg"
      },
      {
        name: "Aston Martin DBX",
        specs: "4.0L V8 Twin Turbo, 542 hp, 0-60mph in 4.3s",
        price: "$179,000",
        colors: ["White", "Blue", "Green"],
        imgSrc: "images/car36.jpg"
      },
      {
        name: "Aston Martin One-77",
        specs: "7.3L V12, 750 hp, 0-60mph in 3.5s",
        price: "$1,400,000",
        colors: ["Silver", "Black"],
        imgSrc: "images/car37.jpg"
      }
    ],
    Koenigsegg: [
      {
        name: "Koenigsegg Agera RS",
        specs: "5.0L V8 Twin Turbo, 1,160 hp, 0-60mph in 2.9s",
        price: "$2,500,000",
        colors: ["Orange", "Black", "Silver"],
        imgSrc: "images/car38.jpg"
      },
      {
        name: "Koenigsegg Jesko",
        specs: "5.0L V8 Twin Turbo, 1,280 hp, 0-60mph in 2.5s",
        price: "$3,000,000",
        colors: ["Red", "Blue", "Black"],
        imgSrc: "images/car39.jpg"
      },
      {
        name: "Koenigsegg Regera",
        specs: "5.0L V8 Hybrid, 1,500 hp, 0-60mph in 2.8s",
        price: "$2,100,000",
        colors: ["White", "Silver"],
        imgSrc: "images/car40.jpg"
      },
      {
        name: "Koenigsegg Gemera",
        specs: "2.0L Twin-Turbo 3-Cyl Hybrid, 1,700 hp, 0-60mph in 1.9s",
        price: "$1,700,000",
        colors: ["Green", "Orange"],
        imgSrc: "images/car41.jpg"
      },
      {
        name: "Koenigsegg CCX",
        specs: "4.7L V8, 806 hp, 0-60mph in 3.2s",
        price: "$650,000",
        colors: ["Black", "Silver"],
        imgSrc: "images/car42.jpg"
      },
      {
        name: "Koenigsegg CC850",
        specs: "5.0L V8 Twin Turbo, 1,247 hp, 0-60mph in 2.7s",
        price: "$3,800,000",
        colors: ["Blue", "Red"],
        imgSrc: "images/car43.jpg"
      }
    ]
  };
  function createElement(type, attributes = {}, ...children) {
    const el = document.createElement(type);
    for (const attr in attributes) {
      if (attr === 'className') el.className = attributes[attr];
      else if (attr === 'innerHTML') el.innerHTML = attributes[attr];
      else el.setAttribute(attr, attributes[attr]);
    }
    children.forEach(child => {
      if (child) el.appendChild(child);
    });
    return el;
  }
  function setupMenuToggle() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.innerWidth <= 700) {
      if (!document.getElementById('hamburger')) {
        const hamburger = createElement('div', {id: 'hamburger', className: 'hamburger'}, document.createTextNode('☰'));
        hamburger.onclick = () => {
          navbar.classList.toggle('active');
        };
        navbar.parentNode.insertBefore(hamburger, navbar);
      }
    } else {
      const hamburger = document.getElementById('hamburger');
      if (hamburger) hamburger.remove();
      navbar.classList.remove('active');
    }
  }
  function showCarModal(car) {
    const existingModal = document.getElementById('car-modal');
    if (existingModal) existingModal.remove();
    const modalBg = createElement('div', {id: 'car-modal', className: 'modal-bg'});
    const modalContent = createElement('div', {className: 'modal-content'});
    const closeBtn = createElement('span', {className: 'close-btn'}, document.createTextNode('×'));
    closeBtn.onclick = () => modalBg.remove();
    const title = createElement('h3', {innerHTML: car.name});
    const specs = createElement('p', {innerHTML: `<strong>Specs:</strong> ${car.specs}`});
    const price = createElement('p', {innerHTML: `<strong>Price:</strong> ${car.price}`});
    const colors = createElement('p', {innerHTML: `<strong>Available Colors:</strong> ${car.colors.join(', ')}`});
    const img = createElement('img', {src: car.imgSrc || '', alt: car.name, className: 'modal-img'});
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(img);
    modalContent.appendChild(specs);
    modalContent.appendChild(price);
    modalContent.appendChild(colors);
    modalBg.appendChild(modalContent);
    document.body.appendChild(modalBg);
  }
  function renderGallery() {
    const gallery = document.getElementById('car-gallery');
    if (!gallery) return;
    gallery.innerHTML = '';
    for (const brand in brandsData) {
      const brandSection = createElement('section', {className: 'brand-section'});
      const brandHeader = createElement('h3', {innerHTML: brand});
      brandSection.appendChild(brandHeader);
      const carsDiv = createElement('div', {className: 'cars-container'});
      brandsData[brand].forEach(car => {
        const carDiv = createElement('div', {className: 'car-item'});
        const carImg = createElement('img', {
          src: car.imgSrc || '',
          alt: car.name,
          title: car.name
        });
        carImg.onclick = () => showCarModal(car);
        carDiv.appendChild(carImg);
        const carName = createElement('p', {innerHTML: car.name});
        carDiv.appendChild(carName);
        carsDiv.appendChild(carDiv);
      });
      brandSection.appendChild(carsDiv);
      gallery.appendChild(brandSection);
    }
  }
  function renderBrandPage(brand) {
    const brandDiv = document.getElementById(`${brand.toLowerCase()}-cars`);
    if (!brandDiv || !brandsData[brand]) return;
    brandDiv.innerHTML = '';
    const carsDiv = createElement('div', {className: 'cars-container'});
    brandsData[brand].forEach(car => {
      const carDiv = createElement('div', {className: 'car-item'});
      const carImg = createElement('img', {
        src: car.imgSrc || '',
        alt: car.name,
        title: car.name
      });
      carImg.onclick = () => showCarModal(car);
      carDiv.appendChild(carImg);
      const carName = createElement('p', {innerHTML: car.name});
      carDiv.appendChild(carName);
      carsDiv.appendChild(carDiv);
    });
    brandDiv.appendChild(carsDiv);
  }
  function renderBrandsList() {
    const brandsListDiv = document.getElementById('brands-list');
    if (!brandsListDiv) return;
    brandsListDiv.innerHTML = '';
    const ul = createElement('ul', {className: 'brands-list-ul'});
    for (const brand in brandsData) {
      const li = createElement('li');
      const link = createElement('a', {href: `${brand.toLowerCase()}.html`, innerHTML: brand});
      li.appendChild(link);
      ul.appendChild(li);
    }
    brandsListDiv.appendChild(ul);
  }

  function renderLatestPosts() {
    const postsDiv = document.getElementById('latest-posts');
    if (!postsDiv) return;
    postsDiv.innerHTML = '';
    const posts = [
      {title: "New Ferrari SF90 Stradale Review", content: "Experience the hybrid beast from Ferrari blending power with luxury."},
      {title: "McLaren Launches Artura", content: "A new hybrid supercar setting standards for performance and technology."},
      {title: "Lamborghini Urus: The Super SUV", content: "Luxury meets utility in Lamborghini’s sporty SUV."},
    ];
    posts.forEach(post => {
      const postDiv = createElement('div', {className: 'post'});
      const title = createElement('h3', {innerHTML: post.title});
      const content = createElement('p', {innerHTML: post.content});
      postDiv.appendChild(title);
      postDiv.appendChild(content);
      postsDiv.appendChild(postDiv);
    });
  }
  function renderFAQ() {
    const faqDiv = document.getElementById('faq-content');
    if (!faqDiv) return;
    faqDiv.innerHTML = '';
    const faqs = [
      {question: "How do I purchase a car?", answer: "Use our contact page to reach out and we will guide you through the process."},
      {question: "Do you offer customization services?", answer: "We showcase custom builds but we do not offer customization ourselves."},
      {question: "Are the prices fixed?", answer: "Prices may vary depending on market and availability."},
      {question: "Can I submit my own car?", answer: "Yes! Contact us for submission details."},
    ];
    faqs.forEach(faq => {
      const question = createElement('h4', {innerHTML: faq.question});
      const answer = createElement('p', {innerHTML: faq.answer});
      faqDiv.appendChild(question);
      faqDiv.appendChild(answer);
    });
  }
  function renderCarListings() {
    const listingsDiv = document.getElementById('car-listings');
    if (!listingsDiv) return;
    listingsDiv.innerHTML = '';
    for (const brand in brandsData) {
      const brandSection = createElement('section', {className: 'brand-section'});
      const brandHeader = createElement('h3', {innerHTML: brand});
      brandSection.appendChild(brandHeader);

      const ul = createElement('ul', {className: 'car-listings-ul'});
      brandsData[brand].forEach(car => {
        const li = createElement('li', {innerHTML: `${car.name} - ${car.price}`});
        ul.appendChild(li);
      });
      brandSection.appendChild(ul);
      listingsDiv.appendChild(brandSection);
    }
  }
  window.onload = () => {
    setupMenuToggle();
    window.addEventListener('resize', setupMenuToggle);
  
    if (document.getElementById('car-gallery')) {
      renderGallery();
    }
  
    if (document.getElementById('brands-list')) {
      renderBrandsList();
    }
  
    if (document.getElementById('latest-posts')) {
      renderLatestPosts();
    }

    if (document.getElementById('faq-content')) {
      renderFAQ();
    }
    if (document.getElementById('car-listings')) {
      renderCarListings();
    }
  
    if (typeof brandName === 'string') {
      renderBrandPage(brandName);
    }
  };