import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type ClockState = {date: Date};
// React.Component<Props,State>
class Clock extends React.Component<{}, ClockState> {
  constructor(props: {}) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(this: {timerID: NodeJS.Timer, tick: () => void}) {
    this.timerID = setInterval(
      () => this.tick()
    );
  }

  componentWillUnmount(this: {timerID: NodeJS.Timer}) {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

root.render(<Clock />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
