import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      borderBottomLeftRadius: "16px",
      borderBottomRightRadius: "16px",
      color: "#300346",
      padding: "3rem 1rem",
      marginTop: "3rem",
    },
    copyright: {
      textAlign: "center",
      marginTop: "1rem",
      fontSize: "1.1rem",
      color: "#300346",
    },
  };

  return (
    <footer id="contacto" style={styles.footer}>
      <div style={styles.copyright}>
        <p className="text-center text-sm text-gray-600">
          © {currentYear} Jorge y Yasser, Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
