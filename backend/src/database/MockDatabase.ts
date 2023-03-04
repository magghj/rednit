import { User } from "../users/User";
import { Database } from "./Database";

export class MockDatabase implements Database {
    private users: User[] = []
    public userIdCounter = 0;

    public async doesUserWithUsernameExist(username: string): Promise<boolean> {
        const user = this.users.find(user => user.username == username);
        return user !== undefined
    }
    public async addUser(user: User): Promise<void> {
        this.users.push(user)
    }
    public async uniqueUserId(): Promise<number> {
        const id = this.userIdCounter;
        this.userIdCounter += 1;
        return id;
    }
    public async userById(userId: number): Promise<User | null> {
        return this.users.find((user) => user.id === userId) ?? null;
    }
    public async userByUsername(username: string): Promise<User | null> {
        return this.users.find((user) => user.username === username) ?? null;
    }
}