import Link from 'next/link';
import Navbar from '../../../components/Navbar'; // Adjust path based on your folder structure
import styles from './project.module.css';

// SIMULATED DATABASE (In a real app, fetch this from an API/CMS)
const projectsData = [
  {
    id: 1,
    title: "The Vertex House",
    location: "Accra, Ghana",
    year: "2023",
    area: "450 sqm",
    client: "Private Commission",
    description: "Located in the quiet hills of Kyoto, the Vertex House explores the relationship between sharp geometric forms and organic nature. The structure is composed of reinforced concrete and blackened timber (Shou Sugi Ban), creating a silhouette that changes with the moving sun. The interior features an open courtyard that acts as the lung of the house, bringing rain, wind, and diffused light directly into the central living spaces.",
    heroImage: "est-2.jpg",
    gallery: [
      "/apt-1.jpg",
      "/kit-2.jpg",
      
    ]
  },
  {
    id: 2,
    title: "Modern Estate",
    location: "Accra, Ghana",
    year: "2022",
    area: "12,000 sqm",
    client: "Residentail House",
    description: "Designed to mimic the curvature of planetary orbital paths, this public institution reimagines how we interact with exhibition spaces. The museum uses a continuous spiraling ramp system that completely eliminates stairs, making the entire building universally accessible. The kinetic facade is clad in 4,000 individual recycled aluminum panels that adjust their angles based on solar positioning, dynamically reflecting the changing Berlin sky.",
    heroImage: "/est-3.jpg",
    gallery: [
      "/apt-h-2",
      "/kit-2.jpg",
      
      
    ]
  },
  {
    id: 3,
    title: "Cantonments Luxury Oasis",
    location: "Acrra, Ghana",
    year: "2024",
    area: "85,000 sqm",
    client: "Residentail House",
    description: "Rising 65 stories above the Chicago river, the Azure Skyscape is a mixed-use commercial tower redefining the modern workplace. We moved away from the traditional glass box, instead opting for a deeply recessed terracotta mullion system that provides passive shading while paying homage to Chicago's historic masonry architecture. The tower features a sky-garden at the 40th floor, introducing a micro-climate of midwestern flora into the vertical skyline.",
    heroImage: "/est-4.jpg",
    gallery: [
      "/kit-1.jpg",
      "/apt-h-3.jpg",
    
     
    ]
  },
  {
    id: 4,
    title: "East Legon Executive Suite",
    location: "Accra, Ghana",
    year: "2021",
    area: "850 sqm",
    client: "Nordic Forestry Commission",
    description: "The Eco Pavilion serves as an educational center for sustainable forestry. Constructed entirely from locally sourced cross-laminated timber (CLT) and engineered without a single steel structural element, the building is carbon-negative. The pavilion is designed to eventually decompose and return to the earth at the end of its 100-year lifecycle. Its massive overhanging eaves protect the interior from harsh Nordic winters while maximizing low-angle winter sunlight.",
    heroImage:  "/est-6.jpg",
    gallery: [
    
      "/apt-h-1.jpg",
      "/kit-2.jpg",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
    ]
  }
];


// 1. Change the function to be async
export default async function ProjectDetail({ params }) {
  
  // 2. Unpack the params by awaiting them
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 3. Now use the unwrapped id to find your project
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className={styles.container} style={{padding: '150px', textAlign: 'center'}}>
        <h1>Project Not Found</h1>
        <Link href="/" className={styles.backLink}>Return Home</Link>
      </div>
    );
  }

  return (
    <main className={styles.container}>
      {/* ... the rest of your JSX remains exactly the same ... */}
       <Navbar />
      
      <header className={styles.header}>
        <div className={styles.headerText}>
          <Link href="/" className={styles.backLink}>← Back to Works</Link>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.location}>{project.location}</p>
        </div>
      </header>
      
      <section className={styles.heroImageSection}>
        <img src={project.heroImage} alt={project.title} className={styles.heroImg} />
      </section>

      {/* PROJECT SPECS GRID */}
      <section className={styles.detailsGrid}>
        <div className={styles.specColumn}>
          <div className={styles.specItem}>
            <span className={styles.label}>Year</span>
            <span className={styles.value}>{project.year || "2024"}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.label}>Area</span>
            <span className={styles.value}>{project.area || "N/A"}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.label}>Client</span>
            <span className={styles.value}>{project.client || "Confidential"}</span>
          </div>
        </div>

        <div className={styles.descriptionColumn}>
          <h3 className={styles.conceptTitle}>The Concept</h3>
          <p className={styles.description}>{project.description}</p>
        </div>
      </section>

      {/* IMAGE GALLERY (Masonry Style) */}
      <section className={styles.gallerySection}>
        [attachment_0](attachment)
        <h3 className={styles.galleryTitle}>Visual Narrative</h3>
        <div className={styles.galleryGrid}>
          {project.gallery && project.gallery.map((imgUrl, index) => (
            <div key={index} className={styles.galleryItem}>
              <img src={`${imgUrl}?auto=format&fit=crop&w=800&q=80`} alt={`Detail ${index}`} />
            </div>
          ))}
        </div>
      </section>

      {/* NEXT PROJECT NAVIGATION */}
      <footer className={styles.footerNav}>
        <Link href={`/projects/${project.id === 4 ? 1 : project.id + 1}`} className={styles.nextProject}>
          <span>Next Project</span>
          <span className={styles.arrow}>→</span>
        </Link>
      </footer>

    </main>
  );
}