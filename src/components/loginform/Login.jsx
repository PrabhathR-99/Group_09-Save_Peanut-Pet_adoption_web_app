import React, { useEffect, useState } from 'react'
import "./Login.css"
import LogoPng from "./assests/LogoPng.png"
import Bgimg from "./assests/LoginBg2.png"
import { Link } from "react-router-dom";
import { register } from '../../api/auth';
import { useStore } from '../../store';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const { setAuthenticated, authenticated } = useStore(state => state);

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: ""
  })

  // const [error, setError] = useState(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/home');
  // }, [authenticated, navigate])



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await register(user);
  //   console.log(res.response);
  //   // setAuthenticated(true);
  //   if (res.response.data.status === "success") {
  //     setAuthenticated(true);
  //     navigate('/home');
  //   } else {
  //     setError('Invalid credentials');
  //   }
  // }

  return (
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
                <input type="email" placeholder="Email" value={user.email}
                  onChange={(e) => setUser({
                    ...user,
                    email: e.target.value
                  })}
                />
                <input type="username" placeholder="Username" value={user.username}
                  onChange={(e) => setUser({
                    ...user,
                    username: e.target.value
                  })}
                />
                <input type="password" placeholder="Password" value={user.password}
                  onChange={(e) => setUser({
                    ...user,
                    password: e.target.value
                  })}
                />
                <input type="password" placeholder="confirm Password" />
              </form>
              {/* {error && <div className="error">{error}</div>} */}
            </div>

            <div>
              <button value="Sign up" className="buttonLogin" onClick={
                () => navigate('/home')
              } >Sign Up</button>
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