module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', 'e1836b33b7ab68a1cedcc44902e3c27c'),
        },
    },
    cron: {
        enabled: true
    },
});
