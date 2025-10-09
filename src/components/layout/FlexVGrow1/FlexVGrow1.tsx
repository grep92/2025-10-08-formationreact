import React from 'react';
import styles from './FlexVGrow1.module.css';

interface IFlexVGrow1Props {
  children:string|React.ReactElement|Array<React.ReactElement|string>
}

const FlexVGrow1: React.FC<IFlexVGrow1Props> = ({children}) => (
  <div className={styles.FlexVGrow1} data-testid="FlexVGrow1">
    {children}
  </div>
);

export default FlexVGrow1;
