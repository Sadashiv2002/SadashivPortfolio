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
      {/* BACKGROUND GLOW */}
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
        {/* LEFT */}
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
            and building scalable user-focused mobile experiences.
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

        {/* RIGHT IMAGE */}
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
                transform: "rotateY(-10deg) rotateX(5deg)",
                transition: "0.5s ease",
                background:
                  "linear-gradient(135deg, rgba(0,245,212,0.15), rgba(147,51,234,0.15))",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "rotateY(0deg) rotateX(0deg) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 35px 90px rgba(0,245,212,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "rotateY(-10deg) rotateX(5deg)";
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
                  objectPosition: "center top",
                  borderRadius: "28px",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
