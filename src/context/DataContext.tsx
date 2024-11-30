"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { ReactNode } from "react";
import { PageData, DataContextType } from "@/interfaces/interfaces";

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://s3.eu-west-2.amazonaws.com/chromeye.tasks/data.json")
      .then((res) => {
        setData(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
