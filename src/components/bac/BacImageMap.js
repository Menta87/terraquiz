export default function BacImageMap({ test = 6, tip = 'europa', set = '2020', varianta = 1 }) {
  // set poate fi: '2020' sau '2009'
  // tip poate fi: 'europa', 'romania', 'diagrama', 'tabele'
  
  let imageSrc;
  if (set === '2009') {
    imageSrc = `/bac/2009/bac2009-var${varianta}-${tip}.png`;
  } else {
    imageSrc = `/bac/2020/test${test}-${tip}.png`;
  }
  
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
        alt={`${tip} - ${set === '2009' ? `BAC 2009 Var ${varianta}` : `Test ${test}`}`}
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
