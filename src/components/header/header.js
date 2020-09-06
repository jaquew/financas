import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../../utils/firebaseUtils.js";
import "./styles.css";

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
        <img width={"50px"} alt="Logo Conta Black" />
        Conta Black
        <Link className="links">
 
          <Link to="/home" className="links">
            Home
          </Link>
          <Link to="/" className="links">
            Sair
          </Link>
        </Link>
      </header>
    );
  };
  
  export default Header;