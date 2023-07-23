const Tweet = ({ username, name, date, message }) => {
  return (
    <div class="tweet">
      <p class="username"> {username}</p>
      <p class="name">{name}</p>
      <p class="date">{date}</p>
      <p class="message">{message}</p>
    </div>
  );
};
