export function ClosingSection() {
    return (
      <section id="closing" className="bg-secondary py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl text-primary mb-6 text-center">
              9. ¿Qué pasa si lo dejo para después?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Si esperas, solo hay dos certezas:
            </p>
            <ul className="space-y-4 text-lg">
              <li>
                <p>
                  <strong className="text-accent">El Precio Subirá:</strong> La
                  promoción de <strong>$5,99 USD</strong> es una oferta de
                  lanzamiento limitada. Mañana podría volver a su precio regular
                  de $25.00 USD.
                </p>
              </li>
              <li>
                <p>
                  <strong className="text-accent">
                    Seguirás Sufriendo el Antojo:
                  </strong>{" "}
                  Continuarás con la frustración de buscar recetas que fallan,
                  sintiéndote culpable o experimentando malestares por el
                  azúcar, el gluten o la lactosa. El dolor de perderte el postre
                  perfecto es real.
                </p>
              </li>
            </ul>
            <p className="text-center font-bold text-xl text-primary mt-12">
              ¡No pospongas tu bienestar y tu placer!
            </p>
          </div>
        </div>
      </section>
    );
  }
  