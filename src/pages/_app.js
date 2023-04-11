//React
import { useEffect } from 'react';
//Animaciones
import AOS from 'aos';
import 'aos/dist/aos.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '@/scss/globalStyles.scss';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {

  useEffect(() => {
		AOS.init({
			delay: 0,
			duration: 1000,
      mirror: true,
		});
   });

  return <Component {...pageProps} />
}
