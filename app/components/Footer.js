export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      width: '100%',
      textAlign: 'center',
      padding: '1rem 0',
      color: '#CFFF04',
      background: 'transparent',
      position: 'fixed',
      bottom: 0,
      left: 0,
      fontWeight: 'bold',
      letterSpacing: '1px',
      fontSize: '1rem',
    }}>
      Developed by Aswat © {year}
    </footer>
  );
}
