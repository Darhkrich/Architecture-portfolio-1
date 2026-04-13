"use client";
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContact = () => setIsContactOpen(!isContactOpen);

  return (
    <ModalContext.Provider value={{ isContactOpen, toggleContact }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}