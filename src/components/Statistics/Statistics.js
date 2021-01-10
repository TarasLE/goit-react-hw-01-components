// import React from 'react'
import styles from './Statistics.module.css';

export default function Statistics({ title, stats}) {
  // console.log(`${title.length}`);
  // testTitle = { title };
  return (
  <section className="statistics">
      {title? (
            <h2 className="title">{title}</h2>
                ): ('')}
           
     
      <ul className="stat-list">
        {stats.map(item => (
    <li className="item" key={item.id}>
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}</span>
    </li>
        ))}
   
  </ul>
</section>
  )
}