import express from 'express';
import createLocaleMiddleware from 'express-locale';
import helmet from 'helmet';
import cors from 'cors';
import geoip from 'geoip-lite';
import swaggerUi from 'swagger-ui-express';
import { router as v1Router} from '../app/v1/routes/index.js';
import startPolyglot from '../app/middleware/startPolyglot.middleware.js';
import Log from '../app/models/log.model.js';
import { swagger as v1SwaggerDocs } from '../app/v1/swagger.js';

const app = express();

app.use(express.json());

// Translation. English default language.
app.use(
  createLocaleMiddleware({
    priority: ['accept-language', 'default'],
    default: 'en-US',
  })
);

// Set the language in the req with the phrases to be used.
app.use(startPolyglot);

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
    ip,
    geo,
  });

  await log.save();
  next();
});

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(v1SwaggerDocs));
app.use('/api/v1', v1Router);

export default app;
