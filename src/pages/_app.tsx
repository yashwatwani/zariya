import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { logUserEvent } from '../utils/logUserEvent';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    logUserEvent('page_view');
  }, [router.pathname]);
  return <Component {...pageProps} />;
}

export default MyApp; 