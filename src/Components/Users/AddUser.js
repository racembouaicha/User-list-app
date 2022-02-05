import React, { useState } from "react";

import Errormodal from '../UI/ErrorModal';
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [entredUsername, setEntredUsername] = useState("");
  const [entredAge, setEntredAge] = useState("");
  const [error,setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (entredUsername.trim().length === 0 || entredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message:'Please entre a valid name and age (non-empty values).'
      })
      return;
    }
    if (+entredAge < 1) {
      setError({
        title: 'Invalid age',
        message:'Please entre a valid age ( >0 ).'
      })
      return;
    }
    props.onAddUser(entredUsername, entredAge);
    setEntredUsername("");
    setEntredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEntredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEntredAge(event.target.value);
  };

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <div>
   {error && <Errormodal title={error.title} message={error.message} onConfirm={errorHandler}/>}  
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={entredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Year)</label>
        <input
          id="age"
          type="number"
          value={entredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;