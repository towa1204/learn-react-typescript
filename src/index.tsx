import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Welcome(props: {name: string}) {
  return <h1>Hello, {props.name}</h1>;
}

function AppWelcome() {
  return (
    <div>
      <Welcome name="桃山みらい" />
      <Welcome name="萌黄えも" />
      <Welcome name="青葉りんか" />
    </div>
  );
}

root.render(<AppWelcome />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
