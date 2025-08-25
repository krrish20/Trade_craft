
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import type { TradeSetup, ChecklistItem } from '@/lib/types';
import { defaultPreTradeChecklist, defaultPostTradeChecklist } from '@/content/resources';

interface TradePlannerContextType {
  setups: TradeSetup[];
  addSetup: (setup: TradeSetup) => void;
  deleteSetup: (id: string) => void;
  preTradeChecklist: ChecklistItem[];
  postTradeChecklist: ChecklistItem[];
  addChecklistItem: (item: ChecklistItem, list: 'preTrade' | 'postTrade') => void;
  deleteChecklistItem: (id: string, list: 'preTrade' | 'postTrade') => void;
}

const TradePlannerContext = createContext<TradePlannerContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY_SETUPS = 'tradecraft-planner-setups';
const LOCAL_STORAGE_KEY_PRE_CHECKLIST = 'tradecraft-planner-pre-checklist';
const LOCAL_STORAGE_KEY_POST_CHECKLIST = 'tradecraft-planner-post-checklist';

export const TradePlannerProvider = ({ children }: { children: ReactNode }) => {
  const [setups, setSetups] = useState<TradeSetup[]>([]);
  const [preTradeChecklist, setPreTradeChecklist] = useState<ChecklistItem[]>(defaultPreTradeChecklist);
  const [postTradeChecklist, setPostTradeChecklist] = useState<ChecklistItem[]>(defaultPostTradeChecklist);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedSetups = localStorage.getItem(LOCAL_STORAGE_KEY_SETUPS);
      if (savedSetups) {
        setSetups(JSON.parse(savedSetups));
      }
      const savedPreChecklist = localStorage.getItem(LOCAL_STORAGE_KEY_PRE_CHECKLIST);
      if (savedPreChecklist) {
        setPreTradeChecklist(JSON.parse(savedPreChecklist));
      }
      const savedPostChecklist = localStorage.getItem(LOCAL_STORAGE_KEY_POST_CHECKLIST);
      if (savedPostChecklist) {
        setPostTradeChecklist(JSON.parse(savedPostChecklist));
      }
    } catch (error) {
      console.error("Failed to load trade planner data from localStorage", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveToLocalStorage = useCallback((key: string, data: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Failed to save ${key} to localStorage`, error);
    }
  }, []);

  const addSetup = useCallback((setup: TradeSetup) => {
    const newSetups = [...setups, setup];
    setSetups(newSetups);
    saveToLocalStorage(LOCAL_STORAGE_KEY_SETUPS, newSetups);
  }, [setups, saveToLocalStorage]);

  const deleteSetup = useCallback((id: string) => {
    const newSetups = setups.filter(s => s.id !== id);
    setSetups(newSetups);
    saveToLocalStorage(LOCAL_STORAGE_KEY_SETUPS, newSetups);
  }, [setups, saveToLocalStorage]);

  const addChecklistItem = useCallback((item: ChecklistItem, list: 'preTrade' | 'postTrade') => {
    if (list === 'preTrade') {
      const newList = [...preTradeChecklist, item];
      setPreTradeChecklist(newList);
      saveToLocalStorage(LOCAL_STORAGE_KEY_PRE_CHECKLIST, newList);
    } else {
      const newList = [...postTradeChecklist, item];
      setPostTradeChecklist(newList);
      saveToLocalStorage(LOCAL_STORAGE_KEY_POST_CHECKLIST, newList);
    }
  }, [preTradeChecklist, postTradeChecklist, saveToLocalStorage]);
  
  const deleteChecklistItem = useCallback((id: string, list: 'preTrade' | 'postTrade') => {
      if (list === 'preTrade') {
        const newList = preTradeChecklist.filter(i => i.id !== id);
        setPreTradeChecklist(newList);
        saveToLocalStorage(LOCAL_STORAGE_KEY_PRE_CHECKLIST, newList);
      } else {
        const newList = postTradeChecklist.filter(i => i.id !== id);
        setPostTradeChecklist(newList);
        saveToLocalStorage(LOCAL_STORAGE_KEY_POST_CHECKLIST, newList);
      }
  }, [preTradeChecklist, postTradeChecklist, saveToLocalStorage]);


  const value = {
    setups,
    addSetup,
    deleteSetup,
    preTradeChecklist,
    postTradeChecklist,
    addChecklistItem,
    deleteChecklistItem
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
