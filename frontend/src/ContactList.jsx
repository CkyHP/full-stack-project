import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left border">First Name</th>
            <th className="p-2 text-left border">Last Name</th>
            <th className="p-2 text-left border">Email</th>
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="border-b hover:bg-gray-50">
              <td className="p-2 border">{contact.firstName}</td>
              <td className="p-2 border">{contact.lastName}</td>
              <td className="p-2 border">{contact.email}</td>
              <td className="p-2 border">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">
                  Update
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
