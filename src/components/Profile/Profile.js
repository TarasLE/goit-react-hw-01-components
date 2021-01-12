import PropTypes from 'prop-types'
import styles from './Profile.module.css'

export default function Profile({ avatar, name, tag, location, stats }) {
    return (
        <div className={styles.Profile}>
            <div className={styles.Description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={styles.Avatar}
                />
                <p className={styles.Name}>{name}</p>
                <p className={styles.Tag}>{tag}</p>
                <p className={styles.Location}>{location}</p>
            </div>

            <ul className={styles.Stats}>
                <li className={styles.StatsBox}>
                    <span className={styles.Label}>Followers</span>
                    <span className={styles.Quantity}>{stats.followers}</span>
                </li>
                <li className={styles.StatsBox}>
                    <span className={styles.Label}>Views</span>
                    <span className={styles.Quantity}>
                        <span className="quantity">{stats.views}</span>
                    </span>
                </li>
                <li className={styles.StatsBox}>
                    <span className={styles.Label}>Likes</span>
                    <span className={styles.Quantity}>
                        <span className="quantity">{stats.likes}</span>
                    </span>
                </li>
            </ul>
        </div>
    )
}

Profile.defaultProps = {
    avatar: 'https://cdn.onlinewebfonts.com/svg/img_219521.svg',
    stats: {
        followers: 0,
        views: 0,
        likes: 0,
    },
}

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object,
}
