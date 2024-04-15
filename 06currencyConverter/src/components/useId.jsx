import { useState } from 'react';

let idCounter = 0;

function useId(prefix = 'id') {
  const [id] = useState(() => `${prefix}-${idCounter++}`);
  return id;
}

export default useId;
