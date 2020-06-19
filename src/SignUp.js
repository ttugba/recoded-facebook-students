import React from "react";
import db from "./firebase";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { GoogleLogin } from 'react-google-login'

const SignUpPage = () => {
  const [user, setUser] = useState("");
    const [profile, setProfile] = useState("");

    const handleChange = (e) => {
        setUser(e.target.value) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("user").add({ 
          city: {city.value}
          name: //The name in Google for the account
          userId: //The unique user ID (available via Google. Please don't make a user ID yourself).
          imageUrl: //The Google profile picture of the image (available via Google).
          profile: {profile.value}The value of the profile form field
         })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });    
        setUser("");
    }

    const handleUser = () => {
        db.collection("users")
            .get()
            .then(QuerySnapshot => {
                // const data = querySnapshot.docs.map(doc => doc.data());
                console.log(QuerySnapshot.docs);
                // setLi(data.map(obj => {
                //     return <li>{li}</li>;
                // }

            });
            setProfile("");
    }


    return (
        <div className="container">
            <h4 className="center">user</h4>
           
             <form onSubmit={handleSubmit} className="center">
                <input onChange={handleChange} type="text" placeholder="username" value={user}></input>
                <button>Username</button>
             </form>

             <form className="container center" onSubmit={handleUser}>
                 <h2>Today's tasks</h2>
                   
             </form>
        </div>
    )
}

/*
const responseGoogle = (response) => {
  console.log(response);
}
 
ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);
*/

export default SignUpPage;
