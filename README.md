# Trekhome 🏡

**Trekhome** is a Node.js + Express + MongoDB application serving dynamic listings (e.g. vacation rentals). It uses **EJS** for templating and **Cloudinary** for image uploads. Built as a web platform to showcase places to stay with filters and taxation options.

---

## 🚀 Features

- User can create listings with:
  - Title, description, location, country, price
  - Image upload via [Cloudinary] for streamlined media hosting
- Explore browse page with:
  - Card layout, responsive to different screen sizes
  - Filters UI (e.g. Trending, Rooms, Mountains, etc.)
  - Option to display tax calculations dynamically
- Uniform card styling with fixed image height for clean visual alignment
- Environment variable support for sensitive configurations
- GitHub integration with CI/CD deployment on platforms like Railway/Render

---

## 🧱 Tech Stack

- **Node.js**, **Express.js** backend
- **EJS** templating engine
- **MongoDB** (Atlas recommended) for database
- **Cloudinary** for image storage + Multer for upload handling
- **Bootstrap 5** + custom CSS for responsive frontend layout
- Deployed via platforms like **Railway** (free, no credit card needed) or **Render**

------------------------------------------------

## 🔧 Getting Started

### 1. Clone the repository
git clone https://github.com/hubalichanna/Trekhome.
cd Trekhome

---------------------------------------------
# Install dependencies
npm install

---------------------------------------------
3. Setup environment variables
Create a .env file in the root with:

DB_URL=<your MongoDB connection URI>
CLOUDINARY_CLOUD_NAME=<cloudinary cloud name>
CLOUDINARY_KEY=<cloudinary API key>
CLOUDINARY_SECRET=<cloudinary API secret>
SESSION_SECRET=<random session secret>
PORT=<optional: defaults to 3000>


-------------------------------------------
# Run the app locally
npm start
Visit http://localhost:3000 in your browser


# ❤️ Contributing
Contributions, issues, or enhancement ideas are welcome!
Feel free to open a Pull Request or issue on GitHub.


# 📌 Author
hubalichanna — developer of Trekhome
GitHub: https://github.com/hubalichanna/Trekhome


---------------------------------------------------

### 📌 Tips:
