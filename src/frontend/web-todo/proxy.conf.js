const defaultTarget = 'http://localhost:8080/';

module.exports = [
{
   context: ['/todo/**'],
   target: defaultTarget,
   changeOrigin: true,
   secure: false
}
];