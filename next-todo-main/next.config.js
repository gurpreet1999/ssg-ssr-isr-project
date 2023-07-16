/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    MONGO_URI:"mongodb+srv://gurpreetsingh:Shalu%401999@cluster0.apn6ahn.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
