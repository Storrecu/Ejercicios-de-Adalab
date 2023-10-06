// Fichero src/components/App.jsx
import '../styles/App.css';
import logo from '../images/logo.png';


function App() {
  return (
    <div>
      <header>
        <h1 className='title'>Título de mi página</h1>
      </header>
      <img src={logo} title="Film tape" alt="Cinta de película" />
      <img
        src="https://beta.adalab.es/resources/images/adalab-logo-128x128.png"
        title="Página de Adalab"
        alt="Logo de Adalab"
      />
    </div>
    
  );
}

export default App;