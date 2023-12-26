import React, { useState, useEffect } from 'react';
import data from './data.json';

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);




  useEffect(() => {
    setTableData(data);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Table</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Image</th> 

              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>

            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                     
            <td className="border border-gray-300 px-4 py-2">
                  <img src={item.image} alt={`Product ${index + 1}`} className="w-12 h-12" />
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                <td className="border border-gray-300 px-4 py-2">{item.price}</td>
                <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
         
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;


