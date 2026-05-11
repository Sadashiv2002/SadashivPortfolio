import SadashivProfessional from "./assets/SadashivProfessional.jpeg";
function App() {
  const styles = {
    section: {
      padding: "100px 8%",
      position: "relative",
      zIndex: 2,
    },

    heading: {
      fontSize: "52px",
      fontWeight: "800",
      marginBottom: "20px",
      color: "#00F5D4",
      textAlign: "center",
      letterSpacing: "1px",
    },

    subHeading: {
      textAlign: "center",
      color: "#94A3B8",
      maxWidth: "800px",
      margin: "auto",
      marginBottom: "60px",
      lineHeight: "1.8",
      fontSize: "18px",
    },

    card: {
      background: "rgba(15,23,42,0.7)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "28px",
      padding: "35px",
      backdropFilter: "blur(14px)",
      boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      transition: "0.4s",
      marginBottom: "30px",
    },

    tag: {
      display: "inline-block",
      padding: "10px 18px",
      margin: "6px",
      borderRadius: "30px",
      background: "linear-gradient(135deg,#1E293B,#0F172A)",
      border: "1px solid rgba(255,255,255,0.08)",
      color: "#E2E8F0",
      fontSize: "14px",
      fontWeight: "600",
    },

    buttonPrimary: {
      textDecoration: "none",
      background: "linear-gradient(135deg,#00F5D4,#06B6D4)",
      color: "#020617",
      padding: "15px 34px",
      borderRadius: "16px",
      margin: "10px",
      display: "inline-block",
      fontWeight: "bold",
      fontSize: "16px",
      boxShadow: "0 8px 20px rgba(0,245,212,0.35)",
    },

    buttonSecondary: {
      textDecoration: "none",
      background: "rgba(255,255,255,0.05)",
      color: "white",
      padding: "15px 34px",
      borderRadius: "16px",
      margin: "10px",
      display: "inline-block",
      border: "1px solid rgba(255,255,255,0.1)",
      fontWeight: "bold",
    },
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background:
          "linear-gradient(135deg,#020617,#0F172A,#111827,#020617)",
        color: "white",
        overflowX: "hidden",
      }}
    >
      {/* BACKGROUND GLOW EFFECTS */}
      <div
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          background: "#00F5D4",
          borderRadius: "50%",
          filter: "blur(180px)",
          top: "-100px",
          left: "-100px",
          opacity: "0.15",
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          background: "#9333EA",
          borderRadius: "50%",
          filter: "blur(180px)",
          bottom: "-100px",
          right: "-100px",
          opacity: "0.18",
          zIndex: 0,
        }}
      ></div>

      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "0 8%",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ flex: 1, minWidth: "320px" }}>
          <p
            style={{
              color: "#00F5D4",
              letterSpacing: "5px",
              marginBottom: "20px",
              fontWeight: "600",
            }}
          >
            SOFTWARE ENGINEER • MOBILE APP DEVELOPER
          </p>

          <h1
            style={{
              fontSize: "82px",
              lineHeight: "1.1",
              marginBottom: "25px",
              fontWeight: "800",
            }}
          >
            Building
            <br />
            Modern Digital
            <br />
            Experiences.
          </h1>

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "20px",
              lineHeight: "1.9",
              maxWidth: "700px",
            }}
          >
            Hi, I'm <span style={{ color: "#00F5D4" }}>Sadashiv</span>,
            a Computer Science Engineering student passionate about
            Android Development, React Native applications, Firebase,
            and building scalable user-focused mobile experiences with
            modern UI/UX principles.
          </p>

          <div style={{ marginTop: "40px" }}>
            <a
              href="mailto:sadashiv48952@gmail.com"
              style={styles.buttonPrimary}
            >
              Hire Me
            </a>

            <a
              href="https://github.com/Sadashiv2002"
              target="_blank"
              rel="noreferrer"
              style={styles.buttonSecondary}
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/sadashiv-thakur"
              target="_blank"
              rel="noreferrer"
              style={styles.buttonSecondary}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          style={{
            flex: 1,
            minWidth: "320px",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <div
  style={{
    perspective: "1200px",
  }}
>
  <div
    style={{
      width: "500px",
      height: "600px",
      borderRadius: "30px",
      overflow: "hidden",
      border: "2px solid rgba(255,255,255,0.1)",
      boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
      transform: "rotateY(-12deg) rotateX(6deg)",
      transition: "0.5s ease",
      background: "rgba(255,255,255,0.04)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform =
        "rotateY(0deg) rotateX(0deg) scale(1.03)";
      e.currentTarget.style.boxShadow =
        "0 35px 90px rgba(0,245,212,0.35)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform =
        "rotateY(-12deg) rotateX(6deg)";
      e.currentTarget.style.boxShadow =
        "0 25px 70px rgba(0,0,0,0.6)";
    }}
  >
    <img
      src={SadashivProfessional}
      alt="Sadashiv"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
</div>
      </section>

      {/* ABOUT */}
      <section style={styles.section}>
        <h2 style={styles.heading}>About Me</h2>

        <p style={styles.subHeading}>
          Passionate about building impactful applications and learning
          modern technologies to solve real-world problems through
          software engineering.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width: "100%",
                borderRadius: "20px",
                marginBottom: "25px",
                height: "240px",
                objectFit: "cover",
              }}
            />

            <h2 style={{ color: "#00F5D4", marginBottom: "15px" }}>
              My Journey
            </h2>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "1.9",
              }}
            >
              I am currently pursuing B.Tech in Computer Science and
              Engineering at Lovely Professional University. My
              development journey started with curiosity for mobile
              applications and evolved into creating modern,
              performance-driven, and user-centric applications.
            </p>
          </div>

          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width: "100%",
                borderRadius: "20px",
                marginBottom: "25px",
                height: "240px",
                objectFit: "cover",
              }}
            />

            <h2 style={{ color: "#00F5D4", marginBottom: "15px" }}>
              What I Love
            </h2>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "1.9",
              }}
            >
              I enjoy designing intuitive interfaces, building scalable
              mobile apps, and experimenting with modern technologies
              like React Native, Firebase, and Android development to
              create seamless digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Tech Stack</h2>

        <p style={styles.subHeading}>
          Technologies and tools I use to design, develop, and deploy
          modern applications.
        </p>

        <div style={styles.card}>
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "#00F5D4" }}>Languages</h3>

            <span style={styles.tag}>JavaScript</span>
            <span style={styles.tag}>TypeScript</span>
            <span style={styles.tag}>Java</span>
            <span style={styles.tag}>SQL</span>
            <span style={styles.tag}>HTML/CSS</span>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "#00F5D4" }}>
              Frameworks & Libraries
            </h3>

            <span style={styles.tag}>React Native</span>
            <span style={styles.tag}>Expo</span>
            <span style={styles.tag}>Expo Router</span>
            <span style={styles.tag}>Node.js</span>
            <span style={styles.tag}>Express.js</span>
            <span style={styles.tag}>Firebase</span>
          </div>

          <div>
            <h3 style={{ color: "#00F5D4" }}>Developer Tools</h3>

            <span style={styles.tag}>VS Code</span>
            <span style={styles.tag}>Android Studio</span>
            <span style={styles.tag}>Git & GitHub</span>
            <span style={styles.tag}>Postman</span>
            <span style={styles.tag}>NPM</span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Featured Projects</h2>

        <p style={styles.subHeading}>
          A collection of projects that showcase my skills in mobile
          application development, UI/UX design, and backend
          integration.
        </p>

        {/* PROJECT 1 */}
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
            alt=""
            style={{
              width: "100%",
              borderRadius: "24px",
              marginBottom: "30px",
              height: "320px",
              objectFit: "cover",
            }}
          />

          <h2
            style={{
              color: "#00F5D4",
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Service Booking Application
          </h2>

          <p
            style={{
              color: "#CBD5E1",
              lineHeight: "2",
              fontSize: "18px",
            }}
          >
            Developed a customer-centric Android application designed to
            simplify the process of booking professional home services
            such as plumbers, electricians, and drivers.
            <br />
            <br />
            The application includes secure user authentication,
            provider selection based on ratings, service scheduling,
            booking management, and customer review systems. Users can
            browse verified professionals, compare service quality, and
            seamlessly connect with providers.
            <br />
            <br />
            Implemented backend workflows to store user data, booking
            history, ratings, and provider information while ensuring
            smooth navigation, responsive interfaces, and reliable
            performance across devices.
          </p>

          <div style={{ marginTop: "25px" }}>
            <span style={styles.tag}>Kotlin</span>
            <span style={styles.tag}>XML</span>
            <span style={styles.tag}>Firebase</span>
            <span style={styles.tag}>Authentication</span>
            <span style={styles.tag}>Android Studio</span>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
            alt=""
            style={{
              width: "100%",
              borderRadius: "24px",
              marginBottom: "30px",
              height: "320px",
              objectFit: "cover",
            }}
          />

          <h2
            style={{
              color: "#00F5D4",
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Expense Tracker Application
          </h2>

          <p
            style={{
              color: "#CBD5E1",
              lineHeight: "2",
              fontSize: "18px",
            }}
          >
            Created a modern cross-platform Expense Tracker application
            using React Native and Expo Router to help users manage
            their daily financial activities efficiently.
            <br />
            <br />
            Implemented real-time transaction management, dynamic
            expense calculations, CRUD operations, optimized list
            rendering with FlatList, and global state management using
            React Context API.
            <br />
            <br />
            Focused heavily on creating an engaging user interface,
            smooth user experience, scalable code architecture, and
            responsive layouts for different screen sizes. This project
            strengthened my expertise in modern React Native
            development.
          </p>

          <div style={{ marginTop: "25px" }}>
            <span style={styles.tag}>React Native</span>
            <span style={styles.tag}>Expo</span>
            <span style={styles.tag}>TypeScript</span>
            <span style={styles.tag}>Expo Router</span>
            <span style={styles.tag}>Context API</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          ...styles.section,
          textAlign: "center",
        }}
      >
        <h2 style={styles.heading}>Let's Build Something Amazing</h2>

        <p
          style={{
            color: "#CBD5E1",
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "2",
            fontSize: "20px",
          }}
        >
          I am always open to collaborating on exciting projects,
          contributing to innovative ideas, and connecting with
          developers, recruiters, and creative teams.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="mailto:sadashiv48952@gmail.com"
            style={styles.buttonPrimary}
          >
            Contact Me
          </a>

          <a
            href="tel:+918603405040"
            style={styles.buttonSecondary}
          >
            Call Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
