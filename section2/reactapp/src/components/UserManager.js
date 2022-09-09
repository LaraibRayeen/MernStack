import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import UpdateUser from "./UpdateUser";

const UserManager = () => {
  const [userList, setUsersList] = useState([]);
  const [showForm, setshowForm] = useState(false);
  const [userFormData, setuserFormData] = useState(null);

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/user/getall");
    const data = await response.json();
    console.log(data);
    console.log("request sent");
    setUsersList(data);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const deleteUser = async (id) => {
    // console.log(id);

    const response = await fetch("http://localhost:5000/user/delete/" + id, {
      method: "DELETE",
    });

    console.log(response.status);
    getDataFromBackend();
    toast.success("user delete 😒  ");
  };

  const editUser = (userdata) => {
    console.log(userdata);
    setuserFormData(userdata);
    setshowForm(true);
  };

  const showUsers = () => {
    return (
      <table className="table table-white table-striped">
        <thead>
          <tr>
            <th> Id</th>
            <th> Email</th>
            <th> password</th>
            <th> age</th>
            <th> update</th>
            <th> delete</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <motion.tr
              key={user._id}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring" }}
            >
              <td>{user._id}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>
                <button
                  className="btn btn-out-primary"
                  onClick={(e) => {
                    editUser(user);
                  }}
                >
                  <i class="fas fa-pen-alt    "></i>
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                  className="btn btn-out-danger"
                >
                  <i class="fas fa-trash-alt    "></i>
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <AnimatePresence>
      <h1 className="text-center"> user manager </h1>
      <button onClick={getDataFromBackend} className="btn btn-primary">
        {" "}
        <i class="fa fa-refresh" aria-hidden="true"></i>{" "}
      </button>
      <div className="row">
        <div className="col-md">{showUsers()}</div>

        {showForm ? (
          <div className="col-md">
            <UpdateUser userFormData={userFormData} />
          </div>
        ) : (
          ""
        )}
      </div>
    </AnimatePresence>
  );
};

export default UserManager;
