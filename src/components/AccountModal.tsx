import { X, User, Package, Heart, Settings, LogOut, Edit2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowWishlist: () => void;
  user: { name: string; email: string } | null;
  onLogout?: () => void;
}

export default function AccountModal({ isOpen, onClose, onShowWishlist, user, onLogout }: AccountModalProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist' | 'settings'>('profile');
  const [userName, setUserName] = useState(user?.name || '');
  const [userEmail, setUserEmail] = useState(user?.email || '');
  const [editMode, setEditMode] = useState(false);
  const [tempName, setTempName] = useState(user?.name || '');
  const [tempEmail, setTempEmail] = useState(user?.email || '');
  const memberSince = 'January 15, 2024';

  useEffect(() => {
    setUserName(user?.name || '');
    setUserEmail(user?.email || '');
    setTempName(user?.name || '');
    setTempEmail(user?.email || '');
  }, [user]);

  if (!isOpen) return null;

  const handleSaveProfile = () => {
    setUserName(tempName);
    setUserEmail(tempEmail);
    setEditMode(false);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      alert('You have been logged out successfully!');
    }
    onClose();
  };

  const mockOrders = [
    { id: '#ORD-001', date: '2025-12-20', items: 2, total: '$89.99', status: 'Delivered' },
    { id: '#ORD-002', date: '2025-12-15', items: 1, total: '$149.99', status: 'Delivered' },
    { id: '#ORD-003', date: '2025-12-10', items: 3, total: '$199.99', status: 'Shipped' },
  ];

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">My Account</h2>
                <p className="text-blue-100">{userEmail}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b bg-gray-50">
            {[
              { key: 'profile', label: 'Profile', icon: User },
              { key: 'orders', label: 'Orders', icon: Package },
              { key: 'wishlist', label: 'Wishlist', icon: Heart },
              { key: 'settings', label: 'Settings', icon: Settings },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as 'profile' | 'orders' | 'wishlist' | 'settings')}
                className={`flex-1 px-4 py-3 font-medium flex items-center justify-center gap-2 transition-colors border-b-2 ${
                  activeTab === key
                    ? 'text-blue-600 border-blue-600 bg-white'
                    : 'text-gray-600 border-transparent hover:text-blue-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    <button
                      onClick={() => {
                        if (editMode) handleSaveProfile();
                        setEditMode(!editMode);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      {editMode ? 'Save' : 'Edit'}
                    </button>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-blue-100 shadow-sm mb-6">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-blue-100 text-blue-900">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Field</th>
                          <th className="px-4 py-3 font-semibold">Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-blue-50 bg-white">
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Full Name</td>
                          <td className="px-4 py-3 text-gray-900 font-medium">{userName || '—'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Email</td>
                          <td className="px-4 py-3 text-gray-900 font-medium">{userEmail || '—'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Member Since</td>
                          <td className="px-4 py-3 text-gray-900 font-medium">{memberSince}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Account Status</td>
                          <td className="px-4 py-3 text-gray-900 font-medium">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                              <span className="w-2 h-2 rounded-full bg-green-500" />
                              Active & Verified
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      {editMode ? (
                        <input
                          type="text"
                          value={tempName}
                          onChange={(e) => setTempName(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="text-gray-900 font-medium">{userName || '—'}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      {editMode ? (
                        <input
                          type="email"
                          value={tempEmail}
                          onChange={(e) => setTempEmail(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="text-gray-900 font-medium">{userEmail || '—'}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                      <p className="text-gray-900 font-medium">{memberSince}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Account Status</label>
                      <p className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        ✓ Active & Verified
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Orders</h3>
                {mockOrders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="font-semibold text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date} • {order.items} items</p>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{order.total}</p>
                          <span className={`text-sm font-medium ${ order.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'}`}>
                            {order.status}
                          </span>
                        </div>
                        <button 
                          onClick={() => alert(`Viewing details for order ${order.id}`)}
                          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors text-sm font-medium active:scale-95"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Wishlist</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Heart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-600 mb-4">You haven't added any items to your wishlist yet.</p>
                  <button
                    onClick={() => {
                      onShowWishlist();
                      onClose();
                    }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Browse Products
                  </button>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Settings</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Email Notifications</p>
                        <p className="text-sm text-gray-600">Receive updates about orders and promotions</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">SMS Notifications</p>
                        <p className="text-sm text-gray-600">Get alerts via text message</p>
                      </div>
                      <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Newsletter</p>
                        <p className="text-sm text-gray-600">Subscribe to our newsletter for deals</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <button 
                        onClick={() => alert('Redirect to Change Password page')}
                        className="w-full px-4 py-3 border border-red-300 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
                      >
                        Change Password
                      </button>
                    </div>

                    <div className="mt-4">
                      <button 
                        onClick={() => {
                          if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                            alert('Account deletion initiated...');
                            onClose();
                          }
                        }}
                        className="w-full px-4 py-3 border border-red-300 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
                      >
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gray-50 border-t p-4 flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium hover:border-gray-400"
            >
              Close
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center gap-2 active:scale-95"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
