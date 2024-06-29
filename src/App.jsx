import { ThemeProvider } from "./components/theme-provider";
import Home from "./components/Home";

function App() {
  return (
    <ThemeProvider>
      <div className="w-10/12 m-auto p-10">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
