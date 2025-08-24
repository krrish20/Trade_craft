
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import type { TradeSetup } from '@/lib/types';

interface TradePlannerContextType {
  setups: TradeSetup[];
  addSetup: (setup: TradeSetup) => void;
  deleteSetup: (id: string) => void;
}

const TradePlannerContext = createContext<TradePlannerContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'tradecraft-planner-setups';

export const TradePlannerProvider = ({ children }: { children: ReactNode }) => {
  const [setups, setSetups] = useState<TradeSetup[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedSetups = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedSetups) {
        setSetups(JSON.parse(savedSetups));
      }
    } catch (error) {
      console.error("Failed to load trade setups from localStorage", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveSetups = useCallback((newSetups: TradeSetup[]) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSetups));
      setSetups(newSetups);
    } catch (error) {
      console.error("Failed to save trade setups to localStorage", error);
    }
  }, []);

  const addSetup = useCallback((setup: TradeSetup) => {
    const newSetups = [...setups, setup];
    saveSetups(newSetups);
  }, [setups, saveSetups]);

  const deleteSetup = useCallback((id: string) => {
    const newSetups = setups.filter(s => s.id !== id);
    saveSetups(newSetups);
  }, [setups, saveSetups]);

  const value = {
    setups,
    addSetup,
    deleteSetup,
  };

  return (
    <TradePlannerContext.Provider value={value}>
      {isLoaded ? children : null}
    </TradePlannerContext.Provider>
  );
};

export const useTradePlanner = () => {
  const context = useContext(TradePlannerContext);
  if (context === undefined) {
    throw new Error('useTradePlanner must be used within a TradePlannerProvider');
  }
  return context;
};
