import React from 'react'
import Banner from '../component/Banner'
import Contact from '../component/Contact'
import Interview from '../component/Interview'
import Portfolio from '../component/Portfolio'
import contact from '../scss/contact.module.css'

export default function Content() {
  return (
    <>
        <Banner></Banner>
        <Contact></Contact>
        <Interview></Interview>
        <Portfolio></Portfolio>
    </>
  )
}
