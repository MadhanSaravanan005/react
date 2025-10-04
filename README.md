# 🎓 Student Record Management System

A full-stack web application for managing student records with CRUD operations, built with React.js, Node.js, Express.js, and MongoDB.

## 🚀 Features

- ✅ Add new student records
- ✅ View all students in a table format
- ✅ Delete student records
- ✅ Update student information
- ✅ Responsive web design
- ✅ Real-time data synchronization
- ✅ MongoDB Atlas integration

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface library
- **Redux Toolkit** - State management
- **Axios** - HTTP client for API calls
- **CSS** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📦 Project Structure

```
student-record-management/
├── backend/
│   ├── models/
│   │   └── Student.js          # Student data model
│   ├── routes/
│   │   └── studentRoutes.js    # API routes
│   ├── .env.example           # Environment variables template
│   └── server.js              # Express server setup
├── frontend/
│   ├── public/                # Static files
│   ├── src/
│   │   ├── redux/
│   │   │   ├── store.js       # Redux store configuration
│   │   │   └── studentSlice.js # Redux slice for student data
│   │   ├── App.js             # Main React component
│   │   └── index.js           # React entry point
│   └── package.json           # Frontend dependencies
├── package.json               # Root package.json
├── vercel.json               # Vercel deployment configuration
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/student-record-management.git
   cd student-record-management
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend
   npm install
   cd ..
   ```

3. **Environment Setup**
   ```bash
   # Copy environment template
   cp backend/.env.example backend/.env
   ```
   
   Edit `backend/.env` and add your MongoDB connection string:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/student-records?retryWrites=true&w=majority
   PORT=5000
   ```

4. **Run the application**
   
   **Terminal 1 - Backend:**
   ```bash
   npm start
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | Get all students |
| POST | `/api/students` | Create a new student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |

### Student Data Model
```json
{
  "name": "String (required)",
  "regNo": "String (required, unique)",
  "department": "String (required)",
  "year": "Number (required)"
}
```

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Set environment variables in Vercel dashboard:
     - `MONGO_URI`: Your MongoDB connection string
   - Deploy automatically

3. **Environment Variables**
   Set these in your Vercel dashboard:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

### Manual Deployment
```bash
# Build frontend
npm run build

# Deploy to your preferred hosting service
```

## 🧪 Testing

### Backend API Testing
```bash
# Test connection
curl http://localhost:5000/api/test

# Get all students
curl http://localhost:5000/api/students

# Create a student
curl -X POST http://localhost:5000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","regNo":"2024001","department":"Computer Science","year":1}'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Contact

- **Developer**: [Your Name]
- **Email**: [your.email@example.com]
- **GitHub**: [https://github.com/yourusername](https://github.com/yourusername)

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure your IP is whitelisted in MongoDB Atlas
   - Check your connection string format
   - Verify database user permissions

2. **Frontend not loading**
   - Check if both servers are running
   - Verify API URL in `studentSlice.js`
   - Clear browser cache

3. **CORS Issues**
   - Ensure CORS is enabled in backend
   - Check if API calls are using correct URLs

### Development Tips
- Use separate terminals for frontend and backend
- Check browser console for frontend errors
- Monitor backend logs for API issues
- Use MongoDB Compass to view database data

---

**Happy Coding! 🚀**