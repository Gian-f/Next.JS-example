'use client';

import Link from 'next/link';
import { ShoppingCart, Search, User } from 'lucide-react';
import { Button } from './button';
import { useState } from 'react';
import { useCart } from './CartContext';

export function Header() {
  const { cart } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">MyStore</Link>
        <div className="flex items-center space-x-4">
          <form className="hidden md:flex items-center">
            {/* Barra de busca */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="bg-transparent outline-none ml-2 text-gray-800 placeholder-gray-500 w-64"
              />
            </div>
          </form>
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Carrinho</span>
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Conta</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}