import PropTypes from 'prop-types';
import css from "../FriendsList/FriendsList.module.css";
import FriendListItem from 'components/FriendsListItem/FriendsListItem';

export default function FriendsList({ friends }) {

   return <ul className={css.friendList} >
            {friends.map(friend => 
            <FriendListItem
            key={friend.id}
            nameFriend={friend.name}
            avatarFriend={friend.avatar}
            isOnline={friend.isOnline}
              />)}
          </ul>
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired
  }))
}
