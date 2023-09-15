import stocks from '../../icons/admin/stockStat.svg';
import investors from '../../icons/admin/investorStat.svg';
import investements from '../../icons/admin/investements.svg';
import companies from '../../icons/admin/companies.svg';

const data = {
    'values': [{
        'title': 'Total Investors',
        'icon': investors,
        'number': [
            100,
            200,
            300,
            500,
            600,
            800,
            1000,
            925
        ],
        'link': '/admin/',
    },
    {
        'title': 'Total Stocks',
        'icon': stocks,
        'number': [
            1000,
            2000,
            3000,
            4000,
            5000,
            6000,
            5000,
            4000,
            3000,
            5000,
        ],
        'link': '/admin/investors',
    },
    {
        'title': 'Total Investments',
        'icon': investements,
        'number': [
            190000,
            203000,
            312000,
            400010,
            500200,
            620000,
            59000,
            900412,
            590000,
            396040,
        ],
        'link': '/admin/stocks'
    },
    {
        'title': 'Total Companies',
        'icon': companies,
        'number': [
            10,
            50,
            50,
            60,
            70,
            80,
            90,
            90,
            70,
            85,
        ],
        'link': '/admin/stocks'
    }],
    "chartData": [
        {
            title: "Money Transferred",
            type: "bar",
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

    ],
}

export default data;

