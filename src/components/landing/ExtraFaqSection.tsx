const faqs = [
    {
      question: "¿Necesito ingredientes raros o caros?",
      answer:
        "No. Todas las recetas están pensadas para usar ingredientes naturales, nutritivos y que puedes encontrar en tu supermercado local o tienda de productos naturales.",
    },
    {
      question: "¿Es solo para personas con intolerancias?",
      answer:
        "¡Absolutamente no! Es perfecto para cualquier persona que quiera reducir el azúcar refinado, el gluten y la lactosa de su dieta sin sacrificar el sabor.",
    },
    {
      question: "¿Cómo recibo el eBook y los bonos?",
      answer:
        "El material es 100% digital (formato PDF). Una vez confirmado tu pago, recibirás un correo electrónico automático con el enlace de acceso inmediato a todo el contenido.",
    },
  ];
  
  export function ExtraFaqSection() {
    return (
      <section id="extra-faq" className="bg-background py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center font-headline text-3xl sm:text-4xl text-primary mb-12">
              Preguntas Frecuentes (FAQ)
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-pink-200 rounded-lg p-6 bg-white shadow-sm"
                >
                  <h3 className="font-bold text-pink-500 text-lg mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  