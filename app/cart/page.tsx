'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Trash2 } from 'lucide-react'
import { useCart } from '@/components/CartContext'
import Link from 'next/link'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Seu Carrinho</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-4">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="relative w-20 h-20">
                  <Image src={item.images[0]} alt={item.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="ml-4">
                  <h2 className="text-base sm:text-lg font-semibold">{item.name}</h2>
                  <p>R$ {item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-4"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg sm:text-xl font-semibold">Total: R$ {total.toFixed(2)}</p>
            <Link href="/checkout">
              <Button className="mt-4 w-full sm:w-auto">Finalizar Compra</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

