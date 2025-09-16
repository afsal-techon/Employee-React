import React from 'react'

const ConfirmBox =({ open, onClose, onConfirm, title, message }) => {
    if (!open) return null;
   return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-40 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-96">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{message}</p>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBox