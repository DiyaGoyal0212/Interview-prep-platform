import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the Express backend
  useEffect(() => {
    axios.get('http://localhost:5000/fetch-programming-content')
      .then(response => {
        setContent(response.data);  // Set the content from the API
        setLoading(false);  // Set loading to false once content is fetched
      })
      .catch(error => {
        console.error('There was an error fetching the content!', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Programming Content</h1>
      <div>
        {content.length === 0 ? (
          <p>No content available</p>
        ) : (
          content.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
