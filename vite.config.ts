import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import contactHandler from './api/contact'

export default defineConfig(({ mode }) => {
  // Load environment variables from .env files onto process.env for local development
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
      react(),
      {
        name: 'api-contact-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const pathname = req.url ? req.url.split('?')[0] : ''
            if (pathname === '/api/contact') {
              try {
                await contactHandler(req, res)
              } catch (err: any) {
                console.error('[API Dev Middleware Error]', err)
                if (!res.writableEnded) {
                  res.statusCode = 500
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ success: false, error: 'Internal server error.' }))
                }
              }
              return
            }
            next()
          })
        }
      }
    ],
    server: {
      port: 5173,
      host: true
    }
  }
})
