import './global.css';

import { HashRouter } from 'react-router-dom';
import { registerApplication, start } from 'single-spa';
import { useRouter } from 'next/router';

// // Import your MFEs' lifecycle methods
// const mfe1next = () => import('@mfe-next'); // Update path to your MFE
// const mfe2next = () => import('@mfe-next-2'); // Update path to your MFE

/*export const metadata = {
  title: 'Welcome to shikshav2.0',
  description: 'Generated by create-nx-workspace',
};*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   // Ensure single-spa is initialized properly
  //   if (window.singleSpa) {
  //     // Use a different approach to check if the app is already registered
  //     const isMfe1Registered = window.singleSpa.apps.some(
  //       (app: { name: string; }) => app.name === 'mfe1'
  //     );
  //     const isMfe2Registered = window.singleSpa.apps.some(
  //       (app: { name: string; }) => app.name === 'mfe2'
  //     );

  //     if (!isMfe1Registered) {
  //       registerApplication({
  //         name: 'mfe1',
  //         app: () => import('@mfe-next'),
  //         activeWhen: (location) => location.hash.startsWith('#/mfe1'),
  //       });
  //     }

  //     if (!isMfe2Registered) {
  //       registerApplication({
  //         name: 'mfe2',
  //         app: () => import('@mfe-next-2'),
  //         activeWhen: (location) => location.hash.startsWith('#/mfe2'),
  //       });
  //     }

  //     // Start single-spa if it isn't started
  //     if (!window.singleSpa.isStarted) {
  //       start();
  //       window.singleSpa.isStarted = true;
  //     }
  //   } else {
  //     console.error('singleSpa is not defined');
  //   }
  // }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
