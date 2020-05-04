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

    public titles = [
        {
            title: 'User',
            icon: 'fa-user',
            bgColour: 'light'
        },
        {
            title: 'Paid',
            icon: 'fa-money-bill-wave',
            bgColour: 'success'
        },
        {
            title: 'Beta Tester',
            icon: 'fa-tools',
            bgColour: 'danger'
        },
        {
            title: 'Community Supporter',
            icon: 'fa-users',
            bgColour: 'info'
        },
        {
            title: 'Staff',
            icon: 'fa-certificate',
            bgColour: 'warning'
        },
        {
            title: 'Moderator',
            icon: 'fa-star',
            bgColour: 'primary-3'
        },
        {
            title: 'Administrator',
            icon: 'fa-star-shooting',
            bgColour: 'primary-2'
        },
        {
            title: 'Developer',
            icon: 'fa-code',
            bgColour: 'primary'
        }
    ]

}

export interface Role {
    role: string;
    icon: string;
}