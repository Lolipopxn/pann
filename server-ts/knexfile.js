module.export = {
    development: {
        client: 'mysql2',
        connection: require('./src/db-conn.json')
    },
};