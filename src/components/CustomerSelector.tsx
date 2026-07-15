import { useEffect, useState } from "react";
import { getCustomers } from "../api/customerApi";
import type { Customer } from "../models/Customer";


interface Props {
  value: number | null;
  onChange: (customerId: number | null) => void;
}


export function CustomerSelector({
  value,
  onChange,
}: Props) {

  const [customers, setCustomers] =
    useState<Customer[]>([]);


  useEffect(() => {

    getCustomers()
      .then(data => {

        console.log("Customers loaded:", data);

        setCustomers(data);

      });

  }, []);



  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {

    console.log(
      "Dropdown changed:",
      e.target.value
    );

    const id = Number(e.target.value);

    console.log(
      "Converted id:",
      id
    );


    if (!Number.isNaN(id)) {

      onChange(id);

    }

  };



  return (

    <div className="mb-3">
      <label className="form-label fw-bold">
        Customer
      </label>

      <select

        className="form-select"

        value={value ?? ""}

        onChange={handleChange}

      >

        <option value="">

          Select customer...

        </option>


        {customers.map(customer => (

          <option

            key={customer.id}

            value={customer.id}

          >

            {customer.firstName} {customer.lastName}

          </option>

        ))}


      </select>


    </div>

  );

}