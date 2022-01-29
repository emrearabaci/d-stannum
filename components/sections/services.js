// Styles
import styles from '../../styles/modules/services.module.scss';

function Services() {
  const services = [
    {
      id: 0,
      icon: 'bi bi-bookmark-check',
      header: 'Service',
      subHeader: 'Lorem Ipsum Dolor Sit Amet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
    },
    {
      id: 1,
      icon: 'bi-bookmark-check',
      header: 'Service',
      subHeader: 'Lorem Ipsum Dolor Sit Amet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
    },
    {
      id: 2,
      icon: 'bi-bookmark-check',
      header: 'Service',
      subHeader: 'Lorem Ipsum Dolor Sit Amet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
    }
  ];

  return (
    <div className="my-md-0 my-5">
      <div className="container">
        <div className="row justify-content-around">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-md-4 py-lg-0 py-4 text-center"
            >
              <div className="m-4">
                <i className={`${styles.icon} ${service.icon}`} />
              </div>
              <h2 className="headerText">{service.header}</h2>
              <p className="minorText">{service.subHeader}</p>
              <p className="majorText">{service.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
