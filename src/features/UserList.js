import React from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./users/user-slice";

const UserList = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("user is", users);

  const renderCard = () => {
    return users.map((user) => {
      return (
        <div
          className="bg-gray-300 p-5 flex items-cetner justify-between"
          key={user.id}
        >
          <div>
            <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
            <span className="font-normal text-normal">{user.email}</span>
          </div>
          <div className="flex gap-4 items-center">
            <Link to={`/edit-user/${user.id}`}>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            </Link>
            <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                />
              </svg>
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <Link to="/add-user">
        <Button>Add User</Button>
      </Link>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No user
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;
