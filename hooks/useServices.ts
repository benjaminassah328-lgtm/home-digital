// hooks/useServices.ts
"use client";

import { useEffect, useState } from "react";
import { Service } from "@/components/ServiceInformatique/types";
import { services as defaultServices } from "@/components/ServiceInformatique/data";

export function useServices() {
  const [services, setServices] = useState<Service[]>(defaultServices);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services", { signal: AbortSignal.timeout(2000) });
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        setServices(data);
        setError(null);
      } catch (err) {
        // Silencieux - garder les données locales
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
}
