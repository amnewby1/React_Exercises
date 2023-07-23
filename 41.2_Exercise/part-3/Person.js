const Person = (props) => {
  let nameDisplay = props.name.length > 8 ? props.name.slice(0, 6) : props.name;
  let voteMessage =
    props.age >= 18 ? "Please go vote!" : "You must be 18 to vote";

  return (
    <div>
      <p>Learn some information about this person</p>

      <h1>{nameDisplay}</h1>
      <h3>{voteMessage}</h3>

      <h4>Hobbies</h4>
      <ul>
        {props.hobbies.map((h) => (
          <li>
            <b>{h}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
