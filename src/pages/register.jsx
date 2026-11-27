
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/FormSchema/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerschema),
  });

  function onsubmit(data) {
    console.log(data);
    alert("Registration successful!");
    navigate("/login", { state: data });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <form onSubmit={handleSubmit(onsubmit)} className="bg-gray-950 p-10 rounded-xl shadow-lg flex flex-col gap-4 border border-orange-500 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-orange-500">GAMER HUB</h1>
        
        <label className="text-sm font-semibold text-orange-400">Full Name</label>
        <input type="text" placeholder="Enter your name" className="bg-orange-100 text-black border border-orange-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500" {...register("name")} />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>

        <label className="text-sm font-semibold text-orange-400">Email</label>
        <input type="email" placeholder="Enter your email" className="bg-orange-100 text-black border border-orange-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500" {...register("email")} />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <label className="text-sm font-semibold text-orange-400">Password</label>
        <input type="password" placeholder="Enter your password" className="bg-orange-100 text-black border border-orange-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500" {...register("password")} />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>

        <label className="text-sm font-semibold text-orange-400">Age</label>
        <input type="number" placeholder="Enter your age" className="bg-orange-100 text-black border border-orange-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500" {...register("age", { valueAsNumber: true })} />
        <p className="text-red-500 text-sm">{errors.age?.message}</p>

        <button type="submit" className="bg-orange-500 text-black p-3 rounded-lg font-bold hover:bg-orange-600 transition duration-200 mt-2">
          LORD PRAJIT WELCOMES YOU
        </button>
      </form>
    </div>
  );
}

export default Register;
