import React, { createContext, FC, ReactNode, useContext, useState } from 'react';


// Paso 1: Crear un contexto
interface ContextProps {
  isBoolean: boolean;
  setBoolean: (value: boolean) => void;
  isReference: string;
  setReference: (value: string) => void;
}

const BooleanContext = createContext<ContextProps | undefined>(undefined);

// Paso 2: Crear un proveedor para el contexto
interface BooleanContextProviderProps {
  children: ReactNode;
}

const BooleanContextProvider: FC<BooleanContextProviderProps> = ({ children }) => {
  const [isBoolean, setIsBoolean] = useState<boolean>(false);
  const [isReference, setIsReference] = useState<string>('');


  const setBoolean = (value: boolean) => {
    setIsBoolean(value);
  };

  const setReference = (value: string) => {
    setIsReference(value);
  };



  const contextValue: ContextProps = {
    isBoolean,
    setBoolean,
    isReference,
    setReference,
  };

  return <BooleanContext.Provider value={contextValue}>{children}</BooleanContext.Provider>;
};

// Hook personalizado para usar el contexto
const useBoolean = () => {
  const context = useContext(BooleanContext);

  if (!context) {
    throw new Error('useBoolean debe ser utilizado dentro de un proveedor BooleanContextProvider');
  }

  return context;
};

export { BooleanContextProvider, useBoolean };
