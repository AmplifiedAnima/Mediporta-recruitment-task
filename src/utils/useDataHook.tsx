import { useState } from "react";

export const useDataHook = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [order, setOrder] = useState("desc");
  const [sort, setSort] = useState("popular");
  const [inName, setInName] = useState("");
  const [triggerFetch, setTriggerFetch] = useState(false);

  const fetchTags = async () => {
    const params = new URLSearchParams({
      page: page.toString(),
      pagesize: pageSize.toString(),
      order: order,
      sort: sort,
      inname: inName,
      site: "stackoverflow",
    });

    const url = `https://api.stackexchange.com/2.3/tags?${params}`;
    console.log("Requesting URL:", url);

    const response = await fetch(url);
    const data = await response.json();
    console.log("Raw API response:", data);

    if (!response.ok) {
      // Create a new error object and attach the response to it
      const error = new Error(
        `Error ${response.status}: ${data.error_message}`
      );

      throw error;
    }
    return data;
  };

  return {
    page,
    setPage,
    pageSize,
    setPageSize,
    order,
    setOrder,
    sort,
    setSort,
    inName,
    setInName,
    fetchTags,
    triggerFetch,
    setTriggerFetch,
  };
};
