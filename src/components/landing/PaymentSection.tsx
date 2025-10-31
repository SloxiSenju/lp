
export function PaymentSection() {
  return (
    <section id="payment" className="bg-background py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl text-primary mb-4">
            7. ¿Cómo es el proceso de pago y es seguro?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            El pago es simple y 100% seguro a través de nuestra plataforma
            cifrada. Aceptamos todas las principales tarjetas de
            crédito/débito y opciones populares como PayPal (si aplica en tu
            país). Simplemente haz clic en el botón de compra, ingresa tus
            datos y en segundos recibirás el acceso total al eBook y a los 4
            Bonos.
          </p>
          <div className="bg-slate-100 rounded-lg p-6 max-w-lg mx-auto shadow-inner">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Aceptamos los principales métodos de pago
            </h3>
            <div className="flex justify-center items-center">
              <div
                className="h-[50px] w-[400px] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: "url('https://i.imgur.com/PzKZRrU.png')",
                }}
                role="img"
                aria-label="Métodos de pago aceptados: Visa, Mastercard, American Express, PayPal"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
