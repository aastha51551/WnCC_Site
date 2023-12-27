import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Button } from 'react-bootstrap';

const GoogleDriveImages = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const CLIENT_ID = '973926251486-f56esu9ddbh16u926thlrc9ou3q1i67b.apps.googleusercontent.com';
        const API_KEY = 'AIzaSyCS7Qf7a5XXh7Mt3eO71IJeEPQ2GWUENzc';
        const FOLDER_ID = '1MXd67bXqHmAoRJHU11N8qwWtAXzhvMq4';

        // Fetch access token
        const accessTokenResponse = await axios.post(
          `https://oauth2.googleapis.com/token`,
          `client_id=${CLIENT_ID}&client_secret=${API_KEY}&grant_type=client_credentials`
        );

        const accessToken = accessTokenResponse.data.access_token;

        // Fetch image URLs with access token
        const response = await axios.get(
            `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&access_token=${accessToken}&fields=files(id,name,webContentLink}`
          );
          

        const files = response.data.files;
        const urls = files.map((file) => ({
          id: file.id,
          name: file.name,
          url: file.webContentLink,
        }));

        setImageUrls(urls);
        console.log('imageUrls:', urls);
      } catch (error) {
        console.error('Error fetching image URLs', error);
      }
    };

    fetchImageUrls();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <Carousel>
            {imageUrls.map((image, index) => (
              <Carousel.Item key={image.id} active={index === currentIndex}>
                <img src={image.url} alt={image.name} className="d-block w-100" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-6">
          <Button variant="primary" onClick={handlePrev} className="mr-2">
            Previous
          </Button>
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GoogleDriveImages;
