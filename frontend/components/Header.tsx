import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  if (router) {
    const { pathname } = router
    return (
      <div>
        <Link prefetch href="/">
          <a className={pathname === '/' ? 'is-active' : ''}>
            <p>Home</p>
          </a>
        </Link>
        <Link prefetch href="/about">
          <a className={pathname === '/about' ? 'is-active' : ''}>
            <p>About</p>
          </a>
        </Link>
        <Link href="https://github.com/xaun/react-apollographql-prisma">
          <a>
            <p>Github</p>
          </a>
        </Link>
      </div>
    )
  } else {
    return null
  }
}

export default Header