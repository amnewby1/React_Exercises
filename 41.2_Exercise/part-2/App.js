const App = () => {
  return (
    <div>
      <Tweet
        username="AmandaS"
        name="Amanda S"
        date={new Date().toDateString()}
        message="My first tweet"
      />
      <Tweet
        username="AmandaS"
        name="Amanda S"
        date={new Date().toDateString()}
        message="My second tweet"
      />
      <Tweet
        username="AmandaS"
        name="Amanda S"
        date={new Date().toDateString()}
        message="My third tweet"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
