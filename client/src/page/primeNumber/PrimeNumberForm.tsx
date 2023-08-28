import { FC, useContext } from "react";
import { PrimeContext, PrimeContextType } from "../../contexts/PrimeNumbersContext";

const PrimeNumberForm: FC = () => {

  const { register, handleSubmit, updateMaxNumber, errors, data, onClear } = useContext(PrimeContext) as PrimeContextType;



  return (
    <div className="container mt-8 mx-auto lg:w-1/3 md:w-4/6 shadow border p-8">

      <h1 className="text-lg font-bold pb-8">
        Submit a max number
      </h1>
      <form onSubmit={handleSubmit(updateMaxNumber)}>
        <div>
          <div className="relative flex w-full flex-wrap items-stretch mb-10 ">
            <input data-testid="maxNumber" type="text" {...register('maxNumber', {
              valueAsNumber: true,
            })} placeholder="20,0000" className={`py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border-1 shadow outline-none focus:outline-none focus:ring w-full pl-5 ${errors.maxNumber ? 'border border-red-500' : ''}`} />
            {errors?.maxNumber && (<p className="pt-5 text-red-500 text-xs font-bold">{errors.maxNumber.message}</p>)}

          </div>
          <div className="flex justify-between">
            <button data-testid="maxNumberSubmit" disabled={data?.isLoading ? true : false} type="submit" className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Submit
            </button>

            <button data-testid="maxNumberClear" onClick={onClear} disabled={data?.isLoading ? true : false} type="button" className="border border-red-500 text-red-500 active:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Clear
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default PrimeNumberForm;