const env = process.env.REACT_APP_ENV || 'production';

const localhost = {
    APP_ENV: 'Localhost',
    APP_NAME: 'Admin Panel',
    APP_URL: 'http://localhost:3000',
    API_URL: 'http://api.admin.socialcodia.com/',
    BACKEND_IMAGE_URL: 'http://localhost:8000/',
    BACKEND_URL: 'http://localhost:8000'
}

const development = {
    APP_ENV: 'Development',
    APP_NAME: 'Admin Panel',
    APP_URL: 'http://localhost:3000',
    API_URL: 'http://api.admin.socialcodia.com/',
    BACKEND_IMAGE_URL: 'http://localhost:8000/',
    BACKEND_URL: 'http://localhost:8000'
}

const production = {
    APP_NAME: 'Admin Panel',
    APP_ENV: 'Production',
    APP_URL: 'http://localhost:3000',
    API_URL: 'http://api.admin.socialcodia.com/',
    BACKEND_IMAGE_URL: 'http://localhost:8000/',
    BACKEND_URL: 'http://localhost:8000'
}

const environments: any = {
    localhost,
    development,
    production
}

export default environments[env]