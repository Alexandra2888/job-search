import axios from "axios";

import type { Degree } from "@/api/types";

const getDegrees = async () => {
  const baseUrl = "http://localhost:3000";
  const url = `${baseUrl}/degrees`;
  const response = await axios.get<Degree[]>(url);
  console.log("degree", response.data);
  
  return response.data;
};

export default getDegrees;
