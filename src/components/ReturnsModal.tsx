import { X, RotateCcw, Package, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface ReturnsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReturnsModal({ isOpen, onClose }: ReturnsModalProps) {
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
          <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Returns & Refunds</h2>
                <p className="text-orange-100">Easy 30-day return policy</p>
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
            {/* Return Policy Banner */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-6 border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">30-Day Money Back Guarantee</h3>
              </div>
              <p className="text-gray-600">Not satisfied? Return your purchase within 30 days for a full refund.</p>
            </div>

            {/* How to Return */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Return an Item</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Initiate Return</h4>
                <p className="text-sm text-gray-600">Log in to your account and select the order</p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Pack Item</h4>
                <p className="text-sm text-gray-600">Use original packaging if possible</p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Ship It</h4>
                <p className="text-sm text-gray-600">Use our prepaid return label</p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-blue-600">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Get Refund</h4>
                <p className="text-sm text-gray-600">Processed within 5-7 days</p>
              </div>
            </div>

            {/* Return Policy Details */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Return Policy Details</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Items must be unused and in original condition</p>
                  <p className="text-sm text-gray-600">With all tags and packaging intact</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Free return shipping</p>
                  <p className="text-sm text-gray-600">We provide prepaid return labels for your convenience</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Full refund to original payment method</p>
                  <p className="text-sm text-gray-600">Processed within 5-7 business days after we receive the item</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">30-day return window</p>
                  <p className="text-sm text-gray-600">Returns must be initiated within 30 days of delivery</p>
                </div>
              </div>
            </div>

            {/* Non-Returnable Items */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Non-Returnable Items</h3>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200 mb-6">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Personal care items and hygiene products</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Perishable goods and food items</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Final sale or clearance items</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Gift cards and downloadable software</p>
                </div>
              </div>
            </div>

            {/* Exchange Policy */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Exchanges</h3>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start gap-3">
                <Package className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">Want a different size or color?</p>
                  <p className="text-sm text-gray-600 mb-3">We offer free exchanges within 30 days. Simply select "Exchange" when initiating your return and choose your preferred replacement item.</p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Start an Exchange
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-4 bg-gray-50 flex justify-between items-center">
            <p className="text-sm text-gray-600">Questions? Contact our support team</p>
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
