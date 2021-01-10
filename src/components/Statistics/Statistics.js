import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats}) {
  return (
  <section className={styles.Statistics}>
      {title? (
            <h2 className={styles.Title}>{title}</h2>
                ): ('')}
      <ul className={styles.StatList}>
        {stats.map(item => (
    <li className={styles.Item} key={item.id}>
      <span className={styles.Label}>{item.label}</span>
      <span className={styles.Percentage}>{item.percentage}%</span>
    </li>
        ))}
   
  </ul>
</section>
  )
}

  Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object.isRequired,
}