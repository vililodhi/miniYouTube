import React,{ Component } from 'react';
class App extends Component {
   render() {
      return (
         <div>
            <form name="loginform" class="form" action="loginform.php" method="post">
            <h1>Login Form</h1>
            <table>
                <tr>
                    <td>
                        <b>User Name:</b>
                    </td>
                    <td>
                        <input type="text" required name="username" autofocus placeholder="Enter your user name"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Password:</b>
                    </td> 
                    <td>
                        <input type="password" required name="pwd"  placeholder="Enter your password"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                    <button name="login"><b>Login</b></button></td>
                </tr>
            </table>
            <a href="forgetpassword.php">Forgot Password</a><p></p>
                Not an registered member, So
            <a href="register.php"> Register </a>Your Self!!
        </form>
        </div>
      );
   }
}
export default App;