// table-header.spec.ts
import { TableHeader } from './table-header';

describe('TableHeader', () => {
    it('should create an instance with default values', () => {
        const tableHeader = new TableHeader();
        expect(tableHeader).toBeTruthy();
        expect(tableHeader.header).toEqual([]);
    });

    it('should create an instance with provided values', () => {
        const headerValues = ['Name', 'Age', 'City'];
        const tableHeader = new TableHeader(headerValues);
        expect(tableHeader).toBeTruthy();
        expect(tableHeader.header).toEqual(headerValues);
    });
});
