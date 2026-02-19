"use client";

import { motion } from "framer-motion";
import { Service } from "./types";

interface Props {
  services: Service[];
}

export default function ServicesGrid({ services }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="bg-black/40 border border-purple-700 rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="text-4xl mb-3">{service.icon}</div>
          <h3 className="text-xl font-bold text-purple-400 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-300 mb-3">{service.description}</p>
          <ul className="space-y-1 text-sm text-gray-400">
            {service.features.map((feature, idx) => (
              <li key={idx}>✓ {feature}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
