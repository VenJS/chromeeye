import React from 'react';
import styles from './Typography.module.scss';
import { TypographyProps } from '@/interfaces/interfaces';


export const Typography = ({ variant, children, className }: TypographyProps) => {
  return (
    <span className={`${styles[variant]} ${className || ''}`}>
      {children}
    </span>
  );
};