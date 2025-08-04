import RotatingProjects from './RotatingProjects';
import Footer from './Footer';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#000',
      color: '#CFFF04',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <RotatingProjects />
      <Footer />
    </main>
  );
}
