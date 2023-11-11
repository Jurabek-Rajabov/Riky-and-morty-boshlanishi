import { Link } from "react-router-dom"
import img from "../assets/riky.jpg"
Link
export const Header = ( ) => {
    return(
    <div className="container">
        <section style={{display:"flex", width:"100%", height:"",  alignItems:"center", justifyContent: "space-between" , }} className="Navbar">
            <div className="logo" style={{marginRight:"600px"}}>
              <img style={{width:"200px"}} src={img} alt="" />
            </div>
            <div className="page" style={{width:"900px"}}>
                <ul style={{display: "flex", width:"80%",alignItems:"center", justifyContent: "space-between",  }} className="pages">
                    <li><Link to={"/"}>Boshsahifa</Link></li>
                    <li> <Link to={"./About"}>About</Link></li>
                    <li>Register</li>
                    <li> <Link to={"/Login"}>Login</Link></li>
                </ul>
            </div>
        </section>
    </div>
    )
}
