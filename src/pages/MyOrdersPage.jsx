import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { api } from './SignupPage';
import { useDispatch } from 'react-redux';
import { setOrders } from '../store/actions/clientActions';

function MyOrdersPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      toast.error("Please log in to view your orders");
      return;
    }
    api
      .get("/order", { headers: { Authorization: token } })
      .then((res) => {
        if (res.data) {
          dispatch(setOrders(res.data));
        } else {
          dispatch(setOrders([]));
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch(setOrders([] ));
      });
  }, [dispatch]);

  return (
    <div>myOrders</div>
  )
}

export default MyOrdersPage