import MainLayout from '@/src/components/layout/main-layout';
import '@/styles/globals.css';
import '@/styles/general.sass';

//import main-layout jsx tags into top of App (app.js)

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
