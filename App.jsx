// App.jsx — My Student House Replica
// Split: index.html (entry) | App.jsx (components) | styles.css (all styling)

const { useState } = React;

/* ── DATA ─────────────────────────────────── */
const CITIES = [
  { name: "Cape Town", props: "12+", emoji: "🌊", tag: "NSFAS Accredited" },
  { name: "Johannesburg", props: "8+", emoji: "🏙️", tag: "NSFAS Accredited" },
  { name: "Pretoria", props: "6+", emoji: "🏛️", tag: "NSFAS Accredited" },
  { name: "Bellville", props: "5+", emoji: "🏘️", tag: "Available Now" },
  { name: "Parow", props: "4+", emoji: "🌿", tag: "Available Now" },
  { name: "Durbanville", props: "3+", emoji: "🌄", tag: "Limited Spots" },
];

const FEATURES = [
  { icon: "🔒", title: "Safe & Secure", desc: "24/7 security, controlled access, CCTV monitoring at all our properties nationwide." },
  { icon: "📶", title: "High-Speed WiFi", desc: "Uncapped fibre internet in every room — perfect for online learning and streaming." },
  { icon: "👨‍👩‍👧", title: "Dedicated House Parents", desc: "On-site support staff who care about your wellbeing, not just the building." },
  { icon: "✅", title: "NSFAS Accredited", desc: "All properties are NSFAS accredited — we handle the admin so you can focus on studying." },
];

const AMENITIES = [
  { icon: "🛏️", name: "Furnished Rooms" },
  { icon: "📶", name: "Fibre WiFi" },
  { icon: "🍳", name: "Kitchen Access" },
  { icon: "🅿️", name: "Free Parking" },
  { icon: "🧺", name: "Laundry" },
  { icon: "📚", name: "Study Areas" },
  { icon: "🛡️", name: "24/7 Security" },
  { icon: "🚿", name: "Private Bathrooms" },
];

const TESTIMONIALS = [
  {
    stars: "★★★★★",
    text: "CampusNest gave me more than a room — they gave me a home. The house parents are amazing and I always felt safe.",
    name: "Lerato M.",
    uni: "UWC, Cape Town",
    initials: "LM",
  },
  {
    stars: "★★★★★",
    text: "The NSFAS process was so smooth. I didn't have to stress about accommodation at all during registration.",
    name: "Sipho D.",
    uni: "CPUT, Bellville",
    initials: "SD",
  },
  {
    stars: "★★★★★",
    text: "Clean, affordable, and WiFi that actually works. Finding a place like this is nearly impossible — very grateful.",
    name: "Anika V.",
    uni: "TUT, Pretoria",
    initials: "AV",
  },
];

/* ── COMPONENTS ──────────────────────────── */

