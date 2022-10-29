import { NavLink } from "react-router-dom";



function Nav (){
    return (
      <section className="navigation">
        <section>
          <NavLink
          style={({isActive}) =>
          isActive ? {color: "red"} : {color: "#5a5a5a"}
        }
        className="navigate"
        to="/">Home Page
        </NavLink>
        </section>
  
        <section>
          <NavLink
          style={({isActive}) =>
          isActive ? {color: "red"} : {color: "#5a5a5a"}
        }
        className="navigate"
        to="/about">About Page</NavLink>
        </section>
      </section>
    )
   }

   export default Nav;