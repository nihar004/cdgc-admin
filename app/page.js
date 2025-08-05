"use client";

import Link from 'next/link';
import { FaUserGraduate, FaBuilding, FaComments, FaChartBar } from 'react-icons/fa';
import { MdEventAvailable, MdTrackChanges } from 'react-icons/md';

export default function Home() {
  const modules = [
    {
      title: "Student Management",
      description: "Track and manage student profiles, placements, and eligibility",
      icon: <FaUserGraduate className="w-8 h-8" />,
      link: "/students",
      color: "bg-blue-500"
    },
    {
      title: "Company Listing",
      description: "Manage recruiting companies and their visit schedules",
      icon: <FaBuilding className="w-8 h-8" />,
      link: "/company-listing",
      color: "bg-green-500"
    },
    {
      title: "Communication Hub",
      description: "Send emails, create forms, and manage notifications",
      icon: <FaComments className="w-8 h-8" />,
      link: "/communication",
      color: "bg-purple-500"
    },
    {
      title: "Round Tracking",
      description: "Monitor selection rounds and candidate progress",
      icon: <MdTrackChanges className="w-8 h-8" />,
      link: "/round-tracking",
      color: "bg-orange-500"
    },
    {
      title: "Events & Attendance",
      description: "Manage placement events and track attendance",
      icon: <MdEventAvailable className="w-8 h-8" />,
      link: "/event-and-attendance",
      color: "bg-red-500"
    },
    {
      title: "Analytics Dashboard",
      description: "View placement statistics and insights",
      icon: <FaChartBar className="w-8 h-8" />,
      link: "/analytics",
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Career Development & Guidance Cell
          </h1>
          <p className="text-gray-600 mt-2">
            College Placement Portal
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Link href={module.link} key={index}>
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer transform hover:-translate-y-1 hover:scale-102 transition-transform duration-300">
                <div className={`${module.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
                  {module.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {module.title}
                </h2>
                <p className="text-gray-600">
                  {module.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}