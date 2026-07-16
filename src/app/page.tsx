import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>Portfolio</div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <a href="#contact" className={styles.btnNav}>Let's Talk</a>
      </nav>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title} style={{ fontWeight: 700 }}>Mide_xol</h1>
          <p className={styles.greeting}>Olamide Okunola | Data Analyst & Software Developer</p>
          <p className={styles.description}>
            Transforming complex data into actionable insights and building robust, scalable software solutions.
          </p>
          <div className={styles.heroActions}>
            <a href="#projects" className={styles.btnPrimary}>View Portfolio</a>
          </div>
        </section>

        {/* About Section */}
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
            <div className={styles.aboutImage} style={{ padding: 0, overflow: 'hidden' }}>
              <img src="https://github.com/Mide_xol.png" alt="Olamide Okunola" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* Services / Skills Section */}
        <section id="services" className={styles.section}>
          <h2 className={styles.sectionTitle}>Services & Skills</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Data Analysis & Visualization</h3>
              <p>Extracting meaningful insights from complex datasets and building interactive dashboards for data-driven decisions.</p>
              <div className={styles.serviceTags}>
                <span className={styles.tag}>Python</span>
                <span className={styles.tag}>SQL</span>
                <span className={styles.tag}>Tableau</span>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <h3>Software Development</h3>
              <p>Architecting and building scalable, reliable applications and APIs to solve real-world problems.</p>
              <div className={styles.serviceTags}>
                <span className={styles.tag}>JavaScript/TS</span>
                <span className={styles.tag}>Python</span>
                <span className={styles.tag}>React/Next.js</span>
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

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Selected Works</h2>
          <div className={styles.projectsGrid}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  [Project Image Placeholder]
                </div>
                <h3>Project Title {item}</h3>
                <p>Web Design / Frontend</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className={styles.footer}>
        <p>© {new Date().getFullYear()} Olamide Okunola. All rights reserved.</p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="mailto:okunolaolamide7@gmail.com">Email</a>
          <a href="https://github.com/Mide_xol" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
