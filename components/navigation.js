import Link from 'next/link';

// Styles
import styles from '../styles/modules/navigation.module.scss';

function Navigation() {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
