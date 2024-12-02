import React from "react";
import {
  LockIcon,
  RefreshCcw,
  ZapIcon,
  AppleIcon as DevicesIcon,
} from "lucide-react";

const Info = () => {
  const features = [
    {
      icon: LockIcon,
      title: "Cifrado Avanzado",
      description: (
        <>
          Utiliza algoritmos de cifrado como{" "}
          <span style={{ color: "#300346", fontWeight: "bold" }}>
            XChaCha20-Poly1305
          </span>{" "}
          y{" "}
          <span style={{ color: "#300346", fontWeight: "bold" }}>
            Argon2id
          </span>{" "}
          para un nivel de seguridad robusto.
        </>
      ),
    },
    {
      icon: RefreshCcw,
      title: "Genera tus Claves",
      description:
        "Puedes generar de forma automatizada tus claves asimétricas y contraseñas seguras.",
    },
    {
      icon: ZapIcon,
      title: "Rápido y Eficiente",
      description:
        "Proceso de cifrado y descifrado optimizado para ofrecer la máxima velocidad sin comprometer la seguridad.",
    },
    {
      icon: DevicesIcon,
      title: "Multiplataforma",
      description:
        "Accede y gestiona tus archivos cifrados desde cualquier dispositivo, manteniendo la sincronización y seguridad.",
    },
  ];

  const styles = {
    heroSection: {
      position: "relative",
      height: "60vh",
      minHeight: "400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      textAlign: "center",
      overflow: "hidden",
    },
    heroImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1,
    },
    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: -1,
    },
    heroTitle: {
      marginTop: "7rem",
      fontSize: "9vw",
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
    text: {
      textAlign: "justify",
      margin: "2rem",
      fontSize: "1.5rem",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },

    infoSection: {
      margin: "1rem auto",
      width: "90%",
      maxWidth: "1200px",
      position: "relative",
      padding: "1rem auto",
      borderRadius: "16px",
      display: "flex",
      flexDirection: "column",
      padding: "1rem",
      backgroundColor: "rgba(255, 255, 255, 0.75)",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "1rem",
    },
    infoTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "3rem",
      textAlign: "center",
      color: "#300346",
    },
    infoGrid: {
      display: "flex",
      justifyContent: "space-between",
      gap: "1rem",
      flexWrap: "wrap",
    },
    infoCard: {
      flex: "1 1 calc(33.33% - 1rem)",
      margin: "0.5rem auto",
      boxSizing: "border-box",
      backgroundColor: "#ffffff",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
    },
    infoCardTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#2c3e50",
    },
    infoCardText: {
      color: "#34495e",
      lineHeight: "1.6",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "3rem",
      color: "#300346",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
    },
    feature: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    icon: {
      width: "48px",
      height: "48px",
      marginBottom: "1rem",
      color: "#300346",
    },
    featureTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      textAlign: "center",
      color: "#2c3e50",
    },
    featureDescription: {
      textAlign: "center",
      color: "#34495e",
      lineHeight: "1.6",
    },
  };

  return (
    <>
      <section style={styles.heroSection}>
        <img
          src="/assets/images/rm380-06.jpg"
          alt="Fondo de cifrado de datos"
          style={styles.heroImage}
        />

        <div style={styles.heroOverlay}></div>
        <h1 style={styles.heroTitle}>Cifrado de Archivos</h1>
        <p id="acerca" style={styles.text}>
          Sitio web para cifrar archivos de forma rapida y segura.
        </p>
      </section>

      <section style={styles.infoSection}>
        <div style={styles.container}>
          <h2 style={styles.infoTitle}>Como Funciona la Aplicación</h2>
          <p style={styles.text}>
            Nuestra aplicación es una solución de encriptación que permite a los
            usuarios proteger sus archivos de forma segura mediante dos métodos:
            contraseña y cifrado asimétrico con claves. Esto ofrece flexibilidad
            y adaptabilidad según las necesidades de seguridad de cada usuario.
          </p>
          <section style={styles.section}>
            <div style={styles.container}>
              <h2 style={styles.title}>Características Principales</h2>
              <div style={styles.grid}>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    style={styles.feature}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 12px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 6px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <feature.icon style={styles.icon} />
                    <h3 style={styles.featureTitle}>{feature.title}</h3>
                    <p style={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Info;
