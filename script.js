 <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="styles.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <title>RIFT AGENCY</title>
    </head>
    <body>
      <nav class="section__container nav__container">
        <img src="RIFT AGENCY.png" class="nav__logo" alt="RIFT AGENCY Logo" />
        <ul class="nav__links">
          <li class="link"><a href="#home">Home</a></li>
          <li class="link"><a href="#contact">Contact</a></li>
          <li class="link"><a href="#services">Services</a></li>
          <li class="link"><a href="#faqs">Faqs</a></li>
        </ul>
        <button class="btn">Contact</button>
      </nav>

      <header class="section__container header__container" id="home">
        <h1 class="section__header">
          Create fast websites,<br />
          in no <span>time.</span>
        </h1>
        <p>
          Looking to create a website quickly and easily? Our website building
          service offers fast turnaround times and streamlined design options,
          allowing you to get online in no time.
        </p>
        <button class="btn">Contact us</button>
      </header>

      <section class="section__container service__container" id="services">
        <p class="section__subheader">Our Services</p>
        <h2 class="section__header">We Help to build startup websites</h2>
        <div class="service__grid">
          <!-- Your service cards content remains unchanged -->
        </div>
      </section>

      <section class="section__container template__container" id="templates">
        <div class="template__content">
          <p class="section__subheader">Our Templates</p>
          <h2 class="section__header">Powerful UI kit templates for webflow</h2>
          <p class="description">
            Hosting services like Bluehost, HostGator, or SiteGround provide the
            server space and technology needed to keep your website online.
          </p>
          <button class="btn">Learn more</button>
        </div>
        <div class="template__image">
          <img src="assets/template.jpg" alt="template" />
        </div>
      </section>

      <section class="section__container client__container" id="testimonials">
        <p class="section__subheader">Testimonials</p>
        <h2 class="section__header">What clients say about us</h2>
        <div class="client__grid">
          <!-- Your client cards content remains unchanged -->
        </div>
      </section>

      <section class="section__container question__container" id="faqs">
        <p class="section__subheader">Have Questions?</p>
        <h2 class="section__header">Frequently asked questions</h2>
        <div class="question__accordion">
          <!-- Your FAQ boxes content remains unchanged -->
        </div>
      </section>

      <footer class="section__container footer__container">
        <div class="footer__grid">
          <div class="footer__col">
            <h4>WDM</h4>
            <p>
              <span><i class="ri-mail-fill"></i></span> Sahilhede24@gmail.com
            </p>
            <p>          
              <span><i class="ri-discord-fill"></i></span> @Sahilhede69
            </p>
          </div>
          <div class="footer__col">
            <h4>About</h4>
            <p><a href="#home">Home</a></p>
            <p><a href="#contact">Contact</a></p>
            <p><a href="#services">Services</a></p>
          </div>
          <div class="footer__col">
            <h4>Features</h4>
            <p><a href="#privacy">Privacy Policy</a></p>
            <p><a href="#terms">Terms & Conditions</a></p>
          </div>
          <div class="footer__col">
            <h4>Contact</h4>
            <p><a href="#department">Department</a></p>
            <p><a href="#media">Media</a></p>
            <p><a href="#support">Support</a></p>
          </div>
        </div>
      </footer>
      <div class="section__container footer__bar">
        <p>Copyright © 2024 Rift Agency. All rights reserved.</p>
        <div class="socials">
          <span><i class="ri-twitter-fill"></i></span>
          <span><i class="ri-instagram-line"></i></span>
          <span><i class="ri-discord-line"></i></span>
        </div>
      </div>

      <script>
        const questionBox = document.getElementsByClassName("question__box");

        for (let i = 0; i < questionBox.length; i++) {
          questionBox[i].addEventListener("click", function () {
            this.classList.toggle("active");
          });
        }
      </script>
    </body>
  </html>
.footer a {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  background-color: #333;
}

.footer a:hover {
  background-color: #555;
        }
        const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in'); // Add your fade-in class
      observer.unobserve(entry.target);
    }
  });
});

const testimonialCards = document.querySelectorAll('.client__card');

testimonialCards.forEach(card => {
  observer.observe(card);
});
// Add this script just before the closing </body> tag in your HTML

<script>
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.5 });

  const testimonialsSection = document.querySelector('.client__container');
  const testimonialsCards = document.querySelectorAll('.client__card');

  testimonialsCards.forEach(card => {
    observer.observe(card);
  });
</script>

       <script>
  // This script will toggle the 'active' class on the question boxes in the FAQ section
  const questionBoxes = document.querySelectorAll('.question__box');

  questionBoxes.forEach(box => {
    const title = box.querySelector('.title');

    title.addEventListener('click', () => {
      // Toggle the 'active' class on the box
      box.classList.toggle('active');

      // Optional: Close other boxes when one is opened
      questionBoxes.forEach(otherBox => {
        if (otherBox !== box && otherBox.classList.contains('active')) {
          otherBox.classList.remove('active');
        }
      });
    });
  });
</script>

