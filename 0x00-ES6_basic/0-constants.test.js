// file: 0-constants.test.js

import { taskFirst, taskNext } from './0-constants.js';

describe('taskFirst', () => {
    it('should return the string "I prefer const when I can."', () => {
        const result = taskFirst();
        expect(result).toBe('I prefer const when I can.');
    });
});

describe('taskNext', () => {
    it('should return the string "But sometimes let is okay."', () => {
        const result = taskNext();
        expect(result).toBe('But sometimes let is okay.');
    });
});