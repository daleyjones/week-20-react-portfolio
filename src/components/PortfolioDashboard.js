import React, { useState } from "react";
import PortfolioList from "./PortfolioList";

function PortfolioDashboard() {
  // Sample data for portfolio items (you can replace this with your own data)
  const initialPortfolioItems = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      imageUrl: "project1.jpg",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      imageUrl: "project2.jpg",
      link: "https://example.com/project2",
    },
    // Add more portfolio items as needed
  ];

  const [portfolioItems, setPortfolioItems] = useState(initialPortfolioItems);

  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    imageUrl: "",
    link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const handleAddItem = () => {
    // Validate and add the new item to the portfolioItems array
    if (newItem.title && newItem.description && newItem.imageUrl && newItem.link) {
      setPortfolioItems([...portfolioItems, newItem]);
      setNewItem({
        title: "",
        description: "",
        imageUrl: "",
        link: "",
      });
    }
  };

  const handleEditItem = (index) => {
    // Implement editing functionality here
    // You can open a modal or form for editing the selected item
  };

  const handleDeleteItem = (index) => {
    const updatedItems = portfolioItems.filter((_, i) => i !== index);
    setPortfolioItems(updatedItems);
  };

  return (
    <div>
      <h2>Portfolio Dashboard</h2>

      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={newItem.title}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={newItem.description}
            onChange={handleInputChange}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={newItem.imageUrl}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Link</label>
          <input
            type="text"
            name="link"
            value={newItem.link}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button
          type="button"
          onClick={handleAddItem}
          className="btn btn-primary"
        >
          Add Item
        </button>
      </form>

      <PortfolioList
        portfolioItems={portfolioItems}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default PortfolioDashboard;
