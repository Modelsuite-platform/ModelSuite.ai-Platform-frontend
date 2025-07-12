import { Link } from "react-router-dom";


const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white flex flex-col">
    <nav className="bg-gray-900 border-b border-gray-800 shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold tracking-tight text-white">ModelSuite</h1>
      <div className="space-x-4">
        <Link to="/model/login" className="text-blue-400 hover:text-blue-200 font-semibold transition">Model Login</Link>
        <Link to="/agency/login" className="text-green-400 hover:text-green-200 font-semibold transition">Agency Login</Link>
      </div>
    </nav>

    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <section className="w-full max-w-2xl text-center mt-16 mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-sm">Welcome to <span className="text-blue-400">ModelSuite</span></h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">A modern platform connecting models and agencies with ease, security, and style.</p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-blue-500 hover:shadow-2xl transition">
          <h3 className="text-xl font-bold text-blue-400 mb-4">For Models</h3>
          <Link to="/model/register" className="w-full bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700 font-semibold mb-3 transition">Register</Link>
          <Link to="/model/login" className="w-full border border-blue-600 text-blue-400 py-2 rounded-lg text-center hover:bg-blue-900 font-semibold transition">Login</Link>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-green-500 hover:shadow-2xl transition">
          <h3 className="text-xl font-bold text-green-400 mb-4">For Agencies</h3>
          <Link to="/agency/register" className="w-full bg-green-600 text-white py-2 rounded-lg text-center hover:bg-green-700 font-semibold mb-3 transition">Register</Link>
          <Link to="/agency/login" className="w-full border border-green-600 text-green-400 py-2 rounded-lg text-center hover:bg-green-900 font-semibold transition">Login</Link>
        </div>
      </div>
    </main>

    <footer className="mt-auto py-6 text-center text-gray-500 text-sm border-t border-gray-800 bg-gray-900">
      &copy; {new Date().getFullYear()} ModelSuite. All rights reserved.
    </footer>
  </div>
);

export default Home;
