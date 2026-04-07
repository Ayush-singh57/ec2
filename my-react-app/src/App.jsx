import { useState, useEffect } from 'react';

export default function App() {
  // This creates a live updating timer so the page feels "alive"
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setUptime(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // "Glassmorphism" styling built right into the code
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    card: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '24px',
      padding: '40px',
      maxWidth: '600px',
      width: '90%',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      textAlign: 'center'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(16, 185, 129, 0.1)',
      color: '#34d399',
      padding: '8px 16px',
      borderRadius: '999px',
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '24px',
      border: '1px solid rgba(52, 211, 153, 0.2)'
    },
    dot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#34d399',
      borderRadius: '50%',
      boxShadow: '0 0 10px #34d399',
      animation: 'pulse 2s infinite'
    },
    title: {
      fontSize: '36px',
      fontWeight: '800',
      margin: '0 0 16px 0',
      background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px',
      marginTop: '32px'
    },
    statBox: {
      background: 'rgba(0, 0, 0, 0.2)',
      padding: '20px',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    },
    statLabel: {
      fontSize: '12px',
      color: '#9ca3af',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '8px'
    },
    statValue: {
      fontSize: '24px',
      fontWeight: '700',
      fontFamily: 'monospace'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.badge}>
          <div style={styles.dot}></div>
          SYSTEM ONLINE
        </div>
        
        <h1 style={styles.title}>AWS Mission Control</h1>
        <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
          Successfully deployed from a headless Ubuntu Linux terminal using Node.js, Vite, and Nginx.
        </p>

        <div style={styles.grid}>
          <div style={styles.statBox}>
            <div style={styles.statLabel}>Instance Uptime</div>
            <div style={styles.statValue}>{uptime}s</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statLabel}>Environment</div>
            <div style={styles.statValue}>Production</div>
          </div>
        </div>
      </div>
    </div>
  );
}