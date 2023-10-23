import Chat from "./components/Chat";
import Header from "./components/Header";
import Channels from "./components/Channels";
import Shortcuts from "./components/Shortcuts";

function App() {
  return (
    <div className="flex flex-col h-screen text-base dark:text-white">
      <Header />

      <div className="flex flex-1 bg-gray-100 overflow-clip">
        <Channels />

        <main className="flex flex-col flex-1 p-6 space-y-4 bg-white dark:bg-gray-900">
          <Chat />
        </main>

        <Shortcuts />
      </div>
    </div>
  );
}

export default App;
