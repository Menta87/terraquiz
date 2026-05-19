export default function BacImageMap({ test = 6, tip = 'europa' }) {
  // tip poate fi: 'europa', 'romania', 'diagrama', 'tabele'
  const imageSrc = `/bac/2020/test${test}-${tip}.png`;
  
  return (
    <div style={{
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      background: '#dbeafe',
      border: '2px solid #0284c7',
      borderRadius: '12px',
      padding: '1rem',
    }}>
      <img 
        src={imageSrc} 
        alt={`${tip} - Test ${test}`}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: '8px',
          background: 'white',
        }}
      />
    </div>
  );
}
