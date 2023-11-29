// resposta.spec.ts
import { Resposta } from './resposta';

describe('Resposta', () => {
    it('should create an instance with default values', () => {
        const resposta = new Resposta();
        expect(resposta).toBeTruthy();
        expect(resposta.mensagem).toEqual('');
    });

    it('should create an instance with provided values', () => {
        const mensagem = 'Success!';
        const resposta = new Resposta(mensagem);
        expect(resposta).toBeTruthy();
        expect(resposta.mensagem).toEqual(mensagem);
    });
});
