export class Permissions {

    public roles = [
        {
            role: 'user',
            icon: 'fa-user',
            disabled: true // cant remove user role as its the default
        },
        {
            role: 'paid',
            icon: 'fa-money-bill-wave'
        },
        {
            role: 'beta',
            icon: 'fa-tools'
        },
        {
            role: 'supporter',
            icon: 'fa-users'
        },
        {
            role: 'staff',
            icon: 'fa-certificate'
        },
        {
            role: 'moderator',
            icon: 'fa-star'
        },
        {
            role: 'administrator',
            icon: 'fa-star-shooting'
        },
        {
            role: 'developer',
            icon: 'fa-code'
        }
    ]

}

export interface Role {
    role: string;
    icon: string;
}