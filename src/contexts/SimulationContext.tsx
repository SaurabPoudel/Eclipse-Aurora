'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

export const SimulationContext = createContext<null | {
  simulationSpec: SimulationSpecificationProps;
  setSimulationSpec: Dispatch<SetStateAction<SimulationSpecificationProps>>;
}>(null);

export type SimulationSpecificationProps = {
  earth: {
    theta: number;
    x: number;
    y: number;
    z: number;
    stop_rev: boolean;
    stop_rot: boolean;
  };
  moon: {
    theta: number;
    x: number;
    y: number;
    z: number;
    stop_rev: boolean;
    stop_rot: boolean;
  };
  sun: {};
};

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [simulationSpec, setSimulationSpec] =
    useState<SimulationSpecificationProps>({
      earth: {
        theta: 0,
        x: 0,
        y: 0,
        z: 1000,
        stop_rev: false,
        stop_rot: false,
      },
      moon: {
        theta: 0,
        x: 0,
        y: 0,
        z: 2000,
        stop_rev: false,
        stop_rot: false,
      },
      sun: {},
    });

  return (
    <SimulationContext.Provider
      value={{
        simulationSpec,
        setSimulationSpec,
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
}

export function useSimulationSpecs() {
  const context = useContext(SimulationContext);
  if (!context) {
    throw new Error('useSimulationSpecs must be used within a ContextProvider');
  }
  return context;
}
