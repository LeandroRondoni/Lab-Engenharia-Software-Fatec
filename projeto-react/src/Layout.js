import { Link, Outlet } from "react-router-dom";

const Layout = () =>{   

    return (
        <div>
            <header id="header">
            <nav className="links" style={{'--items': 7}}>                
                <Link to="/Atv01">Atividade 1</Link>
                <Link to="/Atv02">Atividade 2</Link>
                <Link to="/Atv03">Atividade 3</Link>
                <Link to="/Atv04"               
                >Atividade 4</Link>                
                <Link to="/Atv05">Atividade 5</Link>
                <Link to="/Atv06">Atividade 6</Link>
                <Link to="/Atv07">Atividade 7</Link>                
                <span className="line"></span>
            </nav>
            </header>
            <Outlet/>
        </div>
    )
}

export default Layout