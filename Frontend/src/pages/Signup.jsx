import UserAuth from "../components/UserAuth";

export default function Signup() {
  const handleSignup = ({ name, email, password }) => {
    // TODO: replace with real signup call
    console.log("SIGN-UP →", { name, email, password });
  };

  return (
    <UserAuth
      isSignup
      title="Create your account"
      subtitle="Please enter your details to sign up for WasDo"
      buttonText="Sign Up"
      onSubmit={handleSignup}
    />
  );
}
