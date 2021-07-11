import { customAlphabet } from 'nanoid/non-secure';
import { useState } from 'react';

const nanoid = customAlphabet('123456789acdef', 10);

export const useUniqueID = (): string => {
  const [id] = useState(nanoid());

  return id;
};
