import { useState } from "react";

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex z-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg">
        {/* Modal Header */}
        <div className="px-6 py-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold text-black">Title</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>

        {/* Modal Body  */}
        <div className="p-6">
          {/* Search Input Field */}
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            placeholder="Type to search..."
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t flex justify-end">
          <button
            onClick={() => setShowModal(false)}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const customModal = () => {
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  return (
    <div>
      <button
        onClick={() => setShowModal(true)} // Show modal on click
      >
        button
      </button>
      {/* Search Modal */}
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default customModal;
