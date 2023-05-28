import './Trabalho.css';


const Trabalho = () => {
    return (
        <div className="trabalho">
            <div className="div1">
                <img src={"./images/manage.svg"} alt="" />
            </div>
            <div className="div2">
                <p>Manage</p>
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