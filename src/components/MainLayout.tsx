
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, BookText, Settings, LogOut, Calculator, BrainCircuit, BookCheck, ClipboardCheck, DraftingCompass, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

import { cn } from "@/lib/utils";
import { useProgress } from "@/context/ProgressContext";
import { Logo } from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const allNavItems = [
    { href: "/", icon: Home, label: "Dashboard" },
    { href: "/journal", icon: BookText, label: "Journal" },
    { href: "/planner", icon: DraftingCompass, label: "Trade Planner" },
    { href: "/trainer", icon: BrainCircuit, label: "Decision Trainer" },
    { href: "/calculators", icon: Calculator, label: "Calculators" },
    { href: "/resources", icon: BookCheck, label: "Resources" },
];

const accountNavItems = [
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/settings", icon: Settings, label: "Settings" },
    { href: "/logout", icon: LogOut, label: "Logout" },
]

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { progress } = useProgress();

  if (!progress) {
    return null;
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <aside className="hidden border-r bg-card md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-20 items-center border-b px-4 lg:px-6">
            <Link href="/" className="group flex items-center gap-3 font-semibold">
              <Logo className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
              <span className="text-2xl font-bold">Tradecraft</span>
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto">
             <nav className="grid items-start px-2 text-base font-medium lg:px-4">
                <p className="px-3 py-2 text-xs font-medium uppercase text-muted-foreground">Menu</p>
                {allNavItems.map(item => (
                    <NavItem key={item.href} href={item.href} icon={item.icon}>
                        {item.label}
                    </NavItem>
                ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
             <nav className="grid items-start px-2 text-base font-medium lg:px-4">
               <p className="px-3 py-2 text-xs font-medium uppercase text-muted-foreground">Account</p>
               {accountNavItems.map(item => (
                   <NavItem key={item.href} href={item.href} icon={item.icon}>
                      {item.label}
                  </NavItem>
              ))}
            </nav>
          </div>
        </div>
      </aside>
      <div className="flex flex-col">
        <header className="flex h-14 items-center justify-between gap-4 border-b bg-card/80 px-4 lg:h-[60px] lg:px-6 md:hidden">
            <MobileMenu />
            <p className="text-sm font-medium text-muted-foreground">Welcome, {progress.name}</p>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}


function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs p-0">
                 <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-20 items-center border-b px-6">
                        <Link href="/" className="group flex items-center gap-3 font-semibold">
                          <Logo className="h-10 w-10 text-primary" />
                          <span className="text-xl font-bold">Tradecraft</span>
                        </Link>
                    </div>
                     <div className="flex-1 overflow-y-auto py-2">
                         <nav className="grid items-start px-4 text-lg font-medium">
                            <p className="px-3 py-2 text-xs font-medium uppercase text-muted-foreground">Menu</p>
                            {allNavItems.map(item => (
                                <MobileNavItem key={item.href} href={item.href} icon={item.icon}>
                                    {item.label}
                                </MobileNavItem>
                            ))}
                        </nav>
                      </div>
                      <div className="mt-auto p-4 border-t">
                        <nav className="grid items-start px-4 text-lg font-medium">
                           <p className="px-3 py-2 text-xs font-medium uppercase text-muted-foreground">Account</p>
                           {accountNavItems.map(item => (
                               <MobileNavItem key={item.href} href={item.href} icon={item.icon}>
                                  {item.label}
                              </MobileNavItem>
                          ))}
                        </nav>
                      </div>
                 </div>
            </SheetContent>
        </Sheet>
    )
}

function MobileNavItem({ href, icon: Icon, children }: { href: string; icon: React.ElementType; children: React.ReactNode; }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <SheetClose asChild>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
            href={href}
            className={cn("flex items-center gap-4 rounded-lg px-3 py-3 text-muted-foreground hover:text-primary hover:bg-muted", isActive && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground")}
        >
            <Icon className="h-5 w-5" />
            {children}
        </Link>
      </motion.div>
    </SheetClose>
  )
}

function NavItem({ href, icon: Icon, children }: { href: string; icon: React.ElementType; children: React.ReactNode; }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted",
                isActive && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
            )}
        >
            <Icon className="h-5 w-5" />
            {children}
        </Link>
     </motion.div>
  );
}
