import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p>Somos uma loja online dedicada a oferecer os melhores produtos com excelente atendimento ao cliente.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Página Inicial</Link></li>
              <li><Link href="/cart" className="hover:underline">Carrinho</Link></li>
              <li><Link href="#" className="hover:underline">Política de Privacidade</Link></li>
              <li><Link href="#" className="hover:underline">Termos de Serviço</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p>Email: contato@ecommerce.com</p>
            <p>Telefone: (11) 1234-5678</p>
            <p>Endereço: Rua do Comércio, 123 - São Paulo, SP</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2025 E-commerce. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}