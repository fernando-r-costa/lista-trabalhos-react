import './App.css';
import Trabalho from './Componentes/Trabalho';

function App() {
  return (
    <div className="App">
      <header>
        <img src={'./images/bg-header-desktop.svg'} alt="header-background"/>
      </header>

      <main>
        <Trabalho />
      </main>
    </div>
  );
}

export default App;
