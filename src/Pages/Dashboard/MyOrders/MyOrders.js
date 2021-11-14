import React from "react";
import { useState, useEffect } from "react";
import useAuth from "./../../../hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyOrders(data);
            });
    }, [user.email]);

    const handleCancelBtn = (id) => {
        const proceed = window.confirm(
            "Are you sure you want to cancel this booking?"
        );
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        alert("Canceled the booking successfully");
                    }
                    const rest = myOrders.filter((order) => order._id !== id);
                    // console.log(rest);
                    setMyOrders(rest);
                });
        }
    };

    return (
        <div className="container my-5 my-orders-page">
            <h1 className="text-3xl font-medium my-3">My Orders</h1>
            <div>
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Cost</th>
                            <th>Ordered by</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myOrders.map((order) => (
                            <tr key={order._id}>
                                <td data-title="Product Name">
                                    {order.product.name}
                                </td>
                                <td data-title="Cost">
                                    ${order.product.price}
                                </td>
                                <td data-title="Ordered by">{order.name}</td>
                                <td data-title="Phone">{order.phone}</td>
                                <td data-title="Status">
                                    {order.shippingStatus}
                                </td>
                                <td data-title="Cancel">
                                    <button
                                        className="cancel-order-btn"
                                        onClick={() =>
                                            handleCancelBtn(order._id)
                                        }
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
