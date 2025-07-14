// src/pages/index.tsx (o Home.tsx)
import { useState } from 'react';

export default function Home() {
  const [popupMessage, setPopupMessage] = useState('');

  function greet(name: string) {
    setPopupMessage(`Hello, ${name}!`);
  }

  return (
    <>
      <h1>Welcome!</h1>
      <button onClick={() => greet("John")}>Greet Me</button>

      {/* UI popup (fake alert) */}
      {popupMessage && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#222',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            zIndex: 1000,
          }}
        >
          {popupMessage}
        </div>
      )}
    </>
  );
}
