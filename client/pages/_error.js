import Router from 'next/router'

const ErrorPage = () => {}

export default ErrorPage

ErrorPage.getInitialProps = async ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: '/'
    })
    res.end()
  } else {
    Router.push('/')
  }
}
