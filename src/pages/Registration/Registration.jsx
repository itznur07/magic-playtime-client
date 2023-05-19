import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
// import loginImg from "../../assets/images/login/login.svg";

const Registration = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    const userInfo = {
      name,
      email,
      password,
      photoURL,
    };
  };

  /** custom useTitle hook call */
  useTitle("Create an account");

  
  return (
    <div className='flex justify-center space-x-24 items-center my-14'>
      <form
        onSubmit={handleSignUp}
        className='bg-white py-14 px-28 rounded-lg border border-[#e52165]'
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
            className='w-full border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#e52165] focus:border-transparent'
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
            className='w-full border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#e52165] focus:border-transparent'
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
            className='w-full border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#e52165] focus:border-transparent'
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
            className='w-full border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#e52165] focus:border-transparent'
          />
        </div>
        <button
          type='submit'
          className='bg-[#e52165] hover:bg-[#0d1137] text-white w-full font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Signup
        </button>
        <button
          type='button'
          className='bg-red-600 hover:bg-[#0d1137] text-white w-full font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          <div className='flex justify-center items-center space-x-2'>
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
