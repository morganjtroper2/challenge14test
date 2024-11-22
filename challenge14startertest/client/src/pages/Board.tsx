import Auth from '../utils/auth';

const Board = () => {
  if (!Auth.loggedIn()) {
    window.location.assign('/login');
    return null;
  }

  return (
    <div>
      <h1>Kanban Board</h1>
      <p>Welcome to your Kanban Board!</p>
      {//}
    </div>
  );
};

export default Board;