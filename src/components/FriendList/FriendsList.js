import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';
import FriendsListItem from './FriendListItem';

export default function FriendsList({ friends }) {
    return (
        <ul className={styles.FriendsList}>
            {friends.map(item => (
                <div key={item.id}>
                <FriendsListItem
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                />
                 </div>
            ))}
        </ul>
        )
}

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired,
}
