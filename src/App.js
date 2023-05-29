import './App.css';
import Trabalho from './Componentes/Trabalho';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItens(result);
        },
        (error) => {
          setIsLoaded(true);
          setErr(error);
        }
      )
  }, [])

  if (err) {
    return <div>Error: {err.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(itens);
    return (
      <div className="App">
        <header>
          <img src={'./images/bg-header-desktop.svg'} alt="header-background" />
        </header>

        <main>

          {itens.map(item => <Trabalho
            key={item.id}
            empresa={item.company}
            logo={item.logo}
            novo={item.new}
            destaque={item.featured}
            cargo={item.position}
            area={item.role}
            nivel={item.level}
            data={item.postedAt}
            jornada={item.contract}
            localidadade={item.location}
            linguagens={item.languages}
            ferramentas={item.tools}
            />)}

        </main>
      </div>
    );
  }
}

export default App;
