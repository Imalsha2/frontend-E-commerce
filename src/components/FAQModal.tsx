import { X, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FAQModal({ isOpen, onClose }: FAQModalProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  const faqs = [
    {
      category: "Orders & Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secured with industry-standard encryption."
        },
        {
          q: "Can I change or cancel my order after placing it?",
          a: "You can modify or cancel your order within 1 hour of placing it. After that, orders are processed and shipped. Please contact our support team immediately if you need to make changes."
        },
        {
          q: "Do you offer payment plans or financing?",
          a: "Yes! We partner with Affirm and Klarna to offer flexible payment plans. You can choose to pay in 4 interest-free installments or select longer payment terms at checkout."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "How can I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history. Real-time tracking updates are available 24/7."
        },
        {
          q: "Do you ship internationally?",
          a: "Yes! We ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination. Customs fees and import duties may apply and are the responsibility of the customer."
        },
        {
          q: "What if my package is lost or damaged?",
          a: "All shipments are insured. If your package is lost or arrives damaged, please contact us within 48 hours with photos (if damaged). We'll immediately send a replacement or issue a full refund."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "How long do I have to return an item?",
          a: "You have 30 days from the delivery date to initiate a return. Items must be unused, in original condition, and in original packaging with all tags attached."
        },
        {
          q: "How long does it take to receive my refund?",
          a: "Once we receive your return, we process refunds within 5-7 business days. The refund will be issued to your original payment method. Depending on your bank, it may take an additional 3-5 business days to appear in your account."
        },
        {
          q: "Can I exchange an item instead of returning it?",
          a: "Absolutely! Exchanges are free and easy. When initiating your return, simply select 'Exchange' and choose your preferred replacement item. We'll ship it to you as soon as we receive your return."
        }
      ]
    },
    {
      category: "Products & Availability",
      questions: [
        {
          q: "How do I know if an item is in stock?",
          a: "Product availability is shown on each product page. If an item is out of stock, you can sign up for restock notifications. We'll email you as soon as the item becomes available again."
        },
        {
          q: "Do you offer gift wrapping?",
          a: "Yes! Gift wrapping is available for $4.99 per item. You can also include a personalized gift message at checkout. Your gift will arrive beautifully wrapped and ready to give."
        },
        {
          q: "Are your products authentic?",
          a: "100% authentic, guaranteed. We source all products directly from authorized distributors and brand partners. Every item comes with a certificate of authenticity where applicable."
        }
      ]
    },
    {
      category: "Account & Security",
      questions: [
        {
          q: "How do I reset my password?",
          a: "Click 'Forgot Password' on the login page and enter your email address. We'll send you a secure link to reset your password. The link expires after 24 hours for security reasons."
        },
        {
          q: "Is my personal information secure?",
          a: "Yes. We use industry-standard SSL encryption to protect your data. We never store your full credit card information, and we comply with all major privacy regulations including GDPR and CCPA."
        },
        {
          q: "How do I delete my account?",
          a: "You can delete your account from your Account Settings page. Please note that this action is permanent and cannot be undone. You'll need to create a new account if you wish to shop with us again."
        }
      ]
    }
  ];

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
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                <p className="text-purple-100">Find answers to common questions</p>
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
            {/* Search Box */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* FAQ Categories */}
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = catIndex * 10 + qIndex;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div key={qIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-4 py-4 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between text-left"
                        >
                          <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 py-4 bg-purple-50 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Still Have Questions */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border-2 border-purple-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">Can't find what you're looking for? Our support team is here to help!</p>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                  Contact Support
                </button>
                <button className="px-6 py-2.5 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                  Live Chat
                </button>
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
