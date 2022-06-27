import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function FormattedDate(props: {date: Date}) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

type ClockState = {date: Date};
// React.Component<Props,State>
class Clock extends React.Component<{}, ClockState> {
  constructor(props: {}) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(this: {timerID: NodeJS.Timer, tick: () => void}) {
    this.timerID = setInterval(
      () => this.tick(),
      1000
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
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

root.render(
  <div>
    <Clock />
    <Clock />
    <Clock />
  </div>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
