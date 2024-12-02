import React from "react";
import Image from "next/image";

const Nosotros = () => {
  const socialLinksYasser = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/YaoKaleth98",
      icon: "/assets/images/facebook.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/yasser_oviedo20/",
      icon: "/assets/images/instagram.png",
    },
    {
      name: "GitHub",
      url: "",
      icon: "/assets/images/github.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yasser-oviedo-lópez-816200256/",
      icon: "/assets/images/linkedin.png",
    },
  ];

  const socialLinksJorge = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100048879061264",
      icon: "/assets/images/facebook.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jorgedibarra/",
      icon: "/assets/images/instagram.png",
    },
    {
      name: "GitHub",
      url: "https://github.com/jorgedibarra",
      icon: "/assets/images/github.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jorgedibarra/",
      icon: "/assets/images/linkedin.png",
    },
  ];

  const styles = {
    teamSection: {
      padding: "1rem ",
      margin: "2rem auto",
      width: "90%",
      maxWidth: "1200px",
      position: "relative",
      marginBottom: 0,
      borderRadius: "16px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgba(255, 255, 255, 0.75)",
    },

    teamCard: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      flex: "1 1 calc(50% - 1rem)",
      margin: "0.5rem auto",
      padding: "1.5rem",
      maxWidth: "450px",
      boxSizing: "border-box",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
    },

    teamGrid: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      flexWrap: "wrap",
    },
    infoTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "2rem",
      textAlign: "center",
      color: "#300346",
    },

    socialMedia: {
      display: "flex",
      gap: "1rem",
      marginTop: "1rem",
    }
  };

  return (
    <section style={styles.teamSection}>
      <div style={styles.container}>
        <h2 style={styles.infoTitle}>Conoce a los Desarrolladores</h2>
        <div style={styles.teamGrid}>
          <div
            style={styles.teamCard}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src="/assets/images/jorge.jpg"
              alt="Desarrollador 1"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3 style={styles.infoCardTitle}>Jorge Ibarra</h3>
            <p style={styles.infoCardText}>
              Desarrollador Backend con experiencia en Spring Boot y Node.js.
            </p>
            <div style={styles.socialMedia}>
              {socialLinksJorge.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={`Visitar ${social.name}`}
                >
                  <Image
                    src={social.icon}
                    alt={`${social.name} icon`}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
          <div
            style={styles.teamCard}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src="/assets/images/yasser.png"
              alt="Desarrollador 2"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3 style={styles.infoCardTitle}>Yasser Oviedo</h3>
            <p style={styles.infoCardText}>
              Desarrollador Full Stack con experiencia en tecnologías web y
              móviles.
            </p>
            <div style={styles.socialMedia}>
              {socialLinksYasser.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={`Visitar ${social.name}`}
                >
                  <Image
                    src={social.icon}
                    alt={`${social.name} icon`}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
