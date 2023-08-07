import React, { useState } from 'react';
import Form1Table from './Form1Table'
import {baseURL} from '../../../baseURL'
import axios from 'axios'
const Form1 = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const uploadImageFunction = (File) => {
    console.log("Image Res::::");
    const formData = new FormData();
    formData.append("files", File);

    axios.post(`${baseURL}/categories/uploadImage`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(res => {
        console.log("Image Res::::", res.data.data[0].img);
        if (res.data.messsage === "Files Uploaded") {
          setImage(res.data.data[0]?.img)
        }
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault();


    // Call the function to submit data to the backend
    await submitDataToBackend({ title, description, image });

    // Clear the form after submission
    setTitle('');
    setDescription('');
    setCategory('');
    setImage(null);
  };

  const submitDataToBackend = async (data) => {
    // Implement your logic here to send the data to the backend
    // For example:
    await fetch(`${baseURL}/categories/addCategory`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Data submitted to the backend:', data);
  };

  return (
    <div className="container" style={{width: '50%'}}>
      <h1 className="mt-5 mb-4">Form1</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title (Category Name)</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
     
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            accept="image/*"
            onChange={(e) => {
              uploadImageFunction(e.target.files[0])
            }}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {/* <Form1Table /> */}
    </div>
  );
};

export default Form1;
