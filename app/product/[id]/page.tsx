'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Product, useCart } from '@/components/CartContext'

const products: Product[] = [
  { 
    id: 1, 
    name: "Produto 1", 
    price: 19.99, 
    images: ["	https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", "	https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", "	https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg"], 
    description: "Descrição do Produto 1" 
  },
  { 
    id: 2, 
    name: "Produto 2", 
    price: 29.99, 
    images: ["	https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", "	https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", "	https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg"], 
    description: "Descrição do Produto 2" 
  },
  { 
    id: 3, 
    name: "Produto 3", 
    price: 39.99, 
    images: ["	https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", "	https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", "	https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg"], 
    description: "Descrição do Produto 3" 
  },
  { 
    id: 4, 
    name: "Produto 4", 
    price: 49.99, 
    images: ["	https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", "	https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", "	https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg"], 
    description: "Descrição do Produto 4" 
  },
]

export default function ProductPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find(p => p.id === Number(id))
  const [currentImage, setCurrentImage] = useState(0)

  if (!product) {
    return <div>Produto não encontrado</div>
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <div className="relative w-full pt-[100%] mb-4">
          <Image src={product.images[currentImage]} alt={product.name} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="flex justify-center gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-16 h-16 relative ${index === currentImage ? 'border-2 border-blue-500' : ''}`}
            >
              <Image src={image} alt={`${product.name} - imagem ${index + 1}`} fill style={{ objectFit: "cover" }} />
            </button>
          ))}
        </div>
      </div>
      <div className="md:w-1/2">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg sm:text-xl font-semibold mb-4">R$ {product.price.toFixed(2)}</p>
        <p className="mb-4">{product.description}</p>
        <Button onClick={() => addToCart(product)} className="w-full sm:w-auto">Adicionar ao Carrinho</Button>
      </div>
    </div>
  )
}

