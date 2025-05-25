
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">JobSeek<span className="text-brand-blue-300">Connect</span></h2>
            <p className="text-gray-300 mb-4">Connecting tech talent with great opportunities</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Students</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-300 hover:text-white transition">Browse Jobs</Link></li>
              <li><Link to="/register" className="text-gray-300 hover:text-white transition">Create Profile</Link></li>
              <li><Link to="/student" className="text-gray-300 hover:text-white transition">Upload Resume</Link></li>
              <li><Link to="/student/applications" className="text-gray-300 hover:text-white transition">Track Applications</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Recruiters</h3>
            <ul className="space-y-2">
              <li><Link to="/register" className="text-gray-300 hover:text-white transition">Post a Job</Link></li>
              <li><Link to="/recruiter" className="text-gray-300 hover:text-white transition">Manage Listings</Link></li>
              <li><Link to="/recruiter/applications" className="text-gray-300 hover:text-white transition">Review Applications</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Contact</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} JobSeek. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
