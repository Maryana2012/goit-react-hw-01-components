import PropTypes from 'prop-types';
import css from '../FriendsListItem/FriendsListItem.module.css'

export default function FriendsListItem(props) {
    const { avatarFriend, nameFriend, isOnline } = props;

    return <li className={css.item}  >       
        <span className={`${css.status} ${css[isOnline]}`}>
         
        </span>
            
           <img className={css.avatar}
              src={avatarFriend}
              alt="User avatar"
              width="48" />
           <p className="name">{nameFriend}</p>
           </li>
}

FriendsListItem.propTypes = {
    nameFriend: PropTypes.string.isRequired,
    avatarFriend: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
