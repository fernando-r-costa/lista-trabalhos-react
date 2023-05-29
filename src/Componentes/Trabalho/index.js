import './Trabalho.css';


const Trabalho = (empresa, logo, novo, destaque, cargo, area, nivel, data, jornada, localidadade, linguagens, ferramentas) => {
    return (
        <div className="trabalho">
            <div className="div1">
                <img src={logo} alt={`logo-${empresa}`} />
            </div>
            <div className="div2">
                <p>{empresa}</p>
                <p className="novo">New!</p>
                <p className="destaque">Featured</p>
            </div>
            <div className="div3">
                <p>Fullstack Developer</p>
            </div>
            <div className="div4">
                <li>1d ago</li>
                <li>Part Time</li>
                <li>Remote</li>
            </div>
            <div className="div5">
                <li>Fullstack</li>
                <li>Midweight</li>
                <li>Python</li>
                <li>React</li>
            </div>
        </div>
    );
}

export default Trabalho