import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

export default function FriendsListItem({ avatar, name, isOnline }) {
   return (
        
        <li className={isOnline? styles.ItemOnline : styles.ItemOfline } >
           <span className={styles.Status}></span>
  <img className={styles.Avatar} src={avatar} alt="" width="48" />
  <p className={styles.Name}>{name}</p>
</li>
        )
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

