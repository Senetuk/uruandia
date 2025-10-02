<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Seller Dashboard</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f9f9f9;
    }
    /* Sidebar */
    .sidebar {
      width: 220px;
      height: 100vh;
      background: #264653;
      color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      padding: 20px;
    }
    .sidebar h2 {
      margin-bottom: 30px;
      font-size: 20px;
      text-align: center;
    }
    .sidebar a {
      display: block;
      padding: 12px;
      margin: 8px 0;
      color: #fff;
      text-decoration: none;
      border-radius: 6px;
    }
    .sidebar a:hover {
      background: #2a9d8f;
    }

    /* Main Content */
    .main {
      margin-left: 220px;
      padding: 20px;
    }
    .topbar {
      background: #fff;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    .card {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .card h3 {
      margin-bottom: 10px;
      color: #2a9d8f;
    }

    /* Charts */
    .charts {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 30px;
    }
    .chart-container {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    /* Orders Table */
    table {
      width: 100%;
      border-collapse: collapse;
      background: #fff;
      margin-top: 30px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    table th, table td {
      padding: 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    table th {
      background: #2a9d8f;
      color: #fff;
    }
    table tr:hover {
      background: #f1f1f1;
    }
  </style>
</head>
<body>
  <!-- Sidebar -->
  <div class="sidebar">
    <h2>Seller Panel</h2>
    <a href="#">Dashboard</a>
    <a href="#">My Products</a>
    <a href="#">Orders</a>
    <a href="#">Earnings</a>
    <a href="#">Messages</a>
    <a href="#">Settings</a>
  </div>

  <!-- Main Content -->
  <div class="main">
    <!-- Topbar -->
    <div class="topbar">
      <h2>Welcome, Seller!</h2>
      <div>🔔 Notifications | 👤 Profile</div>
    </div>

    <!-- Stats Cards -->
    <div class="stats">
      <div class="card">
        <h3>Total Sales</h3>
        <p>$4,250</p>
      </div>
      <div class="card">
        <h3>Orders Pending</h3>
        <p>12</p>
      </div>
      <div class="card">
        <h3>Revenue</h3>
        <p>$1,240 this month</p>
      </div>
      <div class="card">
        <h3>Ratings</h3>
        <p>⭐ 4.8 / 5</p>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="charts">
      <div class="chart-container">
        <h3>Revenue (Last 6 Months)</h3>
        <canvas id="revenueChart"></canvas>
      </div>
      <div class="chart-container">
        <h3>Orders per Category</h3>
        <canvas id="ordersChart"></canvas>
      </div>
    </div>

    <!-- Orders Table -->
    <h2>Recent Orders</h2>
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Product</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#1001</td>
          <td>Organic Eggs</td>
          <td>Pending</td>
          <td>$20</td>
          <td>Sept 20, 2025</td>
        </tr>
        <tr>
          <td>#1002</td>
          <td>Fresh Tomatoes</td>
          <td>Shipped</td>
          <td>$15</td>
          <td>Sept 19, 2025</td>
        </tr>
        <tr>
          <td>#1003</td>
          <td>Broiler Chicken</td>
          <td>Completed</td>
          <td>$40</td>
          <td>Sept 18, 2025</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Chart.js Scripts -->
  <script>
    // Revenue Line Chart
    const ctx1 = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
          label: 'Revenue ($)',
          data: [500, 800, 1200, 900, 1500, 1240],
          borderColor: '#2a9d8f',
          backgroundColor: 'rgba(42,157,143,0.2)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        }
      }
    });

    // Orders Bar Chart
    const ctx2 = document.getElementById('ordersChart').getContext('2d');
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Poultry', 'Vegetables', 'Dairy', 'Meat', 'Grains'],
        datasets: [{
          label: 'Orders',
          data: [25, 40, 15, 20, 10],
          backgroundColor: '#e76f51'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  </script>
</body>
</html>
