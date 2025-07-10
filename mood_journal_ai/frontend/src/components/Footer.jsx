import "./Footer.css";

// Footer component that displays the copyright information
export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Mood Journal AI. All rights reserved.</p>
    </footer>
  );
}