import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAddresses } from "../../store/actions/clientActions";
import { api } from "../../pages/SignupPage";

function MyAddresses() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addresses = useSelector((state) => {
    console.log(state.client.addresses);
    return state.client.addresses || [];
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      toast.error("Please log in to view your addresses");
      return;
    }
    api
      .get("/user/address", { headers: { Authorization: token } })
      .then((res) => {
        if (res.data) {
          dispatch(setAddresses(res.data));
        } else {
          dispatch(setAddresses([]));
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch(setAddresses([]));
      });
  }, [dispatch]);

  return (
    <div>
      <aside className="flex-1 p-6 pt-2">
        <h1 className="text-black text-base mb-4 pl-4 md:pl-5">My Addresses</h1>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <aside className="p-4 md:p-5">
            <div className="flex flex-col gap-10 mb-4">
              <div className="w-full flex gap-2 flex-wrap">
                {addresses.map((address, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-b-lg border border-orange-500"
                  >
                    <div className="bg-gray-100 border-b px-4 py-2">
                      <p className="text-primary-dark font-semibold">
                        {address.title}
                      </p>
                    </div>
                    <p className="font-semibold text-xs bg-blue-50 px-4 py-2 border-b">
                      {address.name} {address.surname}
                    </p>
                    <div className="p-4 flex flex-col gap-2 text-xs">
                      <p>{address.neighborhood}</p>

                      <p>
                        {address.city} / {address.district}
                      </p>
                      <p>{address.address}</p>
                      <p>{address.phone}</p>
                    </div>
                  </div>
                ))}{" "}
              </div>
            </div>
          </aside>
        </div>
      </aside>
    </div>
  );
}

export default MyAddresses;
