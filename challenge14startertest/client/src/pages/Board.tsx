import Auth from '../utils/auth';

const Board = () => {
  if (!Auth.loggedIn()) {
    window.location.assign('/login'); // Redirect to login if not logged in
    return null;
  }

  return (
    <div>
      <h1>Kanban Board</h1>
      <p>Welcome to your Kanban Board!</p>
      {/* Board content goes here */}
    </div>
  );
};

export default Board;