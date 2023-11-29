// usuario.spec.ts
import { Usuario } from './usuario';

describe('Usuario', () => {
    it('should create an instance with default values', () => {
        const usuario = new Usuario();
        expect(usuario).toBeTruthy();
        expect(usuario.login).toBe('');
        expect(usuario.senha).toBe('');
    });

    it('should create an instance with provided values', () => {
        const usuario = new Usuario('john_doe', 'password123');
        expect(usuario).toBeTruthy();
        expect(usuario.login).toBe('john_doe');
        expect(usuario.senha).toBe('password123');
    });



});
