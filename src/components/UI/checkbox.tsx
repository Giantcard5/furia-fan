'use client';

import React from 'react';

import styled from 'styled-components';

import {
    Check
} from 'lucide-react';

const CheckboxContainer = styled.div`;
    display: inline-flex;
    align-items: center;
    position: relative;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`;
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    background: ${({ checked, theme }) => (checked ? theme.colors.white : 'transparent')};
    border: 1px solid ${({ checked, theme }) => (checked ? theme.colors.white : theme.colors.gray[600])};
    border-radius: ${({ theme }) => theme.radii.sm};
    transition: ${({ theme }) => theme.transitions.default};
    cursor: pointer;
    
    &:hover {
        border-color: ${({ theme }) => theme.colors.white};
    }
    
    svg {
        visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
        color: ${({ theme }) => theme.colors.black};
    }
`;

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, disabled = false }) => {
    const handleChange = () => {
        if (!disabled) {
            onChange(!checked);
        };
    };

    return (
        <CheckboxContainer>
            <HiddenCheckbox checked={checked} onChange={handleChange} disabled={disabled} />
            <StyledCheckbox checked={checked} onClick={handleChange}>
                <Check size={12} />
            </StyledCheckbox>
        </CheckboxContainer>
    );
};

export default Checkbox;