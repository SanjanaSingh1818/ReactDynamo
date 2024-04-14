import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}

const anotherElement = (
  <a href="https:/ /google.com" target="_blank">visit google</a>
);

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google'
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <MyApp />
    {anotherElement}
    {reactElement}
  </>
);


