import React, { useState } from 'react';

const categories = ['Cat A', 'Cat B', 'Cat C'];

const NewProductTable = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    id: Date.now(), // Assigning a unique ID to the new product

    name: '',
    category: '',
    price: '',
    quantity: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleCategoryChange = (e) => {
    setNewProduct({
      ...newProduct,
      category: e.target.value,
    });
  };

  const handleCreate = () => {
    addProduct(newProduct);
    setNewProduct({
        id: Date.now(), // Assigning a new ID for the next new product

      name: '',
      category: '',
      price: '',
      quantity: '',
      image: '',
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">New Product Table</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <select
                name="category"
                value={newProduct.category}
                onChange={handleCategoryChange}
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <input
                type="number"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </td>
                        </tr>
        </tbody>
      </table>
      <button
        onClick={handleCreate}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:bg-blue-600"
      >
        Create
      </button>
    </div>
  );
};

export default NewProductTable;

