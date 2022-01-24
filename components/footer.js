// Next.js Modules
import Link from 'next/link';

// Custom
import styles from '../styles/modules/footer.module.scss';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <div className="p-5">
        <div className="container">
          <footer>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 p-2 d-flex align-items-center justify-content-center justify-content-lg-start">
                <Link href="/">
                  <a className={`${styles.footerLink} minorLink p-2`}>Blog</a>
                </Link>
                <Link href="/">
                  <a className={`${styles.footerLink} minorLink p-2`}>F.A.Q.</a>
                </Link>
                <Link href="/">
                  <a className={`${styles.footerLink} minorLink p-2`}>
                    Contact
                  </a>
                </Link>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 p-2 d-flex align-items-center justify-content-center justify-content-lg-end">
                <Link href="/">
                  <a>
                    <i
                      className={`${styles.twitterIcon} customIcon p-2 bi bi-twitter`}
                    />
                  </a>
                </Link>

                <Link href="/">
                  <a>
                    <i
                      className={`${styles.facebookIcon} customIcon p-2 bi bi-facebook`}
                    />
                  </a>
                </Link>

                <Link href="/">
                  <a>
                    <i
                      className={`${styles.instagramIcon} customIcon p-2 bi bi-instagram`}
                    />
                  </a>
                </Link>
              </div>
            </div>

            <hr className="m-4 col-2 mx-auto" />

            <div className="row">
              <div className="col text-center">
                <p className="text-muted minorText">Company Name</p>
                <p className="text-muted minorText">
                  &copy; {getCurrentYear()}
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
