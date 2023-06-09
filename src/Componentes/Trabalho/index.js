import './Trabalho.css';

const Trabalho = ({ empresa, logo, novo, destaque, cargo, area, nivel, data, jornada, localidade, linguagens, ferramentas, clicar }) => {
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
                    onClick={() => clicar("role", area)}
                >{area}</li>
                <li
                    onClick={() => clicar("level", nivel)}
                >{nivel}</li>
                {linguagens.map(linguagem =>
                    <li key={linguagem}
                        onClick={() => clicar("languages", linguagem)}
                    >{linguagem}</li>
                )}
                {ferramentas.map(ferramenta =>
                    <li key={ferramenta}
                        onClick={() => clicar("tools", ferramenta)}
                    >{ferramenta}</li>
                )}
            </div>
        </div>
    );
}

export default Trabalho