import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {}

const Layout = (props: any) => {
  const children = props.children
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout