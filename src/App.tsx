import { Header } from "./components/Header/Header";
import { TagList } from "./components/TagList/TagList";
import { useDataHook } from "./utils/useDataHook";

function App() {
  const dataHook = useDataHook();

  return (
    <>
      <Header dataHook={dataHook} />
      <TagList dataHook={dataHook} />
    </>
  );
}

export default App;
