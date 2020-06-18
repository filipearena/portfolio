import React from 'react';

export default function Recommendations({ text, author, position, download }) {
  return (
    <a href={download} target="_blank" className="recommendation">
      <div>"{text}"</div>
      <div style={{ marginTop: '12px' }}>- <b><i>{author}</i></b></div>
      <div><u>{position}</u></div>
    </a>
  )
}