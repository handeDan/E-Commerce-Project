import React, { useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import { BrowserRouter as Router } from "react-router-dom";
import { api } from "./pages/SignupPage";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/actions/clientActions";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        if (user?.name) return; // Kullanıcı zaten varsa API isteği yapma
        const token = localStorage.getItem("token"); // Token'ı güvenli bir şekilde al

        if (!token) {
          return;
        }

        const response = await api.get("/verify", {
          headers: { Authorization: token },
        });

        dispatch(setUser(response.data)); // Redux store'a kullanıcıyı kaydet
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchToken();
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
