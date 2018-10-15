import Link from 'next/link'

export const Header = () => (
  <React.Fragment>
    <header>
      <Link prefetch href='/'>
        <a className='home'>Kadi Hill</a>
      </Link>
      <nav>
        <Link prefetch href='/about'>
          <a className='about'>
            About
          </a>
        </Link>
        <Link prefetch href='/blog'>
          <a className='blog'>
            Blog
          </a>
        </Link>
        <Link prefetch href='/contact'>
          <a className='contact'>
            Contact
          </a>
        </Link>
      </nav>
    </header>
    <style jsx>{`
      header {
        font-size: 4vmin;
        border-bottom: 2px solid rgba(0, 0, 0, 0.05);
        margin: 2rem;
        padding: 1rem;
        display: flex;
        flex-direction: row;
      }
      a {
        color: inherit;
        text-decoration: none;
        outline: 0;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
      .home {
        flex-grow: 1;
        font-size: 2.6rem;
        font-weight: 800;
      }
      nav {
        display: flex;
        flex-direction: row;
        flex-grow: 3;
        justify-content: space-around;
      }
      .about::first-letter {
        font-weight: 800;
      }
      .about {
        border: 2px solid transparent;
        padding: .1em .5em .1em .5em;
        border-radius: 1em;
      }
      .about:hover {
        border: 2px solid lightgrey;
      }
      .blog::first-letter {
        font-weight: 800;
      }
      .blog {
        border: 2px solid transparent;
        padding: .1em .5em .1em .5em;
        border-radius: 1em;
      }
      .blog:hover {
        border: 2px solid lightgrey;
      }
      .contact::first-letter {
        font-weight: 800;
      }
      .contact {
        border: 2px solid transparent;
        padding: .1em .5em .1em .5em;
        border-radius: 1em;
      }
      .contact:hover {
        border: 2px solid lightgrey;
      }
    `}</style>
  </React.Fragment>
)
