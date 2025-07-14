import UserAuth from "../components/UserAuth";

export default function Login() {
  const handleLogin = ({ email, password }) => {
    console.log("LOGIN →", { email, password });
  };

  return <UserAuth onSubmit={handleLogin} />;
}
