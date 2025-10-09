import React from 'react';
import styles from './TemplateName.module.css';

interface TemplateNameProps {
  children:string|React.ReactElement|Array<React.ReactElement|string>
}

const TemplateName: React.FC<TemplateNameProps> = ({children}) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      {children}
    </div>
  )
};

export default TemplateName;
