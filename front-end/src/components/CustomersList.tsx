import { useState } from "react";
import type { Customer } from "../assets/types/Customer";

type CustomerListProps = {
  list?: Customer[];
};

export function CustomersList({ list = [] }: CustomerListProps) {
  const [customers, setCustomers] = useState([]);
}

// (...código existente...)
