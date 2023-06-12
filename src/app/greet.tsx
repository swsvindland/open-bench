import { FC } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { useQuery } from "@tanstack/react-query";

export const Greet: FC = () => {
  const greetQuery = useQuery(["Greet"], () => {
    return invoke<string>("greet", { name: "Next.js" });
  });

  if (greetQuery.isLoading) {
    return <span>Loading...</span>;
  }

  if (greetQuery.isError) {
    return <span>Error</span>;
  }

  return <span>{greetQuery.data}</span>;
};