function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        CampusNest
        <span className="nav-logo-badge">SA</span>
      </a>
      <ul className="nav-links">
        <li><a href="#cities">Locations</a></li>
        <li><a href="#why">Why Us</a></li>
        <li><a href="#amenities">Amenities</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="mailto:getinfo@mystudenthouse.co.za" className="nav-cta">Find a Room</a></li>
      </ul>
      <span className="nav-phone">📞 +27 21 518 3015</span>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-bg-grid" />
      <div className="hero-content">
        <div className="hero-tag">
          <span className="hero-dot" />
          Nr. 1 Student Accommodation · South Africa
        </div>
        <h1>
          Your <span>Home Away</span><br />From Home
        </h1>
        <p>
          Safe, affordable, NSFAS-accredited student housing across Cape Town,
          Johannesburg, Pretoria and more. 800+ students housed. House parents on-site.
        </p>
        <div className="hero-btns">
          <a href="#cities" className="btn-primary">
            Find Accommodation →
          </a>
          <a href="tel:+27215183015" className="btn-outline">
            📞 Call Us
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">800+</div>
            <div className="hero-stat-label">Students housed</div>
          </div>
          <div>
            <div className="hero-stat-num">30+</div>
            <div className="hero-stat-label">Properties</div>
          </div>
          <div>
            <div className="hero-stat-num">100%</div>
            <div className="hero-stat-label">NSFAS accredited</div>
          </div>
        </div>
      </div>

      <div className="hero-image-col">
        {[0,1,2].map(i => (
          <div key={i} className="hero-img-card" style={i === 0 ? { gridRow: 'span 2' } : {}}>
            <div className="hero-img-placeholder">
              <span className="house-icon">{['🏘️','📚','🛡️'][i]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SearchBar() {
  const [city, setCity] = useState('');
  const [type, setType] = useState('');

  return (
    <div className="search-bar-section">
      <div className="search-bar-wrap">
        <div className="search-field">
          <label>City</label>
          <select value={city} onChange={e => setCity(e.target.value)}>
            <option value="">All cities</option>
            {CITIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
        </div>
        <div className="search-field">
          <label>Room type</label>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="">Any type</option>
            <option>Single room</option>
            <option>Sharing room</option>
            <option>En-suite</option>
          </select>
        </div>
        <div className="search-field">
          <label>University / Campus</label>
          <input type="text" placeholder="e.g. UWC, CPUT, UCT…" />
        </div>
        <button className="search-btn">Search →</button>
      </div>
    </div>
  );
}

function CitiesSection() {
  return (
    <section className="cities-section" id="cities">
      <div className="cities-header">
        <div>
          <span className="section-tag">Browse by Location</span>
          <h2 className="section-title">Find Accommodation<br />Near Your Campus</h2>
        </div>
        <p className="section-sub" style={{ textAlign: 'right', maxWidth: 300 }}>
          Properties across South Africa's top student cities, all within reach of major institutions.
        </p>
      </div>
      <div className="city-grid">
        {CITIES.map(city => (
          <a key={city.name} href="#" className="city-card">
            <div className="city-card-img">
              <span style={{ fontSize: '3.5rem' }}>{city.emoji}</span>
            </div>
            <div className="city-card-body">
              <div className="city-card-name">{city.name}</div>
              <div className="city-card-count">{city.props} properties available</div>
              <div className="city-card-badge">{city.tag}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="why-section" id="why">
      <span className="section-tag">Why CampusNest</span>
      <h2 className="section-title">More Than Just a Room</h2>
      <div className="why-grid">
        <div className="why-features">
          {FEATURES.map(f => (
            <div key={f.title} className="feature-item">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-text">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="why-visual">
          <div className="why-main-card">
            <div className="why-card-num">800+</div>
            <div className="why-card-label">Students successfully housed nationwide</div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem' }}>
              We've experienced 100% year-on-year growth since founding. Our mission is
              a nurturing environment that gives students the best opportunity to study,
              thrive, and make lifelong memories.
            </p>
            <div className="nsfas-badge">
              <span className="nsfas-dot" />
              NSFAS Accredited Properties
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AmenitiesSection() {
  return (
    <section className="amenities-section" id="amenities">
      <span className="section-tag" style={{ background: 'rgba(245,166,35,0.15)', color: '#f5a623' }}>
        What's Included
      </span>
      <h2 className="section-title">Everything You Need</h2>
      <p className="section-sub">Every property comes fully equipped — no hidden costs, no surprises.</p>
      <div className="amenities-grid">
        {AMENITIES.map(a => (
          <div key={a.name} className="amenity-card">
            <div className="amenity-icon">{a.icon}</div>
            <div className="amenity-name">{a.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials">
      <span className="section-tag">Student Reviews</span>
      <h2 className="section-title">What Our Students Say</h2>
      <p className="section-sub">Trusted by students, parents, and institutions across South Africa.</p>
      <div className="testimonials-grid">
        {TESTIMONIALS.map(t => (
          <div key={t.name} className="testimonial-card">
            <div className="testimonial-stars">{t.stars}</div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initials}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-uni">{t.uni}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="cta-section">
      <h2>Ready to Find Your Home?</h2>
      <p>Get in touch with our team and secure your spot before the semester starts.</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="mailto:getinfo@mystudenthouse.co.za" className="btn-dark">
          Apply Now →
        </a>
        <a href="tel:+27215183015" className="btn-dark" style={{ background: 'rgba(13,31,60,0.15)', color: '#0d1f3c', border: '1.5px solid rgba(13,31,60,0.25)' }}>
          📞 +27 21 518 3015
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">CampusNest</div>
          <p className="footer-brand-desc">
            South Africa's leading private student accommodation provider.
            Safe, affordable housing with house parents on-site. 100% owned by M5 Global.
          </p>
          <div className="footer-contact">
            <span>📍 3 Raglan Street, Bellville, South Africa</span>
            <a href="tel:+27215183015">📞 +27 21 518 3015</a>
            <a href="mailto:getinfo@mystudenthouse.co.za">✉️ getinfo@campusNest.co.za</a>
          </div>
        </div>
        <div>
          <div className="footer-heading">Locations</div>
          <ul className="footer-links">
            {CITIES.map(c => <li key={c.name}><a href="#">{c.name}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="footer-heading">Company</div>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Find Accommodation</a></li>
            <li><a href="#">For Landlords</a></li>
            <li><a href="#">NSFAS Info</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-heading">Support</div>
          <ul className="footer-links">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Apply Online</a></li>
            <li><a href="#">Student Portal</a></li>
            <li><a href="#">House Rules</a></li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <span>© 2025 My Student House · M5 Global. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}

/* ── ROOT APP ─────────────────────────────── */
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <CitiesSection />
      <WhySection />
      <AmenitiesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);