import { FC } from "react";

import PrimeContextContextProvider from "../contexts/PrimeNumbersContext";
import PrimeNumberForm from "../page/primeNumber/PrimeNumberForm";
import PrimeNumbersResults from "../page/primeNumber/PrimeNumberResults";

const PrimeContainer: FC = () => {
  return (
    <PrimeContextContextProvider>
      <div className="container mx-auto">
        <PrimeNumberForm />
        <PrimeNumbersResults />
      </div>
    </PrimeContextContextProvider>
  );
}

export default PrimeContainer;
