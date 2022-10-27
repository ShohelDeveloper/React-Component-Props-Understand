//Functional Component
import {Router} from '@gatsbyjs/reach-router'
import About from './pages/About';
import Help from './pages/Help';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <About path='/about'/>
      <Help path='/help'/>
      <Home path='/'/>
  </Router>
  );
}

export default App;

/**
 * When should me decide creating a new component?
 * 1. When we need to write duplicate code,
 * 2. Which data are different,
 */
 


