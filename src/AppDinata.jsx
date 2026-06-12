import React, { useState } from 'react';

export default function AppDinata() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Mencari domain: ${searchQuery}`);
  };

  return (
    <div style={styles.container}>
      {/* --- NAVBAR UTAMA --- */}
      <header style={styles.header}>
        <div style={styles.navLeft}>
          <div style={styles.logo}>APPDINATA</div>
          <nav style={styles.navLinks}>
            <a href="#" style={styles.navLink}>Product ▾</a>
            <a href="#" style={styles.navLink}>Solutions ▾</a>
            <a href="#" style={styles.navLink}>Resources ▾</a>
            <a href="#" style={styles.navLink}>Pricing</a>
            {/* <span style={styles.divider}>|</span>
            <a href="#" style={styles.navLink}>Wixel</a>
            <a href="#" style={styles.navLink}>Wix Studio</a>
            <a href="#" style={styles.navLink}>Enterprise</a> */
            }
          </nav>
        </div>
        <div style={styles.navRight}>
          <span style={styles.langIcon}>🌐</span>
          <button style={styles.btnCreateSite}>Create a Site</button>
        </div>
      </header>

      {/* --- SUB-NAVBAR DOMAINS --- */}
      <div style={styles.subHeader}>
        <div style={styles.subHeaderTitle}></div>
        <nav style={styles.subNavLinks}>
          <a href="#" style={{...styles.subNavLink, ...styles.activeSubLink}}>Buy Domains</a>
          <a href="#" style={styles.subNavLink}>Find Domains</a>
          <a href="#" style={styles.subNavLink}>Extensions</a>
          <a href="#" style={styles.subNavLink}>Tools ▾</a>
          <a href="#" style={styles.subNavLink}>Learn</a>
        </nav>
      </div>

      {/* --- MAIN HERO GRID --- */}
      <main style={styles.mainGrid}>
        
        {/* KOLOM 1: KARTU KIRI (MINT & LAVENDER) */}
        <div style={styles.leftColumn}>
          {/* Kartu Atas (Mint Green) */}
          <div style={styles.mintCard}>
            <div style={styles.brandWrapper}>
              <span style={styles.tacoEmoji}>🌮</span>
              <span style={styles.brandText}>CULITINA</span>
            </div>
            <span style={styles.domainIndicator}>culitina.com</span>
          </div>

          {/* Kartu Bawah (Lavender) */}
          <div style={styles.lavenderCard}>
            <span style={styles.lavenderText}>culitina.co</span>
            <span style={styles.lavenderText}>culitina.website</span>
            <div style={styles.whitePill}>
              <strong>www.culitina.com</strong>
            </div>
            <span style={styles.lavenderText}>culitina.studio</span>
            <span style={styles.lavenderText}>culitina.biz</span>
          </div>
        </div>

        {/* KOLOM 2: HERO UTAMA (PENCARIAN DOMAIN) */}
        <div style={styles.centerHero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Buy your <br />
              <span style={{ fontWeight: '500' }}>perfect domain name</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Get online confidently with SSL protection, reliable web hosting and 24/7 support. 
              Plus, claim a free domain for a year with any annual website plan.
            </p>
          </div>

          {/* Form Pencarian */}
          <form onSubmit={handleSearch} style={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Type the domain you want" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
            <button type="submit" style={styles.searchButton}>
              Search <span style={{ marginLeft: '4px' }}>→</span>
            </button>
          </form>
        </div>

        {/* KOLOM 3: GAMBAR KOKI (KANAN) */}
        <div style={styles.rightImageContainer}>
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600" 
            alt="Chef preparing food" 
            style={styles.chefImage}
          />
          <div style={styles.imageOverlay}></div>
        </div>

      </main>
    </div>
  );
}

{/* --- STYLES (INLINE CSS VANILLA) --- */}
const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#ffffff',
    color: '#161616',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    borderBottom: '1px solid #f2f2f2',
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '35px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: '900',
    letterSpacing: '-1px',
    cursor: 'pointer',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#555555',
    fontSize: '14px',
    fontWeight: '500',
  },
  divider: {
    color: '#e0e0e0',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  langIcon: {
    fontSize: '18px',
    cursor: 'pointer',
  },
  btnCreateSite: {
    backgroundColor: '#0052ff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '25px',
    padding: '10px 22px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  subHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    borderBottom: '1px solid #f9f9f9',
  },
  subHeaderTitle: {
    fontSize: '18px',
    fontWeight: '700',
  },
  subNavLinks: {
    display: 'flex',
    gap: '25px',
  },
  subNavLink: {
    textDecoration: 'none',
    color: '#555555',
    fontSize: '14px',
    fontWeight: '500',
  },
  activeSubLink: {
    color: '#000000',
    borderBottom: '2px solid #000000',
    paddingBottom: '4px',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    gap: '16px',
    padding: '24px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  mintCard: {
    backgroundColor: '#e2f3ec',
    borderRadius: '16px',
    height: '210px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  brandWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tacoEmoji: {
    fontSize: '32px',
    marginBottom: '8px',
  },
  brandText: {
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '2px',
    color: '#1e3d30',
  },
  domainIndicator: {
    position: 'absolute',
    bottom: '15px',
    left: '20px',
    fontSize: '12px',
    color: '#8a9e95',
  },
  lavenderCard: {
    backgroundColor: '#f1edfe',
    borderRadius: '16px',
    height: '230px',
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '12px',
  },
  lavenderText: {
    color: '#a394e0',
    fontSize: '14px',
    fontWeight: '500',
  },
  whitePill: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '8px 16px',
    alignSelf: 'flex-start',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
    fontSize: '14px',
    color: '#000000',
  },
  centerHero: {
    backgroundColor: '#e3ecff',
    borderRadius: '16px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'between',
    minHeight: '456px',
    boxSizing: 'border-box',
  },
  heroContent: {
    textAlign: 'center',
    marginTop: '30px',
    flexGrow: 1,
  },
  heroTitle: {
    fontSize: '42px',
    fontWeight: '400',
    color: '#111111',
    lineHeight: '1.2',
    margin: '0 0 20px 0',
    letterSpacing: '-0.5px',
  },
  heroSubtitle: {
    fontSize: '14px',
    color: '#555555',
    maxWidth: '440px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  searchContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '100px',
    padding: '6px 6px 6px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    width: '100%',
    maxWidth: '520px',
    margin: '0 auto 10px auto',
    boxSizing: 'border-box',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    width: '100%',
    color: '#333333',
  },
  searchButton: {
    backgroundColor: '#0066fe',
    color: '#ffffff',
    border: 'none',
    borderRadius: '100px',
    padding: '12px 28px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  },
  rightImageContainer: {
    borderRadius: '16px',
    overflow: 'hidden',
    height: '456px',
    position: 'relative',
  },
  chefImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(212, 142, 58, 0.08)',
    mixBlendMode: 'multiply',
    pointerEvents: 'none',
  },
};