import investements from '../../icons/admin/investements.svg';
import income from '../../icons/investor/income.svg';
import spending from '../../icons/investor/spending.svg';


const data = [{
    'title': 'Total Income',
    'icon': income,
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
    'link': '/admin/',
},
{
    'title': 'Total Gain',
    'icon': investements,
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
    'title': 'Total Spending',
    'icon': spending,
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
        3000,
    ],
    'link': '/admin/stocks'
}]

export default data;