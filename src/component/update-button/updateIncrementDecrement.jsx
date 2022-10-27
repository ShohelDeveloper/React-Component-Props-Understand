function UpdateIncrementDecrement({
  incrementValue,
  decrementValue,
  handelIncrementValue,
  handelDecrementValue,
}) {
  return (
    <div>
      <label>Increment</label>
      <input
        type="number"
        value={incrementValue}
        onChange={handelIncrementValue}
      />
      <label>Decrement</label>
      <input
        type="number"
        value={decrementValue}
        onChange={handelDecrementValue}
      />
    </div>
  );
}

export default UpdateIncrementDecrement;
