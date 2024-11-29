"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import {PageData} from "@/interfaces/interfaces";

export const useFetchData = () => {
    const [data, setData] = useState<PageData | null>(null);

    useEffect(() => {
        axios.get("https://s3.eu-west-2.amazonaws.com/chromeye.tasks/data.json").then((res) => {
            setData(res.data);
        });
      }, []);
    

      return {headerMenus: data?.main_menu, hero: data?.hero, services: data?.services, portfolio: data?.portfolio, agencyServices: data?.agency_services, companyData: data?.company_data, footer: data?.footer_menu};
}