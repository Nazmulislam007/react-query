import "./App.css";

function App() {
  return (
    <main id="todolist">
      <h1>
        Todo List
        <span>Get things done, one item at a time.</span>
      </h1>

      <ul>
        <li className="done">
          <span className="label">Learn React query</span>
          <div className="actions">
            <button className="btn-picto" type="button">
              <span className="material-icons">edit</span>
            </button>
            <button className="btn-picto" type="button">
              <span className="material-icons">
                {true ? "check_box" : "check_box_outline_blank"}
              </span>
            </button>
            <button className="btn-picto" type="button">
              <span className="material-icons">delete</span>
            </button>
          </div>
        </li>
      </ul>

      <div className="togglebutton-wrapper togglebutton-checked">
        <label>
          <span className="togglebutton-label">
            Move done items at the end?
          </span>
          <span className="tooglebutton-box"></span>
        </label>
        <input type="checkbox" />
      </div>

      <p className="emptylist">Your todo list is empty.</p>

      <form name="newform">
        <label htmlFor="newitem">Add to the todo list</label>
        <input type="text" name="newitem" id="newitem" v-model="newitem" />
        <button type="submit">Add item</button>
      </form>
    </main>
  );
}

export default App;
