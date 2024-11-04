import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

function LandingPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Advanced Healthcare Management System
            </h1>
            <p className="text-xl mb-8">
              Streamline your hospital operations with our comprehensive management solution.
              Efficiently manage patients, staff, and resources all in one place.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Patient Management"
            description="Efficiently manage patient records, appointments, and medical history."
          />
          <FeatureCard
            title="Staff Administration"
            description="Coordinate doctors, nurses, and support staff schedules and assignments."
          />
          <FeatureCard
            title="Laboratory & Payments"
            description="Track lab tests, results, and manage billing all in one place."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default LandingPage;