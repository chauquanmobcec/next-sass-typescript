import React from 'react'
import Header from './Header'

type Props = {}

const Layout = (props:any) => {
    const children = props.children
  return (
    <>
    <Header/>
    {children}
    </>
  )
}

export default Layout