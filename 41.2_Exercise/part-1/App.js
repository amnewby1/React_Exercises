const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Amanda" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
