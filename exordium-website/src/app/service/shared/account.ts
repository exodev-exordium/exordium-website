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
    role: String;
    pages: Pages[];
}

class Pages {
    page: String;
}