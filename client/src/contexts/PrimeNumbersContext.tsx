import { FC, useState, createContext, PropsWithChildren, useMemo, useCallback } from "react";
import { usePrimeNumbers } from "../hooks/usePrimeNumbers";
import { UseQueryResult, useQueryClient } from "react-query";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister, useForm } from "react-hook-form";


export interface PrimeInfo {
  primeNumbers: number[],
  median: number[]
}

export interface PrimeContextType {

  register: UseFormRegister<{
    maxNumber: number;
  }>
  updateMaxNumber: (data: FormData) => void;
  onClear: () => void;
  handleSubmit: UseFormHandleSubmit<{
    maxNumber: number;
  }, undefined>
  errors: FieldErrors<{
    maxNumber: number;
  }>
  maxNumber: number | undefined;
  data: UseQueryResult<PrimeInfo> | null;

}

export const PrimeContext = createContext<PrimeContextType | null>(null);

const maxNumberSchema = yup.object({
  maxNumber: yup.number().typeError('Max number must be a number').required("Max number is required").min(2, 'Max number must be greater than 1').max(1_000_000, 'Max number must be greater than 1,000,000')
}).required();

type FormData = yup.InferType<typeof maxNumberSchema>;

const PrimeContextContextProvider: FC<PropsWithChildren> = ({ children }) => {

  const [maxNumber, setMaxNumber] = useState<number | undefined>(undefined);
  const queryClient = useQueryClient();

  const data = usePrimeNumbers(maxNumber);
  const updateMaxNumber = async (data: FormData) => {
    const { maxNumber } = data;
    setMaxNumber(maxNumber)
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(maxNumberSchema)
  });

  const onClear = useCallback(() => {
    reset();
    setMaxNumber(undefined)
    queryClient.clear()
  }, [queryClient, reset]);



  const value = useMemo(() => ({
    register,
    maxNumber,
    updateMaxNumber,
    handleSubmit,
    onClear,
    errors,
    data,
  }), [register, handleSubmit, errors, data, onClear, maxNumber])



  return (
    <PrimeContext.Provider value={value}>
      {children}
    </PrimeContext.Provider>
  )
};

export default PrimeContextContextProvider;