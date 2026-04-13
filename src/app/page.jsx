import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '../components/Navbar';
import Link from 'next/link'; 

export default function Home() {
  
  // Data for projects (Simulating a database)
  const projects = [
    {
      id: 1,
      title: "The Vertex House",
      location: "Accra, Ghana",
      category: "Residential",
      image: "/est-2.jpg"
    },
    {
      id: 2,
      title: "Modern Estate",
      location: "Accra, Ghana",
      category: "Residential",
      image: "/est-3.jpg"
    },
    {
      id: 3,
      title: "Cantonments Luxury Oasis",
      location: "Accra, Ghana",
      category: "Commercial",
      image: "/est-4.jpg"
    },
    {
      id: 4,
      title: "East Legon Executive Suite",
      location: "Oslo, Norway",
      category: "Sustainable",
      image: "/est-6.jpg"
    }
  ];

  return (
    <main>
      <Navbar />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        {/* Decorative Grid Lines */}
        <div className={styles.bgLines}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        <div className={styles.heroContent}>
          <h2 className={styles.heroSubtitle}>Architecture & Design</h2>
          
          <h1 className={styles.heroTitle}>
            Form Follows <br />
            <span style={{ color: 'var(--accent-color)' }}>Fiction</span>
          </h1>
        </div>
      </section>

      {/* PHILOSOPHY / ABOUT SECTION */}
      <section id="philosophy" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Philosophy</h2>
        </div>
        <div className={styles.aboutGrid}>
          <p className={styles.aboutText}>
            We believe that architecture is the conscious act of sculpting light, space, and shadow. 
            Our practice spans boundaries between minimalist brutalism and natural integration. We design spaces that don't just exist within environments, but actively respond to them—creating a timeless dialogue between the built form and human emotion.
          </p>
          <div className={styles.aboutImageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
              alt="Architectural conceptual model" 
            />
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section id="work" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Selected Works</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
            A curation of spaces designed to enhance human interaction and structural integrity.
          </p>
        </div>

        <div className={styles.gallery}>
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover'}}
                  />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardLocation}>{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STUDIO / SERVICES */}
      <section id="studio" className={styles.section} style={{ backgroundColor: '#141414' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>The Studio</h2>
        </div>
        
        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <h3>01. Concept Design</h3>
            <p>
              We start with sketches and massing models. We focus on light, shadow, 
              and the contextual relationship between the building and its environment.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3>02. Interior Architecture</h3>
            <p>
              The inside is as important as the outside. We curate materials that 
              age gracefully: raw concrete, natural oak, and brushed steel.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3>03. Urban Masterplanning</h3>
            <p>
              Designing beyond the single building. We strategize large-scale urban developments that foster community, connectivity, and resilience.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3>04. Sustainable Lifecycle</h3>
            <p>
              Integrating passive climate control, material carbon assessments, and closed-loop energy systems from the very first blueprint.
            </p>
          </div>
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section id="awards" className={styles.section}>
         <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recognition</h2>
        </div>
        <div className={styles.awardsList}>
          <div className={styles.awardItem}>
            <span className={styles.awardTitle}>Mies Crown Hall Americas Prize</span>
            <span className={styles.awardOrg}>Finalist</span>
            <span className={styles.awardYear}>2024</span>
          </div>
          <div className={styles.awardItem}>
            <span className={styles.awardTitle}>AIA National Architecture Award</span>
            <span className={styles.awardOrg}>Winner - Public Sector</span>
            <span className={styles.awardYear}>2023</span>
          </div>
          <div className={styles.awardItem}>
            <span className={styles.awardTitle}>Dezeen Awards</span>
            <span className={styles.awardOrg}>Highly Commended - Residential Space</span>
            <span className={styles.awardYear}>2022</span>
          </div>
        </div>
      </section>

      {/* ENHANCED FOOTER */}
      <footer className={styles.footerSection}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <h4>Offices</h4>
            <ul>
              <li>1440 Architectural Blvd.</li>
              <li>Suite 200, Downtown</li>
              <li>Chicago, IL 60601</li>
              <li style={{ marginTop: '10px', color: 'var(--accent-color)' }}>info@arch.studio</li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Socials</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">ArchDaily</a></li>
              <li><a href="#">Dezeen</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Navigation</h4>
            <ul>
              <li><Link href="#philosophy">Philosophy</Link></li>
              <li><Link href="#work">Selected Works</Link></li>
              <li><Link href="#studio">Studio</Link></li>
              <li><Link href="#awards">Recognition</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Newsletter</h4>
            <p style={{ marginBottom: '15px' }}>Receive our quarterly journal on spatial design.</p>
            <form action="">
              <input type="email" placeholder="Email Address" className={styles.newsletterInput} />
              <button type="button" className={styles.newsletterBtn}>Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} ARCH.STUDIO LLC. All Rights Reserved.</p>
          <div className={styles.footerLogo}>ARCH.STUDIO</div>
        </div>
      </footer>
    </main>
  );
}
