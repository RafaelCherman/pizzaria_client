// user.spec.ts
import { User } from './user';

describe('User', () => {
    it('should create an instance with default values', () => {
        const user = new User();
        expect(user).toBeTruthy();
        expect(user.id).toBe(0);
        expect(user.username).toBe('');
        expect(user.role).toBe('');
        expect(user.token).toBe('');
    });

    it('should create an instance with provided values', () => {
        const user = new User(1, 'john_doe', 'admin', 'some_token');
        expect(user).toBeTruthy();
        expect(user.id).toBe(1);
        expect(user.username).toBe('john_doe');
        expect(user.role).toBe('admin');
        expect(user.token).toBe('some_token');
    });
});
