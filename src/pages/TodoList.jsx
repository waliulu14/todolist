import React, { useState, useEffect } from "react";
import { RenderList } from "../assets/components/renderList/RenderList";
import list from "../data/data.json";
import image from "../assets/images/Group 177.png";

export const TodoList = () => {
  const [InputValue, setInputValue] = useState("");
  const [DataSearch, setDataSearch] = useState("");
  const [DataAwal, setDataAwal] = useState("");
  const [DataValue, setDataValue] = useState(list);
  const [filterType, setFilterType] = useState("all"); // Default filter type

  useEffect(() => {
    setDataAwal(list);
  }, []);

  const [newData, setNewData] = useState("");

  const addData = () => {
    if (newData) {
      let num = DataValue.length + 1;
      let newEntry = { id: num, nama: newData, check: false };
      setDataValue([...DataValue, newEntry]);
      setNewData("");
    }
  };

  const deleteData = (id) => {
    let num = DataValue.filter((databaru) => databaru.id !== id);
    setDataValue(num);
  };

  const deleteAll = () => {
    setDataValue([]);
  };

  const deleteDoneTask = () => {
    const deleteDone = DataValue.filter((value) => !value.check);
    setDataValue(deleteDone);
  };

  const filterData = () => {
    setDataValue(
      DataAwal.filter((valueFilter) =>
        valueFilter.nama.toLowerCase().includes(DataSearch.toLowerCase())
      )
    );
  };

  const renderList = () => {
    return DataValue.map((value) => (
      <RenderList deleteData={deleteData} key={value.id} data={value} />
    ));
  };

  // Fungsi untuk menerapkan filter berdasarkan tipe
  const applyFilter = (type) => {
    setFilterType(type);
    switch (type) {
      case "all":
        setDataValue(DataAwal);
        break;
      case "done":
        setDataValue(DataAwal.filter((value) => value.check));
        break;
      case "todo":
        setDataValue(DataAwal.filter((value) => !value.check));
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto p-4 rounded-lg shadow-lg">
      <div className="text-center p-4 mb-4 rounded bg-gray-80">
        <h1 className="text-3xl mb-4">ToDoSearch</h1>
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt="search"
            className="w-10 h-10 mr-0 filter brightness-100 hue-187"
          />
           <input
    className="border p-2 flex-grow"
    onChange={(e) => {
      setDataSearch(e.target.value);
    }}
    placeholder="Search Todo"
  />
  <button
    className="bg-17a5b7 hover:bg-17a5b7 text-white py-2 px-4 rounded"
    onClick={() => {
      filterData();
    }}
  >
    Search
          </button>
        </div>
      </div>

      <div className="text-center bg-gray-50 p-4 mb-4 rounded border border-black-50">
        <h1 className="text-3xl">ToDo Input</h1>
        <div className="flex">
          <input
            onChange={(e) => {
              setNewData(e.target.value);
            }}
            placeholder="Input Data Todo"
            className="border p-2 mb-1 flex-grow"
          />
          <button
            className="bg-17a5b7 hover:bg-17a5b7 text-white py-1 px-4 rounded ml-2"
            onClick={() => {
              addData();
            }}
          >
            Submit
          </button>
        </div>
      </div>

      <h1 className="text-3xl mb-4 text-center">TodoList</h1>

      {/* Tombol Filter */}
      <div className="flex justify-center space-x-4 mb-4">
      <button
    className={`bg-17a5b7 hover:bg-gray-400 text-white py-2 px-4 rounded ${
      filterType === "all" ? "bg-17a5b7 hover:bg-gray-400 text-white" : "text-gray-700 hover:bg-gray-400 hover:text-white"
    }`}
    onClick={() => {
      applyFilter("all");
    }}
  >
    All
  </button>
  <button
    className={`bg-17a5b7 hover:bg-gray-400 text-white py-2 px-4 rounded ${
      filterType === "done" ? "bg-17a5b7 hover:bg-gray-400 text-white" : "text-gray-700 hover:bg-gray-400 hover:text-white"
    }`}
    onClick={() => {
      applyFilter("done");
    }}
  >
    Done
  </button>
  <button
    className={`bg-17a5b7 hover:bg-gray-400 text-white py-2 px-4 rounded ${
      filterType === "todo" ? "bg-17a5b7 hover:bg-gray-400 text-white" : "text-gray-700 hover:bg-gray-400 hover:text-white"
    }`}
    onClick={() => {
      applyFilter("todo");
    }}
  >
    Todo
  </button>
      </div>

      <div className="bg-gray-50 p-4 mb-4 rounded border border-black-50">
        {renderList()}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          onClick={() => {
            deleteAll();
          }}
        >
          Delete All
        </button>

        <button
          className="bg-red-500 hover.bg-red-700 text-white py-2 px-4 rounded"
          onClick={() => {
            deleteDoneTask();
          }}
        >
          Delete Done Task
        </button>
      </div>
    </div>
  );
};
