import { ShoppingCart, User, Search, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  currentUser: { name: string; email: string } | null;
  onLogout: () => void;
  onAccountClick: () => void;
}

export default function Header({ 
  cartItemsCount, 
  onCartClick,
  onSearch,
  searchQuery,
  categories,
  selectedCategory,
  onCategoryChange,
  currentUser,
  onLogout,
  onAccountClick
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">ShopHub</h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={() => onSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* User Info */}
            <div className="relative hidden md:block">
              <div className="flex items-center gap-3">
                <button
                  onClick={onAccountClick}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  title="View account details"
                >
                  <User className="w-5 h-5 text-gray-600" />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium text-gray-900">{currentUser?.name}</span>
                    <span className="text-xs text-gray-500 underline decoration-dotted">{currentUser?.email}</span>
                  </div>
                </button>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-red-50 rounded-lg transition-colors text-red-600 font-medium"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            </div>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block pb-4 md:pb-2`}>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => {
                    onCategoryChange(category);
                    setIsMenuOpen(false);
                    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block px-4 py-2 font-medium transition-colors ${
                    selectedCategory === category
                      ? 'text-blue-600 bg-blue-50 rounded-lg'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => onSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

    </header>
  );
}
