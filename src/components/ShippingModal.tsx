import { X, Package, Truck, Plane, MapPin, CheckCircle } from 'lucide-react';

interface ShippingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShippingModal({ isOpen, onClose }: ShippingModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-all duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Shipping Information</h2>
                <p className="text-green-100">Fast, reliable delivery worldwide</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Free Shipping Banner */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Free Shipping on Orders Over $50!</h3>
              </div>
              <p className="text-gray-600">Save on shipping costs with our free delivery promotion.</p>
            </div>

            {/* Shipping Options */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Methods</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Standard</h4>
                    <p className="text-sm text-gray-500">5-7 business days</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-2">$5.99</p>
                <p className="text-sm text-gray-600">Free over $50</p>
              </div>

              <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Express</h4>
                    <p className="text-sm text-gray-500">2-3 business days</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-2">$12.99</p>
                <p className="text-sm text-gray-600">Most popular</p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Plane className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Overnight</h4>
                    <p className="text-sm text-gray-500">Next business day</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-purple-600 mb-2">$24.99</p>
                <p className="text-sm text-gray-600">Fastest option</p>
              </div>
            </div>

            {/* Shipping Zones */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">International Shipping</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">United States</h4>
                    <p className="text-sm text-gray-600">Free shipping over $50</p>
                    <p className="text-sm text-gray-600">Standard: 5-7 days</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Canada</h4>
                    <p className="text-sm text-gray-600">Flat rate: $9.99</p>
                    <p className="text-sm text-gray-600">Delivery: 7-10 days</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Europe</h4>
                    <p className="text-sm text-gray-600">From: $15.99</p>
                    <p className="text-sm text-gray-600">Delivery: 10-14 days</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Rest of World</h4>
                    <p className="text-sm text-gray-600">From: $19.99</p>
                    <p className="text-sm text-gray-600">Delivery: 14-21 days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Order Tracking</p>
                  <p className="text-sm text-gray-600">Track your order in real-time with our tracking system</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Package Insurance</p>
                  <p className="text-sm text-gray-600">All shipments are insured against loss or damage</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Signature Required</p>
                  <p className="text-sm text-gray-600">Available for orders over $200 to ensure safe delivery</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Processing Time</p>
                  <p className="text-sm text-gray-600">Orders are processed within 1-2 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-4 bg-gray-50 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
