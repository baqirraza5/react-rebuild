function Counter() {
  let count = 0;
  console.log("Counter just ran. count is:", count);
  return (
    <button
      onClick={() => {
        count++;
        console.log("clicked! count is now:", count);
      }}
    >
      Clicked {count} times
    </button>
  );
}
export default Counter;
