import FriendListItem from 'components/FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendsList>
  );
};

export default FriendList;
