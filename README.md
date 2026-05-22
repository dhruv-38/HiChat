# HiChat! 💬

A modern, real-time chat application built with the MERN stack, featuring secure authentication, instant messaging, and a beautiful UI.

![Node.js](https://img.shields.io/badge/Node.js-20+-green)
![React](https://img.shields.io/badge/React-19-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-8-green)
![Socket.io](https://img.shields.io/badge/Socket.io-4.8-black)

## 🌐 My Live Website

**[Try HiChat Live](https://hichat-i4qx.onrender.com)** 🚀

## ✨ Features

- 🔐 **Secure Authentication** - JWT-based auth with bcrypt password hashing
- 💬 **Real-time Messaging** - Instant message delivery with Socket.io
- 👤 **User Profiles** - Customizable profile pictures with Cloudinary integration
- 🎨 **Modern UI** - Beautiful interface with Tailwind CSS and DaisyUI
- 🔒 **Rate Limiting** - Arcjet protection against brute force attacks
- 📧 **Email Integration** - Welcome emails via Resend( Only for testing purpose, not active in live website )
- 🌐 **Responsive Design** - Works seamlessly on desktop and mobile
- 🚀 **Production Ready** - Optimized builds and deployment configuration

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern hooks
- **Vite** - Lightning-fast build tool
- **Zustand** - Lightweight state management
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Beautiful UI components
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **Socket.io Client** - Real-time communication
- **Lucide React** - Beautiful icons

### Backend
- **Node.js 20+** - JavaScript runtime
- **Express** - Fast, minimalist web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image upload and management
- **Resend** - Email service
- **Arcjet** - Security and rate limiting
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
HiChat/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Route controllers
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   ├── emails/            # Email templates and handlers
│   │   │   ├── emailHandlers.js
│   │   │   └── emailTemplates.js
│   │   ├── lib/               # Utility libraries
│   │   │   ├── arcjet.js
│   │   │   ├── cloudinary.js
│   │   │   ├── db.js
│   │   │   ├── env.js
│   │   │   ├── resend.js
│   │   │   ├── socket.js
│   │   │   └── utils.js
│   │   ├── middleware/        # Custom middleware
│   │   │   ├── arcjet.middleware.js
│   │   │   ├── auth.middleware.js
│   │   │   └── socket.auth.middleware.js
│   │   ├── models/            # Database models
│   │   │   ├── Message.js
│   │   │   └── User.js
│   │   ├── routes/            # API routes
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   └── server.js          # Entry point
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── sounds/            # Notification sounds
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── ActiveTabSwitch.jsx
│   │   │   ├── BorderAnimatedContainer.jsx
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   ├── ChatsList.jsx
│   │   │   ├── ContactList.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── MessagesLoadingSkeleton.jsx
│   │   │   ├── NoChatHistoryPlaceholder.jsx
│   │   │   ├── NoChatsFound.jsx
│   │   │   ├── NoConversationPlaceholder.jsx
│   │   │   ├── PageLoader.jsx
│   │   │   ├── ProfileHeader.jsx
│   │   │   └── UsersLoadingSkeleton.jsx
│   │   ├── hooks/             # Custom React hooks
│   │   │   └── useKeyboardSound.js
│   │   ├── lib/               # Utilities
│   │   │   └── axios.js
│   │   ├── pages/             # Page components
│   │   │   ├── ChatPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignUpPage.jsx
│   │   ├── store/             # Zustand stores
│   │   │   ├── useAuthStore.js
│   │   │   └── useChatStore.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── package.json               # Root package.json
└── README.md
```

## 🚀 Getting Started(To setup Locally)

### Prerequisites

- Node.js 20 or higher
- MongoDB database (local or MongoDB Atlas)
- Cloudinary account (for image uploads)
- Resend account (for emails)
- Arcjet account (for security)

### Environment Variables

Create `.env` file in the `backend` directory:

```env
# Server Configuration
NODE_ENV=development
PORT=3000
CLIENT_URL=http://localhost:5173

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/hichat?retryWrites=true&w=majority

# JWT
JWT_SECRET=your-super-secret-jwt-key-here

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Resend Email
RESEND_API_KEY=your-resend-api-key
EMAIL_FROM=onboarding@resend.dev
EMAIL_FROM_NAME="Your Name"

# Arcjet Security
ARCJET_KEY=your-arcjet-key
ARCJET_ENV=development
```

> **Note:** If using Postman for API testing, add **"POSTMAN"** to the **Allow** category in your arcjet.js to prevent it from being identified as a bot during development.

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/hichat.git
cd hichat
```

2. **Install dependencies**
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. **Set up environment variables**
```bash
# Create .env file in backend directory
cd backend
cp .env.example .env
# Edit .env with your credentials
```

4. **Start MongoDB**
```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas (cloud)
```

5. **Run the application**

**Development mode (separate terminals):**

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

**Production mode:**
```bash
# Build frontend
cd frontend
npm run build

# Start backend (serves frontend)
cd ../backend
npm start
```

## 📝 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/check` - Check authentication status
- `PUT /api/auth/update-profile` - Update user profile

### Messages
- `GET /api/messages/contacts` - Get all contacts
- `GET /api/messages/chats` - Get chat partners
- `GET /api/messages/:id` - Get messages with specific user
- `POST /api/messages/send/:id` - Send message to user

### WebSocket Events
- `connection` - Client connects
- `disconnect` - Client disconnects
- `newMessage` - New message received
- `getOnlineUsers` - Get list of online users

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt with salt rounds
- **Rate Limiting** - Arcjet protection against abuse
- **Input Validation** - Sanitized and validated inputs
- **HTTP-only Cookies** - Secure token storage
- **CORS Protection** - Configured CORS policies
- **XSS Prevention** - Input sanitization
- **MongoDB Injection Protection** - Mongoose schema validation


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Your Name**
- GitHub: [@dhruv-38](https://github.com/dhruv-38)
- LinkedIn: [Dhruv Choudhary](https://linkedin.com/in/dhruvchoudhary38)

## 📧 Support

For support, email dhruvchoudhay38@gmail.com or open an issue on GitHub.

---

**Made with ❤️ by Dhruv Choudhary**


