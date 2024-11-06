"use client"
// pages/calculator.js
import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    // If equal button is clicked, evaluate the result
    if (value === '=') {
      try {
        setResult(eval(input).toString()); // Use eval with caution
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      // Clear button resets input and result
      setInput('');
      setResult('');
    } else {
      // Append the clicked button value to the input
      setInput(input + value);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.display}>
        <div>{input || '0'}</div>
        <div style={styles.result}>{result}</div>
      </div>
      <div style={styles.buttons}>
        {['0', '.', '=', '+', '1', '2', '3', '-', '4', '5', '6', '*', '7', '8', '9', 'C', '/', '%'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            style={item === '=' ? styles.equals : item === 'C' ? styles.clear : styles.button}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '35%',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#333',
    textAlign: 'center',
  },
  display: {
    width: '100%',
    height: '7rem',
    display: 'flex',
    alignItems: 'end',
    backgroundColor: '#222',
    color: 'white',
    fontSize: '24px',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
  },
  result: {
    fontSize: '20px',
    color: '#00ff00',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  button: {
    padding: '20px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: '#ddd',
    color: '#333',
  },
  equals: {
    gridColumn: 'span 2',
    padding: '20px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: '#ff0',
    color: '#333',
  },
  clear: {
    gridColumn: 'span 2',
    padding: '20px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: '#0f0',
    color: '#333',
  },
};
