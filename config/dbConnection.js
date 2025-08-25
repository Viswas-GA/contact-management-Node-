const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database Connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDb;



// The require function in Node.js 
// is used to import modules, JSON files, or local files into your application.
// custom module:->const myModule = require('./myModule');
// third party:->const express = require('express');
// Built in:->const fs = require('fs');