import NotesPage from "./pages/notespage/NotesPage";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <NotesPage />
      </div>
    </Provider>
  );
}

export default App;
