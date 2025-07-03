'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from '../Pricing.module.css';

interface CustomSelectProps {
  options: Array<{value: string | number; label: string}>;
  value: string | number;
  onChange: (value: string | number) => void;
  label?: string;
}

const CustomSelect = ({ options, value, onChange, label }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  
  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.telerikSelectContainer} ref={selectRef}>
      {label && <label className={styles.telerikSelectLabel}>{label}</label>}
      <div 
        className={`${styles.telerikSelect} ${isOpen ? styles.open : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.telerikSelectedValue}>
          {selectedOption?.label}
        </div>
        <div className={styles.telerikArrow}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {isOpen && (
        <div className={styles.telerikDropdown}>
          {options.map((option) => (
            <div 
              key={option.value} 
              className={`${styles.telerikOption} ${option.value === value ? styles.selected : ''}`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;