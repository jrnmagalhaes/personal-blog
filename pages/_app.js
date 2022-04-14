import '../styles/globals.css';
import { SideBar, Container } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <SideBar />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
