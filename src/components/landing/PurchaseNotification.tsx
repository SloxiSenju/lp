"use client";

import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";

const names = ["Ana", "Carlos", "Beatriz", "David", "Elena", "Fernando", "Gloria", "Hector"];
const cities = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Málaga", "Murcia", "Palma"];

export function PurchaseNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [purchase, setPurchase] = useState({ name: "", city: "" });

  const showRandomNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    setPurchase({ name: randomName, city: randomCity });
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Ocultar después de 5 segundos
  };

  useEffect(() => {
    const interval = setInterval(() => {
        showRandomNotification();
    }, 12000); // Mostrar una nueva notificación cada 12 segundos

    // Mostrar la primera notificación después de un breve retraso
    const initialTimeout = setTimeout(showRandomNotification, 5000);

    return () => {
        clearInterval(interval)
        clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-5 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-white rounded-lg shadow-2xl p-4 flex items-center border-l-4 border-accent">
        <div className="bg-accent/20 p-2 rounded-full mr-4">
            <ShoppingCart className="h-6 w-6 text-accent" />
        </div>
        <div>
          <p className="font-bold text-sm text-primary">
            ¡Compra Reciente!
          </p>
          <p className="text-sm text-muted-foreground">
            {purchase.name} de {purchase.city} acaba de comprar el eBook.
          </p>
        </div>
      </div>
    </div>
  );
}
