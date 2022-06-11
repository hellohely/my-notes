import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import React, { useState, useEffect } from "react";

export function Login() {
  const cookies = new Cookies();
  let userId = cookies.get("userId");
  const [loggedIn, setLoggedIn] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
      if (userId === "12345") {
        setLoggedIn(true);
      }
    }, [userId]);

    if(loggedIn) {
      navigate("/documents")
    }

  return (
    <form
      onSubmit={handleSubmit (async function login(data) {
        try {
          const response = await fetch("http://localhost:3000/authorization", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(data),
          });
          console.log(response);
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.log(error);
        }
        navigate("/documents");
      } )}>
      <h1>Log in</h1>
      <input {...register("username")} placeholder="Username" />
      <input type="password" {...register("password")} placeholder="Password" />
      <input type="submit" value="Log in" />
    </form>
  );
}
