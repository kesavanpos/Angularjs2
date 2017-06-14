'use strict';
// Load dependencies
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
// Public route
app.get('/api/deals/public', (req, res)=>{
  let deals = [
    // Array of public deals here
	{
    id: 1234,
    name: 'Name of Product',
    description: 'Description of Product',
    originalPrice: 19.99, // Original price of product
    salePrice: 9.99 // Sale price of product
	},
	{
    id: 1234,
    name: 'Name of Product',
    description: 'Description of Product',
    originalPrice: 19.99, // Original price of product
    salePrice: 9.99 // Sale price of product
	},
	{
    id: 1234,
    name: 'Name of Product',
    description: 'Description of Product',
    originalPrice: 19.99, // Original price of product
    salePrice: 9.99 // Sale price of product
	}	
  ];
  res.json(deals);
})
// Private route 
app.get('/api/deals/private', (req,res)=>{
  let deals = [
    // Array of Private Deals here
  ];
  res.json(deals);
})
app.listen(3001);
console.log('Serving deals on localhost:3001');