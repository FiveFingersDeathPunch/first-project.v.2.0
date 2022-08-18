
import React, { useEffect, useState } from "react";
import { BrowserRouter, } from "react-router-dom";
import AppRouter from "./Components/UI/AppRouter/AppRouter";
import NavBar from "./Components/UI/NavBar/NavBar";
import { AuthContext } from "./context/context";

import './Styles/App.css'



function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      loading

    }}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )

}
export default App;