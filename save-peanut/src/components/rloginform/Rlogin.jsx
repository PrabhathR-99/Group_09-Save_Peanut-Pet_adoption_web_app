import React from 'react'
import "./Rlogin.css"
import LogoPng from "./assests/LogoPng.png"

import Bgimg from "./assests/LoginBg2.png"
import { Link } from "react-router-dom";

export const Login = () => {
    return(
        <main>
            <section id ="Rlogin" >
                <div className="register">
               
        <div className="col-2">
          <img alt='vector of a puppy' className='image' src={Bgimg} />
        </div>
         <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 400,
            height: 350,
            align: "center"
          }}
          className="col-1"
        >
          <div class>
            <img alt='save peanut logo' className="logo" src={LogoPng} />
          </div>
          <div className="signin">
            <h1>Log in</h1>
          </div>

          <div>
            <form>
              <input type="email" placeholder="Username" />
              <input type="password" placeholder="Password" />
              
            </form>
          </div>

          <div>
            <input type="submit" value="Log in" />
          </div>
          <div className="loginlink">
            If you are not a member please{" "}
            <Link to="/signup">Signup</Link>
           
          </div>
        </div>
      </div>
            </section>
            </main>
    )
}

export default Login;