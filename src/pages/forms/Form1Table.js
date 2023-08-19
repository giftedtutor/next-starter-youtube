import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../../../baseURL';

const Form1Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint or use your data source
    fetchData();
  }, []);

  const fetchData = async () => {
  axios.get(`${baseURL}/categories/getCategories`).then(res => {
    console.log('RES::::::', res)
    setData(res.data.data)
  }).catch(err => console.log(err))
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Data Table</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>
                <img src={`${baseURL}/files/images/${data.image}`}  alt={data.title} style={{ width: '100px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form1Table;
