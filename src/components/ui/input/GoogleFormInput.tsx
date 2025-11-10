import React, { useState, useId } from 'react';
import styled, { css } from 'styled-components';

interface GoogleFormInputProps {
  value: string;
  type?: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  label?: string;
}

export const GoogleFormInput: React.FC<GoogleFormInputProps> = ({
  value,
  type = 'text',
  required = false,
  onChange,
  placeholder = '',
  label,
}) => {
  const [focused, setFocused] = useState(false);
  const id = useId();
  const isDate = type === 'date';
  const isActive = !!value || focused || isDate;
  return (
    <Container>
      <Input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {label && (
        <Label htmlFor={id} active={!!value || focused}>
          {label}
        </Label>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0.5rem;
  height: 5rem;
  min-height: 5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;

  &:focus-within {
    border-color: #1a73e8;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  z-index: 1;
  background: transparent;
  font-size: 1.6rem;
  color: #202124;
  &::placeholder {
    color: transparent;
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(40%);
  }
`;

const Label = styled.label<{ active: boolean }>`
  position: absolute;
  left: 1rem;
  bottom: calc(100% / 3.5);
  /* top: 25%; */
  font-size: 1.6rem;
  color: #5f6368;
  pointer-events: none; /* 🧠 prevents accidental block of input click */
  transition: all 0.2s ease-in-out;
  background: white;
  padding: 0.2rem 0.5rem;

  ${({ active }) =>
    active &&
    css`
      bottom: calc(100% - 0.8rem);
      font-size: 1.2rem;
      color: #1a73e8;
    `}
`;
