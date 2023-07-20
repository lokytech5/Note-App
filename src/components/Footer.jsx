import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const date = new Date().getDate();
  return (
    <footer>
      <p>Copyright ⓒ Lokytech {year} {date}</p>
    </footer>
  );
}

export default Footer;
