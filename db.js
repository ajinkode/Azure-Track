const sql = require('mssql');

// Configure the SQL Server connection
const config = {
  user: 'bootcamp',
  password: 'Pass@123',
  server: 'bootcampaug5server.database.windows.net', // Update with your server name
  database: 'bootcampaug5db',
  options: {
    encrypt: true, // For Azure SQL Database
    trustServerCertificate: false // Change to true if using a self-signed certificate
  }
};

// Function to connect to the SQL Server database
async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Connected to the SQL Server database successfully!');
  } catch (err) {
    console.error('Database connection failed:', err);
  }
}

// Function to query data from SQL Server
async function queryTask2() {
  try {
    const result = await sql.query('SELECT TOP 20 * FROM [SalesLT].[Customer]'); // Modify the query as needed
    return result.recordset; // Return the result of the query
  } catch (err) {
    console.error('Query failed:', err);
    throw err;
  }
}

async function queryTask3() {
  try {
    const result = await sql.query(`
      SELECT TOP 20
        p.Name AS ProductName,
        p.Color,
        p.Size,
        p.Weight
      FROM 
        [SalesLT].[Product] p
      INNER JOIN 
        [SalesLT].[ProductCategory] pc
      ON 
        p.ProductCategoryID = pc.ProductCategoryID;
    `);
    return result.recordset;
  } catch (err) {
    console.error('Query failed:', err);
    throw err;
  }
}

// Export functions
module.exports = {
  connectToDatabase,
  queryTask2,
  queryTask3
};
