/*export class User {
    id!: number;
    username!: string;
    role!: string;
    token!: string;
}
*/


export class User {
    id: number;
    username: string;
    role: string;
    token: string;

    constructor(
        id: number = 0,
        username: string = '',
        role: string = '',
        token: string = ''
    ) {
        this.id = id;
        this.username = username;
        this.role = role;
        this.token = token;
    }
}
