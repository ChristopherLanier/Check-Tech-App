import MainLayout from '@/src/components/layout/main-layout';
import '@/styles/globals.css';
import '@/styles/general.sass';

//import main layout component into top of app (app.js)

function MyApp({ Component, pageProps }) {
  return (
    <>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
