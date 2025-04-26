export type User = {
    email: string;
    password: string;
};

const initialUsers: User[] = [
    { email: 'test@mail.ru', password: '123' }
];

export const getUsers = (): User[] => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        return JSON.parse(storedUsers);
    } else {
        localStorage.setItem('users', JSON.stringify(initialUsers));
        return initialUsers;
    }
};

export const addUser = (user: User) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
};