import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Login() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

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
        navigate("/editor");
      } )}>
      <h1>Logga in</h1>
      <input {...register("username")} placeholder="Användarnamn" />
      <input type="password" {...register("password")} placeholder="Lösenord" />
      <input type="submit" value="Logga in" />
    </form>
  );
}
