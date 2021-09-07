import Profile from '../Profile/Profile';
import user from '../../user.json';
import Statistics from '../Statistics/Statistics';
import statisticalData from '../../statistical-data.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json';
import { Container } from '../App/App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
