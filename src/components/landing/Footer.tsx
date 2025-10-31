import { Logo } from '@/components/icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm">
          <p className="mb-2">
            &copy; {currentYear} Come Rico Vive Sano. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-x-4">
            <a href="#" className="hover:underline">Aviso Legal</a>
            <span>|</span>
            <a href="#" className="hover:underline">Política de Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:underline">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
