import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar, Name } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
