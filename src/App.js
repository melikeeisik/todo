
import './App.css';
import ToDo from './components/ToDo';
import { createElement } from 'react';
function App() {
  return (
    <div >
      <h1>todos</h1>
      <ToDo/>
    </div>
  );
}

export default App;


//<p className={styles.hi}>Hİ</p>
/*
<main>
        <Tab activeTab={1}>
          <Tab.Panel title="profil">1. TAB</Tab.Panel>
          <Tab.Panel title="hakkında">2. TAB</Tab.Panel>
          <Tab.Panel title="ayarlar">3. TAB</Tab.Panel>
        </Tab>
      </main>
*/