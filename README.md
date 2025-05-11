# Wanderlust - Full Stack MERN Application

Wanderlust is a full-stack web application designed to help users explore, create, and manage travel listings. It allows users to browse listings, create new ones, leave reviews, and manage their accounts. The application is built using the MERN stack (MongoDB, Express.js, React, Node.js) and integrates additional tools like Cloudinary for image storage and OpenCage for geocoding.

## Live Demo

Check out the live version of Wanderlust here: [Wanderlust Live Demo](https://wanderlust-project-wgvw.onrender.com/listings)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Acknowledgments](#acknowledgments)

---

## Features

- **User Authentication**:
  - Sign up, log in, and log out using Passport.js.
  - Passwords are securely hashed using bcrypt for enhanced security.
- **Travel Listings**:
  - Create, edit, and delete listings.
  - Upload images for listings using Cloudinary.
  - Geocode locations using OpenCage API.
- **Reviews**:
  - Leave reviews with ratings and comments.
  - Delete reviews if you are the author.
- **Dynamic Map Integration**: Display listing locations on an interactive map using Leaflet.js.
- **Responsive Design**: Fully responsive UI built with Bootstrap 5.
- **Flash Messages**: Display success and error messages using connect-flash.

---

## Technologies Used

### Database

- **MongoDB**: NoSQL database for storing user, listing, and review data.
- **Mongoose**: ODM for MongoDB.

### Backend

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.

### Frontend

- **EJS**: Template engine for rendering dynamic HTML.
- **Bootstrap 5**: CSS framework for responsive design.

### Additional Tools

- **Cloudinary**: Image storage and management.
- **Multer**: Middleware for handling file uploads.
- **OpenCage API**: Geocoding service for location data.
- **Leaflet.js**: Interactive maps for displaying listing locations.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Khushi-Mohammd/Wanderlust.git
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

---

## Environment Variables

Create a .env file in the root directory and add the following variables:

```ini
CLOUD_NAME=your-cloudinary-cloud-name
CLOUD_API_KEY=your-cloudinary-api-key
CLOUD_API_SECRET=your-cloudinary-api-secret
MAP_API_KEY=your-opencage-api-key
```

### Usage

1. Start the development server:

   ```bash
   node app.js
   ```

2. Open your browser and navigate to:
   `http://localhost:8080`

3. Explore the application:

   - Sign up or log in.
   - Create new travel listings.
   - Leave reviews for listings.
   - View listing locations on the map.

---

### Screenshots

Home Page

![image](/Screenshots/Image1.png)

Listing Details

![image](/Screenshots/Image2.png)
![image](/Screenshots/Image3.png)

Create Listing

![image](/Screenshots/Image4.png)

---

### Future Enhancements

- Responsive UI improvements

- Full-text search and filters

- Profile pages for users

- Email verification & password reset

---

### Acknowledgments

- [Bootstrap](https://getbootstrap.com/) - CSS framework for responsive design.
- [Cloudinary](https://cloudinary.com/) - Image storage and management.
- [OpenCage Geocoder](https://opencagedata.com/) - Geocoding service for location data.
- [Leaflet.js](https://leafletjs.com/) - Interactive maps for displaying listing locations.

Feel free to contribute to this project by submitting issues or pull requests!
