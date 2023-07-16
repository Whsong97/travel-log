const router = required("express");

function calculateTotalCost(req, res) {
    const { items } = req.body;
  

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Invalid items provided' });
    }
  
    try {
      const totalCost = items.reduce((acc, item) => {
        const { price, quantity } = item;
        if (!price || !quantity || price < 0 || quantity < 0) {
          throw new Error('Invalid item details');
        }
        return acc + price * quantity;
      }, 0);

      res.json({ message: 'Total cost calculated', totalCost });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  function getCostBreakdown(req, res) {
    const { items } = req.body;
  
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Invalid items provided' });
    }
  
    try {
      const costBreakdown = items.map((item) => {
        const { name, price, quantity } = item;
        if (!name || !price || !quantity || price < 0 || quantity < 0) {
          throw new Error('Invalid item details');
        }
        const totalCost = price * quantity;
        return { item: name, totalCost };
      });
  
      res.json({ message: 'Cost breakdown calculated', costBreakdown });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  module.exports = {
    calculateTotalCost,
    getCostBreakdown,
  };
  