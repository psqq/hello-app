
import * as React from 'react';
import HelloReact from 'hello-react/src/HelloReact';

const App: React.FC = () => {

  const [name, setName] = React.useState('React');

  return (
    <>
      <h1>Hello app</h1>
      Input name: &nbsp;
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br /><br />
      Result:
      <br /><br />
      Hello, {name}!
    </>
  )
}

export default App;
