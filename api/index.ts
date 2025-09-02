import type { VercelRequest, VercelResponse } from '@vercel/node';

// Add CORS headers
function setCorsHeaders(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res);
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url } = req;
  const path = url?.replace('/api', '') || '/';

  try {
    // Health check endpoint
    if (path === '/health' && req.method === 'GET') {
      return res.json({ 
        status: "ok", 
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || "production"
      });
    }

    // Cars endpoint
    if (path === '/cars' && req.method === 'GET') {
      const cars = [
        {
          id: 1,
          name: "BMW X5",
          category: "SUV",
          price: 120,
          image: "/api/placeholder/400/300",
          features: ["GPS", "Bluetooth", "AC"]
        },
        {
          id: 2,
          name: "Mercedes C-Class",
          category: "Sedan",
          price: 100,
          image: "/api/placeholder/400/300",
          features: ["GPS", "Bluetooth", "AC", "Leather Seats"]
        },
        {
          id: 3,
          name: "Audi A4",
          category: "Sedan",
          price: 95,
          image: "/api/placeholder/400/300",
          features: ["GPS", "Bluetooth", "AC"]
        }
      ];
      return res.json(cars);
    }

    // Default 404 for unknown endpoints
    return res.status(404).json({ error: 'API endpoint not found' });
    
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}