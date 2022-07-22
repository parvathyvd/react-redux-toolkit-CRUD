import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import TextField from "./TextField";
import { addUser, editUser } from "./users/user-slice";

const EditUser = () => {
  const params = useParams();
  const users = useSelector((state) => state.user);
  const id = params.id;
  const existingUser = users.filter((user) => user.id === id);
  console.log("existing user is", existingUser);
  const { name, email } = existingUser[0];
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: name,
    email: email,
  });
  const dispatch = useDispatch();
  const handleEditUser = () => {
    console.log(values);
    //dispatch adduser on redux
    dispatch(editUser({ id: id, name: values.name, email: values.email }));
    //clear input fields

    //navigate to home '/'
    navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: "John Doe" }}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        value={values.name}
      />
      <br />
      <TextField
        label="Email"
        inputProps={{ type: "email", placeholder: "JohnDoe@gamil.com" }}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
