import { FC, StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';

const App: FC = () => (
  <div style={{
    marginTop: '20vh',
    textAlign: 'center',
    padding: 250,
    backgroundColor: 'aliceblue',
    fontFamily: 'Consolas, Monaco, monospace',
  }}
  >
    This is my CV
  </div>
);

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={undefined}>
      <App />
    </Suspense>
  </StrictMode>,
  document.getElementById('app'),
);
