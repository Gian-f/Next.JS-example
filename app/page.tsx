'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const products = [
  { id: 1, name: "Produto 1", price: 19.99, image: "https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", rating: 4.5, reviews: 0 },
  { id: 2, name: "Produto 2", price: 29.99, image: "https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", rating: 4.5, reviews: 0 },
  { id: 3, name: "Produto 3", price: 39.99, image: "https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", rating: 4.5, reviews: 0 },
  { id: 4, name: "Produto 4", price: 49.99, image: "https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", rating: 4.5, reviews: 0 },
  { id: 5, name: "Produto 5", price: 59.99, image: "https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", rating: 4.5, reviews: 0 },
  { id: 6, name: "Produto 6", price: 69.99, image: "https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg", rating: 4.5, reviews: 0 },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
          <Image
            src="https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg"
            alt="Banner"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-black bg-opacity-50 p-4 text-center">
              Bem-vindo ao nosso E-commerce
            </h1>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">Produtos em Destaque!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col justify-between">
              <CardHeader className="p-0">
                <div className="relative pt-[100%]">
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <p className="text-xl font-semibold mb-2">${product.price.toFixed(2)}</p>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/product/${product.id}`} className="w-full">
                  <Button className="w-full">Ver Detalhes</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="mb-12 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Electronics', 'Clothing', 'Books', 'Home & Garden'].map((category) => (
              <Link key={category} href={`/category/${category.toLowerCase().replace(' & ', '-')}`} className="relative h-40 rounded-lg overflow-hidden group">
                <Image src="https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg" alt={category} fill style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity group-hover:bg-opacity-50">
                  <h3 className="text-white text-xl font-semibold">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}