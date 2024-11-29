import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function OrderConfirmationPage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Pedido Confirmado!</h1>
      <p className="mb-4">Obrigado por sua compra. Seu pedido foi recebido e está sendo processado.</p>
      <Link href="/">
        <Button>Voltar para a Página Inicial</Button>
      </Link>
    </div>
  )
}

