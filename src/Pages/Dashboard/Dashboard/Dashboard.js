import { Route, Link, Routes } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import useAuth from "./../../../hooks/useAuth";
import AdminRoute from "./../../AdminRoute/AdminRoute";
import Pay from "./../Pay/Pay";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import AddProduct from "./../AddProduct/AddProduct";
import Review from "./../AddReview/AddReview";
import ManageAllOrders from "./../ManageAllOrders/ManageAllOrders";
import ManageProducts from "./../ManageProducts/ManageProducts";

const Dashboard = () => {
  const { admin } = useAuth();

  const drawer = (
    <div className="flex md:flex-col justify-between ">
      <div>
        <Link className="no-underline text-lg block my-2" to="/">
          <button>My Orders</button>
        </Link>
        <Link className="no-underline text-lg block my-2" to="/pay">
          <button>Payment</button>
        </Link>
        <Link className="no-underline text-lg block my-2" to="/addReview">
          <button>Review</button>
        </Link>
        <p className="md:border-t-2 border-gray-500 my-5"></p>
      </div>

      {admin && (
        <div>
          <Link
            className="no-underline text-lg block my-2"
            to="/manageAllOrders"
          >
            Manage All Orders
          </Link>
          <Link
            className="no-underline text-lg block my-2"
            to="/manageProducts"
          >
            Manage Products
          </Link>
          <Link className="no-underline text-lg block my-2" to="/addProduct">
            Add A Product
          </Link>
          <Link className="no-underline text-lg block my-2" to="/makeAdmin">
            Make Admin
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-12 gap-5" style={{ minHeight: "500px" }}>
      <div className="col-span-12 md:col-span-2 p-5 bg-green-400">{drawer}</div>
      <div className="col-span-12 md:col-span-10 py-10">
        <Routes>
          <Route index element={<MyOrders />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/addReview" element={<Review />} />
          <Route
            path="/manageAllOrders"
            element={
              <AdminRoute>
                <ManageAllOrders />
              </AdminRoute>
            }
          />
          <Route
            path="/manageProducts"
            element={
              <AdminRoute>
                <ManageProducts />
              </AdminRoute>
            }
          />
          <Route
            path="/addProduct"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />
          <Route
            path="/makeAdmin"
            element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
