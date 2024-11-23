// src/components/ui/card.js
import React from 'react';

export const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);
