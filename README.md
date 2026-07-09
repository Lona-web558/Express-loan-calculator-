# Express-loan-calculator-

Loan Calculator Web Application

Overview

The Loan Calculator Web Application is a simple web-based application built with Node.js, Express.js, HTML5, CSS3, Bootstrap 5, and JavaScript. It allows users to create an account, log in securely, calculate monthly loan repayments, and log out safely.

---

Features

- User registration (Sign Up)
- Secure user login
- Password hashing using bcrypt
- Session-based authentication with Express Session
- Protected dashboard
- Loan repayment calculator
- Logout functionality
- Responsive design using Bootstrap 5

---

Technologies Used

Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript

Backend

- Node.js
- Express.js
- Express Session
- Body Parser
- bcrypt
- fs-extra

---

Project Structure

loan-calculator-app/
│
├── server.js
├── package.json
├── users.json
│
├── routes/
│     auth.js
│
├── public/
│     ├── css/
│     │      style.css
│     │
│     └── js/
│            calculator.js
│
└── views/
      index.html
      login.html
      signup.html
      dashboard.html

---

Installation

1. Clone the repository.

git clone <repository-url>

2. Open the project folder.

cd loan-calculator-app

3. Install the required packages.

npm install

4. Start the server.

npm start

5. Open your browser and navigate to:

http://localhost:3000

---

How to Use

1. Open the application.
2. Create a new account using the Sign Up page.
3. Log in using your registered email and password.
4. Enter:
   - Loan Amount
   - Annual Interest Rate
   - Loan Term (Years)
5. Click Calculate to view the estimated monthly repayment.
6. Click Logout to securely end your session.

---

Loan Calculation Formula

The application uses the standard loan amortization formula:

M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]

Where:

- M = Monthly payment
- P = Loan amount
- r = Monthly interest rate
- n = Total number of monthly payments

---

Security

The application includes the following security features:

- Password hashing with bcrypt
- Session-based authentication
- Protected dashboard routes
- Restricted access to authenticated pages
- Logout destroys the user session

---

Future Improvements

- MongoDB database integration
- Password reset functionality
- Email verification
- JWT authentication
- User profile management
- Loan history
- Amortization schedule
- PDF loan reports
- Dark mode
- Admin dashboard

---

Author

Developed by Lona Smith as a Node.js and Express.js learning project demonstrating user authentication and loan repayment calculations.

---

License

This project is provided for educational purposes and may be modified and distributed for personal or academic use.
