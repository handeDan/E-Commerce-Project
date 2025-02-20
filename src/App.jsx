import React, { useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "./store/actions/thunkActions";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);

  useEffect(() => {
    if (user?.name) return; // Kullanıcı zaten varsa API isteği yapma
    dispatch(fetchToken);
  }, [dispatch, user]); // user ve dispatch bağımlılık olarak eklendi

  return (
    <div>
      <Router>
        <Header />
        <PageContent />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
