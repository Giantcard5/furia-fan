'use client';

import React, { 
    createContext, 
    useContext 
} from 'react';

import styled from 'styled-components';

const RadioGroupContext = createContext<{
    value?: string;
    onValueChange?: (value: string) => void;
}>({});

const RadioGroupContainer = styled.div`;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[2]};
`;

interface RadioGroupProps {
    value?: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({ value, onValueChange, children }) => {
    return (
        <RadioGroupContext.Provider value={{ value, onValueChange }}>
            <RadioGroupContainer role='radiogroup'>{children}</RadioGroupContainer>
        </RadioGroupContext.Provider>
    );
};

const RadioItemContainer = styled.div`;
    display: flex;
    align-items: center;
`;

const RadioCircle = styled.div<{ checked: boolean }>`;
    position: relative;
    width: 1rem;
    height: 1rem;
    border-radius: ${({ theme }) => theme.radii.full};
    border: 2px solid ${({ checked, theme }) => (checked ? theme.colors.white : theme.colors.gray[600])};
    transition: ${({ theme }) => theme.transitions.default};
    cursor: pointer;
    
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.5rem;
        height: 0.5rem;
        border-radius: ${({ theme }) => theme.radii.full};
        background-color: ${({ checked, theme }) => (checked ? theme.colors.white : 'transparent')};
        transition: ${({ theme }) => theme.transitions.default};
    }
    
    &:hover {
        border-color: ${({ theme }) => theme.colors.white};
    }
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`;
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;

interface RadioGroupItemProps {
    value: string;
    id: string;
    children?: React.ReactNode;
};

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ value, id, children }) => {
    const { value: groupValue, onValueChange } = useContext(RadioGroupContext);
    const checked = value === groupValue;

    const handleChange = () => {
        if (onValueChange) {
            onValueChange(value);
        };
    };

    return (
        <RadioItemContainer>
            <RadioInput id={id} value={value} checked={checked} onChange={handleChange} />
            <RadioCircle checked={checked} onClick={handleChange} />
            {children}
        </RadioItemContainer>
    );
};

export default { RadioGroup, RadioGroupItem }