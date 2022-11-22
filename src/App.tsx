import useTheme from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <h1>Hello</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

export default App;
