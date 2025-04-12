const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false
}) => {
  return (
    <div className='bg-white p-4 rounded-lg flex justify-between'>
      <div className='w-1/2'>
        <label className='text-gray-600'>{label}</label>
        <input
          type='number'
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className='w-full p-1 border rounded mt-1'
        />
      </div>
      <div className='w-1/2 pl-4'>
        <label className='text-gray-600'>Currency</label>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className='w-full p-1 border rounded mt-1'
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>{currency.toUpperCase()}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
