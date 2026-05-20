const services = [
  { num: "01", name: "Microneedling", desc: "FDA-cleared SkinPen microneedling to stimulate collagen and address acne scarring, fine lines, texture, and tone.", price: "From $250" },
  { num: "02", name: "Chemical Peels", desc: "Medical-grade peels that penetrate medium to deep to combat aging, enhance collagen stimulation and cell turnover.", price: "From $150" },
  { num: "03", name: "Dermaplaning", desc: "Precise exfoliation removing dead skin cells and peach fuzz, opening pores for deeper product absorption.", price: "From $120" },
  { num: "04", name: "Toxin Treatments", desc: "Targeted injections for frown lines, wrinkles, jaw slimming, and teeth-grinding relief. Natural, refreshed results.", price: "From $10/unit" },
  { num: "05", name: "Wellness Injections", desc: "Biotin injections to support hair growth, prevent loss, and promote skin and nail health from within.", price: "From $80" },
  { num: "06", name: "Custom Facials", desc: "Personalized facial treatments designed around your skin's unique needs — relaxing, restorative, and results-driven.", price: "From $130" },
];

const steps = [
  { n: "1", title: "Consultation", desc: "We assess your skin, discuss your concerns and goals, and design a personalized treatment plan." },
  { n: "2", title: "Treatment", desc: "Your chosen treatment is performed with clinical precision in a relaxing, boutique environment." },
  { n: "3", title: "Aftercare", desc: "You receive a tailored aftercare plan and product recommendations to maximize your results." },
  { n: "4", title: "Results", desc: "Watch your skin transform. We track progress and adjust your plan as your skin evolves." },
];

const testimonials = [
  { text: "Olga is incredibly knowledgeable. My skin has never looked better — the microneedling series completely transformed my texture and scars.", author: "Sarah M., North Vancouver" },
  { text: "Such a welcoming space. I felt comfortable and cared for the whole time. The chemical peel results were visible within days.", author: "Jessica T., Vancouver" },
  { text: "I've been to many clinics and Elevate is the best. Olga takes the time to truly understand your skin. Worth every penny.", author: "Natalie K., West Vancouver" },
];

const marqueeItems = ["Microneedling", "Chemical Peels", "Dermaplaning", "Toxin Treatments", "Wellness Injections", "Custom Facials", "Skin Consultations", "North Vancouver"];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">Elevate Skin Lab</a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#booking" className="nav-book">Book Now</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <span className="hero-eyebrow">North Vancouver · Est. 2022</span>
          <h1 className="hero-title">
            Skin that <em>glows</em><br />from within
          </h1>
          <p className="hero-body">
            Advanced clinical treatments tailored to your unique skin — delivered with a warm, personal touch in the heart of North Vancouver.
          </p>
          <div className="hero-cta">
            <a href="#booking" className="btn-primary">Book a Treatment</a>
            <a href="#services" className="btn-ghost">View Services</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-placeholder">
            <span className="hero-img-label">Your photo here</span>
          </div>
          <div className="hero-stat-bar">
            {[["500+", "Happy Clients"], ["5★", "Avg. Rating"], ["8+", "Treatments"]].map(([num, label]) => (
              <div key={label} className="stat">
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="marquee-dot">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="intro" id="about">
        <div className="intro-image">
          <div className="intro-image-inner">
            <div className="intro-image-text">ESL</div>
          </div>
        </div>
        <div>
          <span className="section-label">About Olga</span>
          <h2 className="section-title">Science-backed<br />skin care, <em>elevated</em></h2>
          <div className="divider" />
          <p className="section-body">With a passion for skin health and a clinical approach to aesthetics, I bring advanced treatments to a warm, boutique studio environment. Every service is customized — because no two complexions are the same.</p>
          <p className="section-body">I believe great skin isn&apos;t a luxury. It&apos;s achievable with the right treatments, the right products, and a practitioner who genuinely cares.</p>
          <a href="#booking" className="btn-primary">Meet Olga &amp; Book</a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-header">
          <div>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our <em>treatments</em></h2>
          </div>
          <a href="#booking" className="btn-ghost">View all services →</a>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.num} className="service-card">
              <span className="service-num">{s.num}</span>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <span className="service-tag">{s.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div className="process-header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Your path to <em>better skin</em></h2>
        </div>
        <div className="process-steps">
          {steps.map((s) => (
            <div key={s.n} className="process-step">
              <div className="step-circle">{s.n}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testimonials-header">
          <span className="section-label">Client Love</span>
          <h2 className="section-title">What our clients say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.author} className="testimonial-card">
              <span className="stars">★★★★★</span>
              <span className="quote-mark">&ldquo;</span>
              <p className="testimonial-text">{t.text}</p>
              <span className="testimonial-author">— {t.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section className="booking" id="booking">
        <div className="booking-left">
          <span className="section-label">Ready to Begin?</span>
          <h2 className="section-title">Book your<br /><em>consultation</em></h2>
          <div className="divider" />
          <p className="section-body">Your first consultation is complimentary. We&apos;ll assess your skin, answer every question, and build a plan that actually works for you.</p>
          <div className="booking-info">
            {[
              { icon: "📍", label: "Location", value: "North Vancouver, BC" },
              { icon: "🕐", label: "Hours", value: "Tue–Sat: 10am – 7pm" },
              { icon: "📸", label: "Instagram", value: "@elevateskin.lab" },
            ].map((item) => (
              <div key={item.label} className="info-item">
                <div className="info-icon">{item.icon}</div>
                <div>
                  <div className="info-label">{item.label}</div>
                  <div className="info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="booking-right">
          <form className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input className="form-input" type="text" placeholder="Emma" />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input className="form-input" type="text" placeholder="Wilson" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" placeholder="emma@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input className="form-input" type="tel" placeholder="+1 (604) 000-0000" />
            </div>
            <div className="form-group">
              <label className="form-label">Treatment of Interest</label>
              <select className="form-select">
                <option>Microneedling</option>
                <option>Chemical Peel</option>
                <option>Dermaplaning</option>
                <option>Toxin Treatment</option>
                <option>Wellness Injection</option>
                <option>Custom Facial</option>
                <option>Not sure — book a consult</option>
              </select>
            </div>
            <button type="submit" className="btn-submit">Request Appointment</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-top">
          <div>
            <span className="footer-logo">Elevate Skin Lab</span>
            <p className="footer-tagline">Advanced clinical skin treatments in a warm, boutique studio. North Vancouver, BC.</p>
          </div>
          <div>
            <div className="footer-col-title">Treatments</div>
            <ul className="footer-links">
              {["Microneedling", "Chemical Peels", "Dermaplaning", "Toxin Treatments", "Wellness Injections"].map((t) => (
                <li key={t}><a href="#">{t}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Studio</div>
            <ul className="footer-links">
              {["About Olga", "Before & After", "Client Reviews", "Gift Cards"].map((t) => (
                <li key={t}><a href="#">{t}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              {["Book Online", "North Vancouver, BC", "@elevateskin.lab", "hello@elevateskinlab.ca"].map((t) => (
                <li key={t}><a href="#">{t}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2025 Elevate Skin Lab. All rights reserved.</span>
          <div className="footer-social">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Facebook</a>
          </div>
        </div>
      </footer>
    </>
  );
}
