import React, { useState } from "react";

// props
export const RenderList = ({ deleteData, data }) => {
  const [Nama, setNama] = useState(data.nama);
  const [Check, setCheck] = useState(data.check);
  const [OnEdit, setOnEdit] = useState(false);

  // Menambahkan gaya CSS ketika checkbox dicentang
  const textStyles = {
    textDecoration: Check ? "line-through" : "none",
    color: Check ? "gray" : "inherit",
  };

  return (
    <div className="border rounded-lg p-4 mb-4 flex items-center">
      {OnEdit ? (
        <input
          value={Nama}
          onChange={(e) => {
            setNama(e.target.value);
          }}
          className="border p-1 flex-grow"
        />
      ) : (
        <span
          className={`flex-grow`}
          style={textStyles} // Menggunakan gaya CSS yang telah ditentukan
        >
          {Nama}
        </span>
      )}

      <input
        checked={Check}
        type="checkbox"
        onChange={() => {
          setCheck(!Check);
        }}
        className="form-checkbox h-5 w-5 text-blue-600"
      />

      <button
        onClick={() => {
          setOnEdit(!OnEdit);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded ml-2"
      >
        {OnEdit ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => {
          deleteData(data.id);
        }}
        className="bg-red-500 hover.bg-red-700 text-white py-1 px-2 rounded ml-2"
      >
        Delete
      </button>
    </div>
  );
};
