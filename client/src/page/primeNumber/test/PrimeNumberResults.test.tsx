import { render, screen } from '@testing-library/react';
import { PrimeContext, PrimeContextType, PrimeInfo } from '../../../contexts/PrimeNumbersContext';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { UseQueryResult } from 'react-query';
import PrimeNumbersResults from "../PrimeNumberResults";

export const mockPrimeContext: PrimeContextType = {
    register: (inputName) => ({
        ref: jest.fn(), // mock the ref property
        onChange: jest.fn(),
        onBlur: jest.fn(),
        name: inputName,
    }),
    updateMaxNumber: jest.fn(),
    onClear: jest.fn(),
    handleSubmit: jest.fn((dataCallback) => (e?: React.BaseSyntheticEvent) => {
        if (e) {
            e.preventDefault();
        }
        dataCallback({ maxNumber: 10 });

        return Promise.resolve();
    }),
    errors: {},
    maxNumber: 25,
    data: {
        data: {
            primeNumbers: [2, 3, 5],
            median: [3, 5]
        },
        isLoading: false,
        isError: false
    } as UseQueryResult<PrimeInfo>
};



global.ResizeObserver = require('resize-observer-polyfill')

describe('Prime Number Results', () => {

    it('Prime Numbers List', async () => {

        render(
            <PrimeContext.Provider value={mockPrimeContext}>
                <PrimeNumbersResults />
            </PrimeContext.Provider>
        );

        const inputElem = screen.getByTestId('list-primeNumbers');
        expect(inputElem).toHaveValue(mockPrimeContext?.data?.data?.primeNumbers.join(',') || '');
    });


    it('Median Number List', async () => {

        render(
            <PrimeContext.Provider value={mockPrimeContext}>
                <PrimeNumbersResults />
            </PrimeContext.Provider>
        );

        const inputElem = screen.getByTestId('list-median');
        expect(inputElem).toHaveValue(mockPrimeContext?.data?.data?.median.join(',') || '');
    });




});