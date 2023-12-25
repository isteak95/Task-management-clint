import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const { errors } = formState;

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password, data.name, data.photoURL)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log('user profile info updated');
            reset(); // Clear the form data
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'User created successfully.',
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/'); // Redirect to the home page
          })
          .catch(error => console.log(error));
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-slate-300">
        <div className="hero-content flex-col">
          <h2 className="text-5xl text-center">SignUp</h2>
          <div className="card flex-shrink-0 rounded-none shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="h-[800px] lg:w-[490px] md:w-[490px] card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true })} placeholder="Password" className="input input-bordered" />
                {errors.password && <span className="text-red-600">Password is required</span>}
              </div>
              <div className="mt-5">
                <p className="mb-3 text-sm text-gray-500">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
                <label className="label">
                  <Link to="/signin">
                    <a className="label-text-alt text-lg link link-hover">
                      Sign In
                    </a>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn rounded-none bg-gray-600 text-white" type="submit" value="Sign Up" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
