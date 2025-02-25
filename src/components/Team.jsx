import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    designation: "Designation here",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.",
  },
  {
    id: 2,
    name: "Elina Williams",
    designation: "Designation here",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.",
  },
  {
    id: 3,
    name: "John Smith",
    designation: "Designation here",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.",
  },
];

export const Team = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-50">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Team</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh.
        </p>
      </div>

      {/* Team Members */}
      <div className="space-y-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center p-4 bg-white rounded-lg shadow-md border"
          >
            {/* Profile Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
            />

            {/* Info */}
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.designation}</p>
              <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};