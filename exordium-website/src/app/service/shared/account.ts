export class Account {
    _id: string;
    username: string;
    email: string;
    realname: string;
    registration: Registration;
    access: Access;
}

class Registration {
    country: Country;
}

class Country {
    code: string;
    name: string;
}

class Access {
    roles: Roles[];
    pages: Pages[];
}

class Roles {
    role: string;
}

class Pages {
    page: string;
}
