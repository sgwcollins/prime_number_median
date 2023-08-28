import { FC, useContext } from "react";
import { PrimeContext, PrimeContextType } from "../../contexts/PrimeNumbersContext";
import List from "../../components/virtualizeList/VirtualizeList";

const PrimeNumbersResults: FC = () => {

    const { data, maxNumber } = useContext(PrimeContext) as PrimeContextType;
    return (
        <div className="justify-between container gap-8 flex mt-8 mx-auto lg:w-1/3 md:w-4/6  shadow border p-8">
            <div>
                <h1 className="text-lg font-bold pb-5">Prime Numbers</h1>
                <div className="shadow border">
                    <input type="hidden" data-testid="list-primeNumbers" value={data?.data?.primeNumbers.join(',') || [].join(',')} />
                    {maxNumber ? <List items={data?.data?.primeNumbers || []} /> : <div style={{ height: '300px' }} />}

                </div>
            </div>
            <div>
                <h1 className="text-lg font-bold pb-5">Median Numbers</h1>
                <div className="shadow border">
                <input type="hidden" data-testid="list-median" value={data?.data?.median.join(',') || [].join(',')} />
                    {maxNumber ? <List items={data?.data?.median || []} /> : <div style={{ height: '300px' }} />}
                </div>
            </div>

        </div>
    );
};

export default PrimeNumbersResults;