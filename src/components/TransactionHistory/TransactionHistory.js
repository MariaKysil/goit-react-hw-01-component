import PropTypes from 'prop-types';
import {
  Table,
  Thread,
  TableCell,
  TableItem,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thread>
        <tr>
          <TableCell>Type</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Currency</TableCell>
        </tr>
      </Thread>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableItem items={items} key={id}>
              <TableCell>{type}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
            </TableItem>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;
