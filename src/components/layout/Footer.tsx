
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-pharmacy-600">Alvas College of Pharmacy</h3>
            <p className="text-gray-600 text-sm">
              Dedicated to excellence in pharmacy education, research, and practice.
            </p>
            <div className="pt-2">
              <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Alvas College of Pharmacy</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/program" className="text-gray-600 hover:text-pharmacy-600 transition-colors">
                  B.Pharm
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pharmacy-600 transition-colors">
                  M.Pharm
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pharmacy-600 transition-colors">
                  Pharm.D
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pharmacy-600 transition-colors">
                  Ph.D
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pharmacy-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/program" className="text-gray-600 hover:text-pharmacy-600 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="text-gray-600 hover:text-pharmacy-600 transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-pharmacy-600 transition-colors">
                  Career Prospects
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">
                Alvas Campus, Moodbidri
              </li>
              <li className="text-gray-600">
                Mangalore, Karnataka
              </li>
              <li className="text-gray-600">
                Email: info@alvascollege.com
              </li>
              <li className="text-gray-600">
                Phone: +91 9876543210
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
