import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const onClickImage = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="transaction-details">{title}</p>
      <p className="transaction-details">Rs {amount}</p>
      <p className="transaction-details">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          data-testid="delete"
          onClick={onClickImage}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
