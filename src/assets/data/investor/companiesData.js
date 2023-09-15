const data = {
    columns: [
        "Company",
        "Description",
        "Stock Value",
        "",
    ],
    companies: [
        {
            id: 1,
            name: 'Microsoft',
            summary: "Software Company",
            description: "Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington. Microsoft's best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications, and the Internet Explorer and Edge web browsers",
            stockValue: 1800,
            pic: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
            tags:[
            {title: 'best company 2021', positive: true},
            {title: 'stock value increase 2.5%', positive: true},
            {title: 'comapny evaluation increase 3% ', positive: true},
            {title: 'regions 5%', positive: false},
            {title: 'investors 10%', positive: true},
            {title: 'employees 13%', positive: false},

            ],
            chartData:
            {
                title: "total transactions",
                data: [
                    {
                        date: "Jan",
                        number: 4000,
                    },
                    {
                        date: "Feb",
                        number: 3000,
                    },
                    {
                        date: "Mar",
                        number: 2000,
                    },
                    {
                        date: "Apr",
                        number: 2780,
                    },
                    {
                        date: "May",
                        number: 1890,
                    },
                    {
                        date: "Jun",
                        number: 2390,
                    },
                    {
                        date: "Jul",
                        number: 3490,
                    },
                    {
                        date: "Aug",
                        number: 4000,
                    },
                    {
                        date: "Sep",
                        number: 3000,
                    },
                    {
                        date: "Oct",
                        number: 2000,
                    },
                    {
                        date: "Nov",
                        number: 2780,
                    },
                    {
                        date: "Dec",
                        number: 1890,
                    },
                ]
            },

        },
        {
            id: 2,
            name: 'Spotify',
            summary: "Digital Music Company",
            description: "Spotify is a Swedish audio streaming and media services provider founded on 23 April 2006 by Daniel Ek and Martin Lorentzon. It is one of the largest music streaming service providers, with over 551 million monthly active users,",
            stockValue: 700,
            pic: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
            tags:[
                {title: 'most downloaded 2019', positive: true},
                {title: 'stock value decrease 4%', positive: false},
                {title: 'comapny evaluation decrease 1.5% ', positive: false},
                {title: 'regions 3%', positive: true},
                {title: 'investors 5%', positive: true},
                {title: 'employees 8%', positive: false},
            ],    
            chartData:
            {
                title: "total transactions",
                data: [
                    {
                        date: "Jan",
                        number: 4000,
                    },
                    {
                        date: "Feb",
                        number: 3000,
                    },
                    {
                        date: "Mar",
                        number: 2000,
                    },
                    {
                        date: "Apr",
                        number: 2780,
                    },
                    {
                        date: "May",
                        number: 1890,
                    },
                    {
                        date: "Jun",
                        number: 2390,
                    },
                    {
                        date: "Jul",
                        number: 3490,
                    },
                    {
                        date: "Aug",
                        number: 4000,
                    },
                    {
                        date: "Sep",
                        number: 3000,
                    },
                    {
                        date: "Oct",
                        number: 2000,
                    },
                    {
                        date: "Nov",
                        number: 2780,
                    },
                    {
                        date: "Dec",
                        number: 1890,
                    },
                ]
            },
        },
        {
            id: 3,
            name: 'Google',
            summary: "Big Tech Company",
            description: "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics",
            stockValue: 2000,
            pic: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
            tags:[
                {title: 'most inovative company 2020', positive: true},
                {title: 'stock value increase 2%', positive: true},
                {title: 'comapny evaluation increase 3.5% ', positive: true},
                {title: 'regions 1%', positive: true},
                {title: 'investors 15%', positive: true},
                {title: 'employees 20%', positive: false},
            ],    
            chartData:
            {
                title: "total transactions",
                data: [
                    {
                        date: "Jan",
                        number: 4000,
                    },
                    {
                        date: "Feb",
                        number: 3000,
                    },
                    {
                        date: "Mar",
                        number: 2000,
                    },
                    {
                        date: "Apr",
                        number: 2780,
                    },
                    {
                        date: "May",
                        number: 1890,
                    },
                    {
                        date: "Jun",
                        number: 2390,
                    },
                    {
                        date: "Jul",
                        number: 3490,
                    },
                    {
                        date: "Aug",
                        number: 4000,
                    },
                    {
                        date: "Sep",
                        number: 3000,
                    },
                    {
                        date: "Oct",
                        number: 2000,
                    },
                    {
                        date: "Nov",
                        number: 2780,
                    },
                    {
                        date: "Dec",
                        number: 1890,
                    },
                ]
            },
        },
        {
            id: 4,
            name: 'Meta',
            summary: "Technology Company",
            description: "an American multinational technology conglomerate based in Menlo Park, California. The company owns and operates Facebook, Instagram, Threads, and WhatsApp, among other products and services",
            stockValue: 9000,
            pic: 'https://1000logos.net/wp-content/uploads/2021/10/logo-Meta-768x432.png',
            tags:[
                {title: 'best company 2023', positive: true},
                {title: 'stock value decrease 2.5%', positive: false},
                {title: 'comapny evaluation increase 1.7%', positive: false},
                {title: 'regions 5%', positive: true},
                {title: 'investors 7%', positive: false},
                {title: 'employees 15%', positive: true},
            ],    
            chartData:
            {
                title: "total transactions",
                data: [
                    {
                        date: "Jan",
                        number: 4000,
                    },
                    {
                        date: "Feb",
                        number: 3000,
                    },
                    {
                        date: "Mar",
                        number: 2000,
                    },
                    {
                        date: "Apr",
                        number: 2780,
                    },
                    {
                        date: "May",
                        number: 1890,
                    },
                    {
                        date: "Jun",
                        number: 2390,
                    },
                    {
                        date: "Jul",
                        number: 3490,
                    },
                    {
                        date: "Aug",
                        number: 4000,
                    },
                    {
                        date: "Sep",
                        number: 3000,
                    },
                    {
                        date: "Oct",
                        number: 2000,
                    },
                    {
                        date: "Nov",
                        number: 2780,
                    },
                    {
                        date: "Dec",
                        number: 1890,
                    },
                ]
            },
        },
        {
            id: 5,
            name: 'Monsters Inc.',
            summary: "Power Company",
            description: "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
            stockValue: 900,
            pic: 'https://m.media-amazon.com/images/I/41BchD1LbjL._AC_.jpg',
            tags:[
                {title: 'Scariest Company', positive: true},
                {title: 'stock value increase 20%', positive: true},
                {title: 'comapny evaluation increase 99% ', positive: true},
                {title: 'regions 0%', positive: false},
                {title: 'investors 100%', positive: true},
                {title: 'employees 0%', positive: false},
            ],    
            chartData:
            {
                title: "total transactions",
                data: [
                    {
                        date: "Jan",
                        number: 4000,
                    },
                    {
                        date: "Feb",
                        number: 3000,
                    },
                    {
                        date: "Mar",
                        number: 2000,
                    },
                    {
                        date: "Apr",
                        number: 2780,
                    },
                    {
                        date: "May",
                        number: 1890,
                    },
                    {
                        date: "Jun",
                        number: 2390,
                    },
                    {
                        date: "Jul",
                        number: 3490,
                    },
                    {
                        date: "Aug",
                        number: 4000,
                    },
                    {
                        date: "Sep",
                        number: 3000,
                    },
                    {
                        date: "Oct",
                        number: 2000,
                    },
                    {
                        date: "Nov",
                        number: 2780,
                    },
                    {
                        date: "Dec",
                        number: 1890,
                    },
                ]
            },
        },
        {
            id: 6,
            name: 'Pixar',
            summary: "Animation Company",
            description: "Pixar Animation Studios is an American computer animation studio known for its critically and commercially successful computer-animated feature films. It is based in Emeryville, California.",
            stockValue: 1000,
            pic: 'https://logos-world.net/wp-content/uploads/2020/12/Pixar-Symbol.png',
            tags:[
                {title: 'best cinematography 2022', positive: true},
                {title: 'stock value increase 8%', positive: true},
                {title: 'comapny evaluation increase 10% ', positive: true},
                {title: 'regions 2%', positive: false},
                {title: 'investors 15%', positive: true},
                {title: 'employees 10%', positive: false},
            ],    
            chartData:
            {
                title: "total transactions",
                data: [
                    {
                        date: "Jan",
                        number: 4000,
                    },
                    {
                        date: "Feb",
                        number: 3000,
                    },
                    {
                        date: "Mar",
                        number: 2000,
                    },
                    {
                        date: "Apr",
                        number: 2780,
                    },
                    {
                        date: "May",
                        number: 1890,
                    },
                    {
                        date: "Jun",
                        number: 2390,
                    },
                    {
                        date: "Jul",
                        number: 3490,
                    },
                    {
                        date: "Aug",
                        number: 4000,
                    },
                    {
                        date: "Sep",
                        number: 3000,
                    },
                    {
                        date: "Oct",
                        number: 2000,
                    },
                    {
                        date: "Nov",
                        number: 2780,
                    },
                    {
                        date: "Dec",
                        number: 1890,
                    },
                ]
            },
        },
    ]
};

export default data;