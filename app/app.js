import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import geoip from 'geoip-lite';
import router from '../app/routes/index.js';
import Log from '../app/models/log.model.js';

const app = express();

app.use(express.json());

// Security.
app.use(helmet());
app.use(
    cors({
        origin: '*',
        optionsSuccessStatus: 200,
        methods: ['GET'],
    })
);

app.use(async (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip);
    const log = new Log({
        url: req.url,
        method: req.method,
        ip: ip,
        geo: geo,
    });

    await log.save();
    next();
});

app.use('/api/v1', router);

export default app;