import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={styles.TransactionHistory}>
  <thead>
    <tr>
      <th className={styles.Header}>Type</th>
      <th className={styles.Header} >Amount</th>
      <th className={styles.Header}>Currency</th>
    </tr>
  </thead>
        
  <tbody>
  {items.map(item=> (
    <tr key={item.id}>
      <td className={styles.Data}>{item.type}</td>
      <td className={styles.Data}>{item.amount}</td>
      <td className={styles.Data}>{item.currency}</td>
    </tr>
            ))}  
  </tbody>
       </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}
