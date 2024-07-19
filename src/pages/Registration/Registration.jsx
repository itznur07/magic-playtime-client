import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProviders";

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const { userRegistration, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    /** registration function call */
    userRegistration(email, password)
      .then(() => {
        updateUserProfile(name, photoURL);
        alert("User registration succesfully!");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log("User sign up error:", error);
      });
  };

  /** Sign in with google */
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        alert("User sing in successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("google sign in error:", error);
      });
  };

  /** custom useTitle hook call */
  useTitle("Create an account");

  return (
    <div className='flex justify-center space-x-24 items-center my-14'>
      <form
        onSubmit={handleSignUp}
        className='w-[500px] bg-gray-100 py-14 px-14'
      >
        <h2 className='text-3xl text-center font-bold text-gray-800 mb-10'>
          Registration
        </h2>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            required
            className='w-full   py-3 px-4 text-gray-700 leading-tight focus:outline-none   '
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            required
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
            id='password'
            required
            className='w-full   py-3 px-4 text-gray-700 leading-tight focus:outline-none   '
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='photo' className='block text-gray-700 font-bold mb-2'>
            Photo URL
          </label>
          <input
            type='text'
            name='photo'
            required
            id='photo'
            className='w-full   py-3 px-4 text-gray-700 leading-tight focus:outline-none   '
          />
        </div>
        <br />
        <button
          type='submit'
          className='bg-black  text-white w-full font-bold py-3 mt-4 px-4  focus:outline-none focus:shadow-outline'
        >
          Signup
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
          already have an account?{" "}
          <Link to='/login'>
            <span className='text-[#e52165] font-medium'>Sign in</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
