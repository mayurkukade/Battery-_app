import {  useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const submitHandler = (e)=>{
e.preventDefault()
console.log(email,pwd)
if(email){
  navigate('/home')
}
  }

  return (
    <section>
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="password">Password</label>
        <input
        type='password'
        id="password"
        autoComplete='off'
        onChange={(e)=>setPwd(e.target.value)}
        value={pwd}
        required
        
        />
        <button >Submit</button>
      </form>
    </section>
  );
};

export default Login;
