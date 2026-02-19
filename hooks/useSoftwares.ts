// hooks/useSoftwares.ts
"use client";

import { useEffect, useState } from "react";
import { Software } from "@/components/ServiceInformatique/types";
import { softwares as defaultSoftwares } from "@/components/ServiceInformatique/data";

export function useSoftwares() {
  const [softwares, setSoftwares] = useState<Software[]>(defaultSoftwares);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSoftwares = async () => {
      try {
        const response = await fetch("/api/softwares", { signal: AbortSignal.timeout(2000) });
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        setSoftwares(data);
        setError(null);
      } catch (err) {
        // Silencieux - garder les données locales
      } finally {
        setLoading(false);
      }
    };

    fetchSoftwares();
  }, []);

  return { softwares, loading, error };
}
