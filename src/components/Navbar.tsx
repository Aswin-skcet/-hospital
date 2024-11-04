import { Link } from 'react-router-dom';
import {
  HomeIcon,
  UserGroupIcon,
  UserMdIcon,
  BeakerIcon,
  CreditCardIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

function Navbar() {
  const navItems = [
    { path: '/dashboard', icon: HomeIcon, label: 'Dashboard' },
    { path: '/patients', icon: UserGroupIcon, label: 'Patients' },
    { path: '/doctors', icon: UserMdIcon, label: 'Doctors' },
    { path: '/nurses', icon: UsersIcon, label: 'Nurses' },
    { path: '/lab-tests', icon: BeakerIcon, label: 'Lab Tests' },
    { path: '/payments', icon: CreditCardIcon, label: 'Payments' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            MediCare+
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                <item.icon className="h-5 w-5 mr-1" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}