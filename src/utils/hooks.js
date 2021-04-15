import { useState } from 'react';

export const useInputValue = (initial) => {
    const [value, setValue] = useState(initial);
    const handleChangeValue = e => setValue(e.target.value);
    return [value, handleChangeValue];
}
