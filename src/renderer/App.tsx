import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { format } from 'date-fns';
import { useState } from 'react';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  const [now, setNow] = useState('');
  const [statement, setStatement] = useState('');

  return (
    <div>
      <div className="Hello">
        <img width="100" alt="icon" src={icon} />
      </div>
      <h1>electron-react-tool</h1>
      <form onSubmit={() => {}}>
        <div className="Hello">
          <input
            type="string"
            name="inputStatement"
            onChange={(e) => setStatement(e.target.value)}
          />
        </div>
        <div className="Hello">{statement}</div>
      </form>
      <div className="Hello">{`只今の時刻 ${now}`}</div>
      <div className="Hello">
        <button
          type="button"
          onClick={() => {
            setNow(format(Date.now(), "yyyy-MM-dd'T'HH:mm:ss"));
          }}
        >
          時計
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
