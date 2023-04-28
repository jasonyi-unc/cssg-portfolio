import logo from './logo.svg';
import './App.css';
import Block from './components/Block';

function App() {
  const jobs = [
    {
      title: "Job 1",
      timeframe: "Aug 2020 - Jul 2021",
      d1: "Task 1",
      d2: "Task 2",
      d3: "Task 3"
    },
    {
      title: "Job 2",
      timeframe: "April 2022 - Present",
      d1: "Task 2-1",
      d2: "Task 2-2",
      d3: "Task 2-3"
    }
  ]

  return (
    <div className="App">
      <h1>[Name] Portfolio</h1>
      <h2 className="Section-title">Employment</h2>
      {jobs.map((item, index) =>
        <Block
          key={index}
          title={item.title}
          timeframe={item.timeframe}
          descrip1={item.d1}
          descrip2={item.d2}
          descrip3={item.d3}
        />
      )}
    </div>
  );
}

export default App;
