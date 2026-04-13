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
      location: "Kyoto, Japan",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Orbital Museum",
      location: "Berlin, Germany",
      category: "Public",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Azure Skyscape",
      location: "Chicago, USA",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Eco Pavilion",
      location: "Oslo, Norway",
      category: "Sustainable",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1000&auto=format&fit=crop"
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
    // Wrap the card in a Link component
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
           [attachment_0](attachment)
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
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '80px', borderTop: '1px solid #333', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Let's Build Something Iconic</h2>
        <a href="mailto:hello@arch.studio" style={{ fontSize: '1.2rem', color: '#c4a059', borderBottom: '1px solid #c4a059' }}>
          Get in Touch
        </a>
        <p style={{ marginTop: '40px', color: '#666', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Arch.Studio Portfolio. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}




// Scroll down to the .gallery map function
