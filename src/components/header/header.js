import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../../utils/firebaseUtils.js";
import "./styles.css";
import img    from "../../img/icons/casa.svg"; 
import img2   from "../../img/icons/sair.svg"; 

const Header = () => {
    let history = useHistory();
    const [user, setUser] = useState(false);
  
    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .get()
            .then(querySnapshot => {
              if (querySnapshot.data()) {
                setUser(true);
              } else {
                setUser(false);
              }
            });
        }
      });
    }, []);
  
    const logout = () => {
      firebase.auth().signOut().then(history.push("/"));
    };
  
    return (
      <header className="main-header">
        Conta Black
        <Link className="links">
 
          <Link to="/home" className="links"> 
          <img height="20px" width="20px" src={img}
            alt="icone-home" /> 
          </Link>
          <Link to="/" className="links">
          <img height="20px" width="20px" src={img2}
            alt="icone-sair" /> 
          </Link>
        </Link>
      </header>
    );
  };
  
  export default Header;