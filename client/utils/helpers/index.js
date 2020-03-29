import Router from 'next/router'

export function formatNumber(number) {
  const parts = number.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export function isString(s) {
  return Object.prototype.toString.call(s) === '[object String]'
}

// Helper to redirect depending SSR or CSR context
export function redirectTo(destination, { res, status } = {}) {
  if (res) {
    res.writeHead(status || 302, { Location: destination })
    res.end()
  } else if (destination[0] === '/' && destination[1] !== '/') {
    Router.push(destination)
  } else {
    window.location = destination
  }
}
