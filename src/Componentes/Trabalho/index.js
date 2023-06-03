import './Trabalho.css';


const Trabalho = ({ empresa, logo, novo, destaque, cargo, area, nivel, data, jornada, localidade, linguagens, ferramentas }) => {
    const [busca, setBusca] = useState([]);
    return (
        <div className="trabalho">
            {destaque === false ?
                <div className="div1">
                    <img src={logo} alt={`logo-${empresa}`} />
                </div> :
                <div className="div1-border">
                    <img src={logo} alt={`logo-${empresa}`} />
                </div>}
            <div className="div2">
                <p>{empresa}</p>
                {novo === true && <p className="novo">New!</p>}
                {destaque === true && <p className="destaque">Featured</p>}
            </div>
            <div className="div3">
                <p>{cargo}</p>
            </div>
            <div className="div4">
                <li>{data}</li>
                <li>{jornada}</li>
                <li>{localidade}</li>
            </div>
            <div className="div5">
                <li 
                    value={area}
                    onClick={(evento) => setBusca(evento.target.value)}
                >{area}</li>
                <li>{nivel}</li>
                {linguagens.map(linguagem => 
                <li key={linguagem}>{linguagem}</li>
                )}
                {ferramentas.map(ferramenta => 
                <li key={ferramenta}>{ferramenta}</li>
                )}
            </div>
        </div>
    );
}

export default Trabalho