const roles = {
    all: ['MASTER', 'ADMIN', 'PROVIDERS', 'MAINTENANCE', 'EMPLOYEE', 'TEST'],
    provider: 'PROVIDERS',
    maintenance: 'MAINTENANCE',
    admin: 'ADMIN',
    employee: 'EMPLOYEE',
    master: 'MASTER',
    test: 'TEST',
};

const notificationType = {
    productBought: 'Product Bought',
    productSold: 'Product Sold',
    noStock: 'No More Stock',
};

const topicMessageGroupId = {
    company: 'Company',
    user: 'User',
};

module.exports = { roles, notificationType, topicMessageGroupId };