// app.js - Main Application Entry Point
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
require('dotenv').config();

// Import database connection
const connectDB = require('./config/database');

const app = express();
connectDB();

// Body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');

app.use(session({
  secret: 'employee-management-secret',
  resave: true,
  saveUninitialized: true
}));

app.use('/', require('./routes/employeeRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));