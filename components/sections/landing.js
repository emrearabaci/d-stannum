// Styles
import styles from '../../styles/modules/landing.module.scss';

// Components
import noSignal from '../../public/images/noSignal.png';
import Image from 'next/image';

function Landing() {
  return (
    <div>
      <div className={`${styles.background}`}>
        <div className="d-flex min-vh-100 align-items-center">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <br />
                <h2 className="text-center headerText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </h2>
                <hr className="m-4 col-2 mx-auto" />
                <p className="text-center majorText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aliquet sagittis id consectetur purus ut faucibus pulvinar
                  elementum integer.
                </p>
                <hr className="m-4 col-2 mx-auto" />
                <p className="text-center minorText">
                  Aliquet sagittis id consectetur purus ut faucibus pulvinar
                  elementum integer.
                </p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 align-items-center justify-content-evenly d-flex">
                <div className={`${styles.mobileMarginLandingImage}`}>
                  <Image
                    width={200}
                    height={200}
                    src={noSignal}
                    alt="company name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
