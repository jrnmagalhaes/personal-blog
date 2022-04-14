import '../styles/globals.css';
import '../styles/darcula.css';
import React from 'react';
import { SideBar, Container, Header } from '../components';

function MyApp({ Component, pageProps }) {
  const possibleModes = React.useMemo(() => ['Escuro', 'Claro', 'Sistema'], []);
  const nightModeItemName = 'nightMode';
  const [currentMode, setCurrentMode] = React.useState(null);
  const [nightMode, setNightMode] = React.useState(false);

  React.useEffect(() => {
    const localStorageNightMode = localStorage.getItem(nightModeItemName);
    if (localStorageNightMode != undefined) {
      setCurrentMode(possibleModes.indexOf(localStorageNightMode));
    } else {
      setCurrentMode(2)
    }
  }, [possibleModes])

  React.useEffect(() => {
    if (currentMode != null) {
      if (currentMode !== 2) {
        setNightMode(currentMode === 1 ? false : true);
        localStorage.setItem(nightModeItemName, possibleModes[currentMode]);
      } else {
        getSystemNightMode();
        localStorage.removeItem(nightModeItemName);
      }
    }
  }, [currentMode, possibleModes])

  const getSystemNightMode = () => {
    if (window.matchMedia) {
      setNightMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }

  const toggleNightMode = () => {
    if (currentMode == 2) {
      setCurrentMode(0)
    } else {
      setCurrentMode(currentMode + 1);
    }
  }

  return (
    <>
      <Container night={nightMode}>
        <Header night={nightMode} currentMode={possibleModes[currentMode]} toggleNightMode={toggleNightMode} />
        <section>
          <SideBar />
          <Component {...pageProps} />
        </section>
      </Container>
    </>
  )
}

export default MyApp
