import stocks from '../../icons/admin/stockStat.svg';
import investors from '../../icons/admin/investorStat.svg';
import investements from '../../icons/admin/investements.svg';
import companies from '../../icons/admin/companies.svg';

const data = {
    'values': [{
        'title': 'Total Investors',
        'icon': investors,
        'number': '1000',
        'link': '/admin/',
    },
    {
        'title': 'Total Stocks',
        'icon': stocks,
        'number': '2000',
        'link': '/admin/investors',
    },
    {
        'title': 'Total Investments',
        'icon': investements,
        'number': '3000',
        'link': '/admin/stocks'
    },
    {    
        'title': 'Total Companies',
        'icon': companies,
        'number': '3000',
        'link': '/admin/stocks'
    }]
}

export default data;