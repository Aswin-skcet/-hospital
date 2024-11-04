import { useState } from 'react';
import { format } from 'date-fns';

function Dashboard() {
  const [stats] = useState({
    totalPatients: 156,
    todayAppointments: 24,
    availableDoctors: 8
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700">Total Patients</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalPatients}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700">Today's Appointments</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">{stats.todayAppointments}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700">Available Doctors</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">{stats.availableDoctors}</p>
        </div>
      </div>
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium text-gray-800">Patient Check-in</p>
                <p className="text-sm text-gray-500">John Doe - General Checkup</p>
              </div>
              <span className="text-sm text-gray-500">
                {format(new Date(), 'MMM d, yyyy')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;