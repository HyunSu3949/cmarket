import axiosInstance from "lib/axiosInstance";
import { useQuery } from "react-query";

async function getMyOrder() {
  const result = axiosInstance("/order/");
  return result;
}

export default function useMyOrder() {
  const { data } = useQuery(["myorder"], getMyOrder, {
    onSuccess: (data) => {},
  });

  return { data };
}
