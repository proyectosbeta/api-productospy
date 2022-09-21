import { APP_PORT, URL_DOMAIN } from '../../app/config/global.config.js';

const versionSystem = process.env.npm_package_version;
const swagger = {
  openapi: '3.0.3',
  info: {
    title: 'API ProductosPY',
    description: 'API ProductosPY',
    version: versionSystem,
    contact: {
      email: 'josego85@gmail.com',
    },
    license: {
      name: 'GPLv3',
      url: 'https://opensource.org/licenses/GPL-3.0',
    },
  },
  externalDocs: [
    {
      url: `${URL_DOMAIN}:${APP_PORT}/api/v1/docs`,
    },
  ],
  servers: [
    {
      url: `${URL_DOMAIN}:${APP_PORT}/api/v1`,
      description: 'Development server',
    },
  ],
  paths: {
    '/': {
      get: {
        description: 'Welcome to the API REST (productospy)',
        summary: 'Welcome to the API REST productospy)',
        parameters: [
          {
            in: 'header',
            name: 'accept-language',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Return a welcome',
          },
          429: {
            description: 'Too many requests, please try again later.',
          },
        },
      },
    },
    '/users': {
      get: {
        tags: ['User'],
        summary: 'All users',
        description: 'All users',
        responses: {
          200: {
            description: 'Return all users',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: {
                      type: 'boolean',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/User',
                      },
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Internal Server Error',
          },
        },
      },
      post: {
        tags: ['User'],
        summary: 'Create a user',
        description: 'Create a book',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Created a user',
          },
        },
      },
    },
    '/users/{userId}': {
      get: {
        tags: ['User'],
        summary: 'Get a one user',
        description: 'Get a one user',
        parameters: [
          {
            name: 'UserId',
            in: 'path',
            required: true,
            description: 'The id of a user',
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'Return a one user',
            schema: {
              $ref: '#/components/schemas/User',
            },
          },
        },
      },
    },
  },
  tags: [
    {
      name: 'Users',
      description: 'API for users in Productos PY',
    },
  ],
  components: {
    schemas: {
      User: {
        required: ['name', 'lastname', 'birthday'],
        type: 'object',
        properties: {
          _id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          lastname: {
            type: 'string',
          },
          birthday: {
            type: 'string',
          },
          __v: {
            type: 'string',
          },
        },
      },
    },
  },
};

export { swagger };
