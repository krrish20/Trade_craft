
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, BookText, Settings, LogOut, Calculator, BrainCircuit, BookCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { useProgress } from "@/context/ProgressContext";
import { Logo } from "./Logo";
import { Separator } from "./ui/separator";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { progress } = useProgress();

  if (!progress) {
    return null;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex">
        <div className="flex flex-col gap-4 px-2 sm:py-5">
            <Link
                href="/"
                className="group flex h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground"
            >
                <Logo className="h-6 w-6 transition-all group-hover:scale-110" />
                <span className="sr-only">Tradecraft Academy</span>
            </Link>
            <h1 className="text-xl font-semibold text-center">Welcome, {progress.name}</h1>
        </div>
        <Separator />
        <nav className="flex flex-1 flex-col gap-2 p-2">
            <div className="flex-1">
                <NavItem href="/" icon={Home}>
                    Dashboard
                </NavItem>
                <NavItem href="/journal" icon={BookText}>
                    Journal
                </NavItem>
                <NavItem href="/trainer" icon={BrainCircuit}>
                    Decision Trainer
                </NavItem>
                <NavItem href="/calculators" icon={Calculator}>
                    Calculators
                </NavItem>
                <NavItem href="/resources" icon={BookCheck}>
                    Resources
                </NavItem>
            </div>

            <Separator />
            <div className="p-2">
                <NavItem href="/profile" icon={User}>
                    Profile
                </NavItem>
                <NavItem href="/settings" icon={Settings}>
                    Settings
                </NavItem>
                <NavItem href="/logout" icon={LogOut}>
                    Logout
                </NavItem>
            </div>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-60">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="sm:hidden">
            <Link href="/" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground">
               <Logo className="h-6 w-6 transition-all group-hover:scale-110" />
            </Link>
          </div>
          <div className="ml-auto sm:hidden">
            <h1 className="text-lg font-semibold">Welcome, {progress.name}</h1>
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 mb-20 sm:mb-0">
          {children}
        </main>
      </div>
       <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-background border-t h-16 flex items-center justify-around z-40">
          <NavItem href="/" icon={Home} isMobile>Dashboard</NavItem>
          <NavItem href="/journal" icon={BookText} isMobile>Journal</NavItem>
          <NavItem href="/trainer" icon={BrainCircuit} isMobile>Trainer</NavItem>
          <NavItem href="/resources" icon={BookCheck} isMobile>Resources</NavItem>
          <NavItem href="/profile" icon={User} isMobile>Profile</NavItem>
        </nav>
    </div>
  );
}

function NavItem({ href, icon: Icon, children, isMobile = false }: { href: string; icon: React.ElementType; children: React.ReactNode; isMobile?: boolean }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (isMobile) {
    return (
      <Link
        href={href}
        className={cn(
          "flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground",
          isActive && "text-primary"
        )}
      >
        <Icon className="h-5 w-5" />
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
        isActive && "bg-muted text-primary"
      )}
    >
      <Icon className="h-4 w-4" />
      {children}
    </Link>
  );
}
