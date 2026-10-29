import { useState, useEffect } from "react";
import type { Customer } from "../assets/types/Customer";
export function CustomersList() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  // (...código existente...)

  async function fetchData(): Promise<void> {
    try {
      const response = await fetch("/customers");
      if (!response.ok) {
        throw new Error(`Erro ao buscar clientes: ${response.status}`);
      }

      const data: Customer[] = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error("Não foi possível carregar os clientes.", error);
    }
  }

  // Hook useEffect()
  // UM DETALHE EXTREMAMENTE IMPORTANTE é o vetor vazio ([]) no
  // segundo parâmetro. Ele é chamado VETOR DE DEPENDÊNCIAS. O vetor
  // vazio, neste caso, indica que o useEffect() deverá ser
  // executado apenas uma vez, quando o componente estiver sendo
  // carregado na tela, para chamar fetchData().
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p className="text-secondary">Total de clientes: {customers.length}</p>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">Município</th>
              <th scope="col">UF</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.ident_document}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.municipality}</td>
                <td>{customer.state}</td>
              </tr>
            ))}

            {customers.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center text-secondary">
                  Nenhum cliente cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
