# Fashion E-commerce Website

A modern e-commerce website for fashion products, similar to wtflex.in.

## Features

- User authentication and authorization
- Product catalog with categories
- Shopping cart functionality
- Wishlist feature
- Secure payment integration
- Order tracking
- Admin dashboard
- Responsive design

## Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Payment Gateway: Razorpay

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   ```
3. Create a .env file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   ```
4. Start the development server:
   ```bash
   npm run dev:full
   ```

## Project Structure

```
fashion-ecommerce/
├── client/                 # React frontend
├── server/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   └── middleware/        # Custom middleware
├── .env                   # Environment variables
└── package.json           # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 