import './style.scss';
import { Link } from "react-router-dom";

function SignIn() {
    return (
        <div className='ab-login'>
            <main class="main bg-dark">
      <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div class="input-wrapper">
            <label for="username">Username</label
            ><input type="text" id="username" />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label
            ><input type="password" id="password" />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" /><label for="remember-me"
              >Remember me</label
            >
          </div>
     
          <a href="./user.html" class="sign-in-button">Sign In</a>
         
         <button class="sign-in-button">Sign In</button> 
    
        </form>
      </section>
    </main>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default SignIn