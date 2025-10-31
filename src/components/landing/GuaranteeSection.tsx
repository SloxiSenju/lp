import { Button } from "@/components/ui/button";

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="bg-green-100/40 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-white p-8 sm:p-12 rounded-xl shadow-md border-t-4 border-green-400">
          <h2 className="font-headline text-3xl sm:text-4xl text-green-600 mb-4">
            8. ¡Te Damos Nuestra Garantía CERO RIESGO!
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Queremos que pruebes la diferencia por ti mismo.
          </p>
          <p className="text-lg text-foreground mb-8">
            Si en los próximos <strong>7 días</strong>, después de probar nuestras recetas,
            no sientes que son las más deliciosas, prácticas y saludables que
            has encontrado... o si simplemente no estás 100% satisfecho,{" "}
            <strong>
              simplemente contáctanos y te haremos un reembolso total, sin
              preguntas
            </strong>
            . ¡No tienes nada que perder y un mundo de postres por ganar!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-lg transform hover:scale-105 transition-transform px-10 py-8 text-xl rounded-full"
          >
            <a href="https://pay.hotmart.com/H102664906U">
              ¡COMPRAR CON CONFIANZA! (Garantía de 7 Días)
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Tu satisfacción está garantizada.
          </p>
        </div>
      </div>
    </section>
  );
}
