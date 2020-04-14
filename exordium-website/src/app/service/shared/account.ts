export class Account {
    _id: String;
    username: String;
    email: String;
    realname: String;
    registration: Registration;
    access: Access;
}

class Registration {
    country: Country;
}

class Country {
    code: String;
    name: String;
}

class Access {
    roles: Roles[];
    pages: Pages[];
}

class Roles {
    role: String;
}

class Pages {
    page: String;
}
