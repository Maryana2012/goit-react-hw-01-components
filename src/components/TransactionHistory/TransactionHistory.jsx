import transaction from '../../transactions.json';
import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css'
export default function TransactionHistory(props) {

    return <table className={css.transactionHistory }>
             <thead>
              <tr>
               <th>Type</th>
               <th>Amount</th>
               <th>Currency</th>
              </tr>
             </thead>

             <tbody>
            
            {transaction.map(el =>  
            <tr key={el.id}>
             <td>{el.type}</td>
             <td>{el.amount}</td>
             <td>{el.currency}</td>
             </tr>)}
            
   
            </tbody>
           </table>
}

TransactionHistory.propType = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.arrayOf(PropTypes.string)
} 