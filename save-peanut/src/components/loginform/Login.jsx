import React from 'react'
import "./Login.css"
import LogoPng from "./assests/LogoPng.png"
import Bgimg from "./assests/LoginBg2.png"
import { Link } from "react-router-dom";

export const Login = () => {
    return(
        <main>
            <section>
                <div className="register">
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
            <h1>SIGN UP</h1>
          </div>

          <div>
            <form>
              <input type="email" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="confirm Password" />
            </form>
          </div>

          <div>
            <input type="submit" value="Sign up" />
          </div>
          <div className="loginlink">
            If you are already a member please{" "}
            <Link to="/login">Login</Link>
             
            
          </div>
        </div>
        <div className="col-2">
          <img alt='vector of a puppy' className='image' src={Bgimg} />
        </div>
      </div>
            </section>
            </main>
    )
}

export default Login;