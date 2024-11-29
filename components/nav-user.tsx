'use client';

import { useState } from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '../components/Avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../components/dropdown-menu';
import { LogOut, Settings, User, ShoppingCart } from 'lucide-react';

export function NavUser({
    user,
}: {
    user: {
        name: string;
        email: string;
        avatar: string;
    };
}) {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Simula estado de login

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 focus:outline-none">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {isLoggedIn ? (
                    <>
                        <DropdownMenuLabel>
                            <div className="flex flex-col">
                                <span className="font-semibold">{user.name}</span>
                                <span className="text-sm text-gray-500">{user.email}</span>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <User className="mr-2 w-4 h-4" />
                                <span>Minha Conta</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ShoppingCart className="mr-2 w-4 h-4" />
                                <span>Meus Pedidos</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 w-4 h-4" />
                                <span>Configurações</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => {
                                setIsLoggedIn(false); // Simula logout
                                alert('Você saiu da conta.');
                            }}
                        >
                            <LogOut className="mr-2 w-4 h-4 text-red-500" />
                            <span className="text-red-500">Sair</span>
                        </DropdownMenuItem>
                    </>
                ) : (
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            onClick={() => {
                                setIsLoggedIn(true); // Simula login
                                alert('Você entrou na conta.');
                            }}
                        >
                            <User className="mr-2 w-4 h-4" />
                            <span>Entrar</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
