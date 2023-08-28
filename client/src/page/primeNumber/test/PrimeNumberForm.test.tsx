import { render, screen, fireEvent } from '@testing-library/react';
import  { PrimeContext, PrimeContextType } from '../../../contexts/PrimeNumbersContext';
import PrimeNumberForm from '../PrimeNumberForm';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

export const mockPrimeContext: PrimeContextType = {
    register: (inputName) => ({
        ref: jest.fn(), // mock the ref property
        onChange: jest.fn(),
        onBlur: jest.fn(),
        name: inputName,
        // value: '100',  // provide a mock value
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
    maxNumber: undefined, // Or provide a default value like 10
    data: null, // Adjust as needed based on the shape of UseQueryResult<PrimeInfo>
};


describe('Prime Number Form', () => {

    it('Renders Input Box and change value', () => {
        render(
            <PrimeContext.Provider value={mockPrimeContext}>
                <PrimeNumberForm />
            </PrimeContext.Provider>
        );
        const inputElem = screen.getByTestId('maxNumber');
        expect(inputElem).toBeInTheDocument();
        fireEvent.change(inputElem, { target: { value: '1000' } });
        expect(inputElem).toHaveValue('1000');
    });


    it('calls the submit function when the component is clicked', () => {

        const handleSubmitMock = jest.fn(mockPrimeContext.handleSubmit);

        render(
            <PrimeContext.Provider value={{ ...mockPrimeContext, handleSubmit: handleSubmitMock }}>
                <PrimeNumberForm />
            </PrimeContext.Provider>
        );
        const inputElement = screen.getByTestId('maxNumber');
        const submitBtn = screen.getByTestId('maxNumberSubmit');

        fireEvent.change(inputElement, { target: { value: '10' } });

        fireEvent.click(submitBtn);

        expect(handleSubmitMock).toHaveBeenCalled();

    });

    it('calls the clear function when the component is clicked', () => {

        const handleOnClearMock = jest.fn(mockPrimeContext.onClear);

        render(
            <PrimeContext.Provider value={{ ...mockPrimeContext, onClear: handleOnClearMock }}>
                <PrimeNumberForm />
            </PrimeContext.Provider>
        );
        const inputElement = screen.getByTestId('maxNumber');
        const clearBtn = screen.getByTestId('maxNumberClear');

        fireEvent.change(inputElement, { target: { value: '10' } });

        fireEvent.click(clearBtn);

        expect(handleOnClearMock).toHaveBeenCalled();

    });

    it('displays error state for maxNumber', () => {

        const handleOnClearMock = jest.fn(mockPrimeContext.onClear);

        render(
            <PrimeContext.Provider value={{ ...mockPrimeContext, errors: { maxNumber: { type: 'required', message: 'Max Number is required' } } }}>
                <PrimeNumberForm />
            </PrimeContext.Provider>
        );

        const submitBtn = screen.getByTestId('maxNumberSubmit');

        fireEvent.click(submitBtn);

        expect(screen.getByText('Max Number is required')).toBeInTheDocument();

    });

});