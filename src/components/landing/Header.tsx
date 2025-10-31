'use client';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-accent text-accent-foreground py-3 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <span className="font-bold text-lg">Come Rico Vive Sano</span>
        <Button asChild variant="secondary" className="bg-white text-accent hover:bg-white/90">
            <a href="https://pay.hotmart.com/H102664906U">¡Lo Quiero Ahora!</a>
        </Button>
      </div>
    </header>
  );
}
