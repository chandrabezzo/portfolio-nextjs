export default function imageLoader({ src }: { src: string }) {
  const isProd = process.env.NODE_ENV === 'production'
  const basePath = isProd ? '/portfolio-nextjs' : ''
  return `${basePath}${src}`
}
