import React from 'react';
import styles from './index.module.css';

const Table = ({ className, children }) => {
  return (
    <div>
      <table className={`${styles.table} ${className}`}>
        {children}
      </table>
    </div>
  );
}

Table.Head = ({ className, children }) => {
  return (
    <thead className={`${styles.tableHead} ${className}`}>
      {children}
    </thead>
  );
}

Table.Body = ({ className, children }) => {
  return (
    <tbody className={`${styles.tableBody} ${className}`}>
      {children}
    </tbody>
  );
}

Table.Column = ({ className, children }) => {
  return (
    <td className={`${styles.tableColumn} ${className}`}>
      {children}
    </td>
  );
}

Table.Row = ({ className, children, onClick }) => {
  return (
    <tr
      className={`${styles.tableRow} ${className}`}
      onClick={onClick}
    >
      {children}
    </tr>
  );
}

Table.Cell = ({ className, children }) => {
  return (
    <td className={`${styles.tableCell} ${className}`}>
      {children}
    </td>
  );
}

Table.LoadingCell = ({ className, children }) => {
  return (
    <td className={`${styles.tableLoadingCell} ${className}`}>
      {children}
    </td>
  );
}

export default Table;
