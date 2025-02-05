import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Home, Settings, User, LogOut, Paperclip, MessageCircle } from "lucide-react";
import Link from "next/link";
import { FaGear } from "react-icons/fa6";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center space-x-2">
          <FaGear className="w-5 h-5" />
          <span className="text-lg font-bold">Sistema de Dicas</span>
        </div>
        
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <Link
            href="/painel"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200"
          >
            <Paperclip className="w-4 h-4" />
            <span>Dicas</span>
          </Link>

          <Link
            href="/painel/chat"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat</span>
          </Link>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Link href={'/'} className="flex items-center space-x-2 p-2 rounded-md hover:text-red-700 w-full">
          <LogOut className="w-4 h-4" />
          <span>Sair</span>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
