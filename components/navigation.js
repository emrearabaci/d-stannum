// Next.js Modules
import Link from 'next/link';
import Image from 'next/image';

// Custom
import styles from '../styles/modules/navigation.module.scss';

// Images
import noSignal from '../public/images/noSignal.png';

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <Image src={noSignal} width={50} height={50} alt="company name" />
              <span className="ms-2 navigationHeaderText">Company</span>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto" />
            <div className="navbar-nav me-2">
              <button className={`${styles.underline} ${styles.clickEffect}`}>
                <Link href="/about">
                  <a className="nav-link majorLink">About</a>
                </Link>
              </button>
              <button className={`${styles.underline} ${styles.clickEffect}`}>
                <Link href="/">
                  <a className="nav-link majorLink">Services</a>
                </Link>
              </button>
              <button className={`${styles.underline} ${styles.clickEffect}`}>
                <Link href="/">
                  <a className="nav-link majorLink">Design</a>
                </Link>
              </button>
              <button className={`${styles.underline} ${styles.clickEffect}`}>
                <Link href="/">
                  <a className="nav-link majorLink">Collection</a>
                </Link>
              </button>
              <button className={`${styles.underline} ${styles.clickEffect}`}>
                <Link href="/">
                  <a className="nav-link majorLink">Pricing</a>
                </Link>
              </button>
              <button className={`${styles.underline} ${styles.clickEffect}`}>
                <Link href="/">
                  <a className="nav-link majorLink">Contact</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
