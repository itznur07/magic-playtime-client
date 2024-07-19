import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProviders";

function Login() {
  const { logInWithEmailPassword, signInWithGoogle, forgetPassword } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInWithEmailPassword(email, password)
      .then(() => {
        alert("User Login Successfully!");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForgetPassword = (email) => {
    forgetPassword(email);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        alert("Sign in successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /** custom useTitle hook call */
  useTitle("Login");

  return (
    <div className='flex justify-center space-x-24 items-center my-14'>
      <form
        onSubmit={handleSignIn}
        className='w-[500px] bg-gray-100 py-14 px-14   border-[#e52165]'
      >
        <h2 className='text-3xl text-center font-bold text-gray-800 mb-10'>
          Login
        </h2>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            name='email'
            required
            id='email'
            className='w-full   py-3 px-4 text-gray-700 leading-tight focus:outline-none   '
          />
        </div>
        <div className='mb-2'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-bold mb-2'
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            required
            id='password'
            className='w-full   py-3 px-4 text-gray-700 leading-tight focus:outline-none   '
          />
        </div>
        <span className='text-sm mb-4'>
          Forget password?{" "}
          <span
            className='text-blue-500 cursor-pointer'
            onClick={handleForgetPassword}
          >
            reset
          </span>
        </span>
        <br />
        <br />
        <button
          type='submit'
          className='bg-black  text-white w-full font-bold py-3 mt-4 px-4 focus:outline-none focus:shadow-outline'
        >
          Login
        </button>
        <button
          type='button'
          className='bg-pink-500  text-white w-full font-bold py-3 mt-4 px-4  focus:outline-none focus:shadow-outline'
        >
          <div
            onClick={handleGoogleSignIn}
            className='flex justify-center items-center space-x-2'
          >
            <FaGoogle /> <span>Google</span>
          </div>
        </button>
        <div className='text-center my-4 text-sm font-medium'>
          or Sign in with
        </div>
        <div className='text-center text-md mt-3 text-sm text-slate-600'>
          New here?{" "}
          <Link to='/signup'>
            <span className='text-[#e52165] font-medium'>Sign up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
