import styles from './page.module.css';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section Redesigned */}
      <div className={styles.heroContainer}>
        <nav className={styles.topNav}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">My Works</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.leftSocials}>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="https://github.com/midexol" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <span className={styles.iam}>I am</span>
            <h1 className={styles.name}>MIDE XOL</h1>
            <span className={styles.subtitle}>Data Analyst / Dev</span>
          </div>
          
          <div className={styles.heroImageContainer}>
            <div className={styles.imageGlow}></div>
            {/* The user will place maki.png in the public folder */}
            <img src="/maki.png" alt="Maki Zenin" className={styles.heroImage} />
          </div>
        </div>

        <div className={styles.bottomStats}>
          <span className={styles.statItem}>Data Driven</span>
          <div className={styles.divider}></div>
          <span className={styles.statItem}>Trustworthy</span>
          <div className={styles.divider}></div>
          <span className={styles.statItem}>Modern Solutions</span>
        </div>
      </div>

      {/* Rest of the page */}
      <main className={styles.contentWrapper}>
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                I am a Data Analyst and Software Developer passionate about solving complex problems through data and code. I specialize in analyzing large datasets to uncover actionable insights and building robust, scalable software solutions.
              </p>
              <p>
                With a strong foundation in data science and software engineering, I bridge the gap between analytics and application development to create impactful, data-driven products.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <h2 className={styles.sectionTitle}>Services & Skills</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Data Analysis & Vis</h3>
              <p>Extracting meaningful insights from complex datasets and building interactive dashboards for data-driven decisions.</p>
              <div className={styles.serviceTags}>
                <span className={styles.tag}>Python</span>
                <span className={styles.tag}>SQL</span>
                <span className={styles.tag}>Tableau</span>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <h3>Software Dev</h3>
              <p>Architecting and building scalable, reliable applications and APIs to solve real-world problems.</p>
              <div className={styles.serviceTags}>
                <span className={styles.tag}>JavaScript/TS</span>
                <span className={styles.tag}>Python</span>
                <span className={styles.tag}>React/Next</span>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <h3>Data Engineering</h3>
              <p>Designing robust data pipelines and architecture to ensure data quality, accessibility, and performance.</p>
              <div className={styles.serviceTags}>
                <span className={styles.tag}>ETL</span>
                <span className={styles.tag}>Databases</span>
                <span className={styles.tag}>Cloud</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Selected Works</h2>
          <div className={styles.projectsGrid}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  [Project Image Placeholder]
                </div>
                <h3>Project Title {item}</h3>
                <p>Data Analysis / Fullstack</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.contentWrapper}>
          <p>© {new Date().getFullYear()} Olamide Okunola. All rights reserved.</p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <a href="mailto:okunolaolamide7@gmail.com">Email</a>
            <a href="https://github.com/midexol" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
