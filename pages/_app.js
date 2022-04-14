import '../styles/globals.css';
import React from 'react';
import { SideBar, Container } from '../components';

function MyApp({ Component, pageProps }) {
  const possibleModes = React.useMemo(() => ['dark', 'light', 'system'], []);
  const nightModeItemName = 'nightMode';
  const [currentMode, setCurrentMode] = React.useState(null);
  const [nightMode, setNightMode] = React.useState(false);

  React.useEffect(() => {
    const localStorageNightMode = localStorage.getItem(nightModeItemName);
    if (localStorageNightMode != undefined) {
      console.log("INDEX OF: ", possibleModes.indexOf(localStorageNightMode))
      setCurrentMode(possibleModes.indexOf(localStorageNightMode));
    } else {
      setCurrentMode(2)
    }
  }, [possibleModes])

  React.useEffect(() => {
    if (currentMode != null) {
      if (currentMode !== 2) {
        setNightMode(currentMode === 1 ? false : true);
      } else {
        getSystemNightMode();
      }
    }
  }, [currentMode])

  const getSystemNightMode = () => {
    if (window.matchMedia) {
      setNightMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }

  const toggleNightMode = () => {
    if (currentMode == 1) {
      localStorage.removeItem(nightModeItemName);
    } else {
      localStorage.setItem(nightModeItemName, possibleModes[currentMode]);
    }
    if (currentMode == 2) {
      setCurrentMode(0)
    } else {
      setCurrentMode(currentMode + 1);
    }
  }

  pageProps.toggleNightMode = toggleNightMode;
  pageProps.currentMode = possibleModes[currentMode];

  return (
    <>
      <Container night={nightMode}>
        <SideBar />
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
