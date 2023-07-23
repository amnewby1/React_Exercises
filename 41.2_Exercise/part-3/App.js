const App = () => {
  return (
    <div>
      <Person
        name="Dopey"
        age="15"
        hobbies={["gem mining", "housework", "sleeping"]}
      />

      <Person
        name="Doc"
        age="28"
        hobbies={["seeing patients", "reading", "studying"]}
      />
      <Person
        name="Bashful"
        age="24"
        hobbies={["hiding", "running", "gaming"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
