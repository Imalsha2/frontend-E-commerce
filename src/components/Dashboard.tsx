import React, { useState } from 'react';
import { 
  ShoppingCart, 
  DollarSign, 
  Package, 
  TrendingUp, 
  Users, 
  AlertCircle,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

interface DashboardProps {
  onClose: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onClose }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  // Mock data - In real app, this would come from your backend
  const stats = {
    totalRevenue: 45231.89,
    revenueChange: 12.5,
    totalOrders: 234,
    ordersChange: 8.3,
    avgOrderValue: 193.32,
    avgChange: -2.1,
    totalProducts: 48,
    productsChange: 0,
    activeUsers: 1234,
    usersChange: 15.2,
    conversionRate: 3.24,
    conversionChange: 0.8
  };

  const salesData = [
    { month: 'Jan', sales: 4500 },
    { month: 'Feb', sales: 5200 },
    { month: 'Mar', sales: 4800 },
    { month: 'Apr', sales: 6100 },
    { month: 'May', sales: 5900 },
    { month: 'Jun', sales: 7200 },
  ];

  const topProducts = [
    { id: 1, name: 'Classic White Sneakers', sales: 156, revenue: 12480, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop' },
    { id: 2, name: 'Wireless Headphones', sales: 142, revenue: 21300, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop' },
    { id: 3, name: 'Smart Watch', sales: 128, revenue: 38400, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop' },
    { id: 4, name: 'Leather Backpack', sales: 95, revenue: 11400, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop' },
    { id: 5, name: 'Running Shoes', sales: 87, revenue: 10440, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop' },
  ];

  const recentOrders = [
    { id: '1001', customer: 'John Doe', date: '2025-12-28', total: 299.99, status: 'Delivered' },
    { id: '1002', customer: 'Jane Smith', date: '2025-12-27', total: 159.99, status: 'Shipped' },
    { id: '1003', customer: 'Mike Johnson', date: '2025-12-27', total: 449.99, status: 'Processing' },
    { id: '1004', customer: 'Sarah Williams', date: '2025-12-26', total: 89.99, status: 'Pending' },
    { id: '1005', customer: 'David Brown', date: '2025-12-26', total: 199.99, status: 'Delivered' },
  ];

  const lowStockProducts = [
    { id: 1, name: 'Classic White Sneakers', stock: 5, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop' },
    { id: 2, name: 'Wireless Headphones', stock: 3, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop' },
    { id: 3, name: 'Leather Wallet', stock: 7, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=100&h=100&fit=crop' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const maxSales = Math.max(...salesData.map(d => d.sales));

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onClose} />

      {/* Dashboard Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 py-8">
          <div className="bg-white rounded-2xl shadow-2xl max-w-7xl mx-auto">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl flex items-center justify-between z-10">
              <div>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-blue-100 mt-1">Overview of your store performance</p>
              </div>
              <div className="flex items-center gap-4">
                <select 
                  value={selectedPeriod} 
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ color: 'white' }}
                >
                  <option value="daily" className="text-gray-900">Daily</option>
                  <option value="weekly" className="text-gray-900">Weekly</option>
                  <option value="monthly" className="text-gray-900">Monthly</option>
                  <option value="yearly" className="text-gray-900">Yearly</option>
                </select>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Total Revenue */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    {stats.revenueChange > 0 ? (
                      <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                        <ArrowUpRight className="w-4 h-4" />
                        +{stats.revenueChange}%
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-600 text-sm font-medium">
                        <ArrowDownRight className="w-4 h-4" />
                        {stats.revenueChange}%
                      </span>
                    )}
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">Total Revenue</h3>
                  <p className="text-3xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-2">from last month</p>
                </div>

                {/* Total Orders */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                      <ArrowUpRight className="w-4 h-4" />
                      +{stats.ordersChange}%
                    </span>
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">Total Orders</h3>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalOrders}</p>
                  <p className="text-xs text-gray-500 mt-2">from last month</p>
                </div>

                {/* Average Order Value */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <span className="flex items-center gap-1 text-red-600 text-sm font-medium">
                      <ArrowDownRight className="w-4 h-4" />
                      {stats.avgChange}%
                    </span>
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">Avg Order Value</h3>
                  <p className="text-3xl font-bold text-gray-900">${stats.avgOrderValue}</p>
                  <p className="text-xs text-gray-500 mt-2">from last month</p>
                </div>

                {/* Total Products */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-600 text-sm font-medium">No change</span>
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">Total Products</h3>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalProducts}</p>
                  <p className="text-xs text-gray-500 mt-2">in catalog</p>
                </div>

                {/* Active Users */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                      <ArrowUpRight className="w-4 h-4" />
                      +{stats.usersChange}%
                    </span>
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">Active Users</h3>
                  <p className="text-3xl font-bold text-gray-900">{stats.activeUsers.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-2">this month</p>
                </div>

                {/* Conversion Rate */}
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 border border-cyan-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                      <ArrowUpRight className="w-4 h-4" />
                      +{stats.conversionChange}%
                    </span>
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">Conversion Rate</h3>
                  <p className="text-3xl font-bold text-gray-900">{stats.conversionRate}%</p>
                  <p className="text-xs text-gray-500 mt-2">from last month</p>
                </div>
              </div>

              {/* Charts and Tables Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales Overview Chart */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Sales Overview</h2>
                  <div className="flex items-end justify-between gap-4 h-64">
                    {salesData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center flex-1 gap-2">
                        <span className="text-xs font-medium text-gray-600">${(data.sales / 1000).toFixed(1)}k</span>
                        <div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all hover:from-blue-600 hover:to-blue-500" 
                          style={{ height: `${(data.sales / maxSales) * 100}%` }}>
                        </div>
                        <span className="text-xs font-medium text-gray-500">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Selling Products */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Top Selling Products</h2>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div key={product.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          #{index + 1}
                        </span>
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{product.name}</h4>
                          <p className="text-xs text-gray-500">{product.sales} sales</p>
                        </div>
                        <span className="font-bold text-gray-900">${product.revenue.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Orders</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Order ID</th>
                          <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Customer</th>
                          <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Date</th>
                          <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Total</th>
                          <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.map(order => (
                          <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="py-3 px-2 text-sm font-medium text-gray-900">#{order.id}</td>
                            <td className="py-3 px-2 text-sm text-gray-600">{order.customer}</td>
                            <td className="py-3 px-2 text-sm text-gray-600">{order.date}</td>
                            <td className="py-3 px-2 text-sm font-semibold text-gray-900">${order.total}</td>
                            <td className="py-3 px-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Low Stock Alert */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    <h2 className="text-xl font-bold text-gray-900">Low Stock Alert</h2>
                  </div>
                  <div className="space-y-4">
                    {lowStockProducts.length === 0 ? (
                      <p className="text-center text-gray-500 py-8">All products are well stocked</p>
                    ) : (
                      lowStockProducts.map(product => (
                        <div key={product.id} className="flex items-center gap-4 p-3 rounded-lg bg-orange-50 border border-orange-200">
                          <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-lg" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{product.name}</h4>
                            <p className="text-xs text-orange-600 font-medium">Only {product.stock} left in stock</p>
                          </div>
                          <button className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-lg hover:bg-orange-600 transition-colors">
                            Restock
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
