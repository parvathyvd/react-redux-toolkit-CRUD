import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextField from "./TextField";
import { addUser } from "./users/user-slice";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const dispatch = useDispatch();
  const handleAddUser = () => {
    console.log(values);
    //dispatch adduser on redux
    dispatch(addUser({ id: uuidv4(), name: values.name, email: values.email }));
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
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
