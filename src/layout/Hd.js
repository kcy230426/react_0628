import React from 'react'
import hd from '../scss/hd.module.css'
import logo from '../name_logo.svg'
import logo_hover from '../name_logo_hover.svg'

export default function Hd(props) {
  // const menubg = ["나의 소개","포트폴리오","사전인터뷰","연락"]
  let menubg = {
    title : {
      addtitle:"7월에 다가오는 혜택",
      addlink:"https://naver.com"
    },
    menu :  [
      {
        nm:['나의 소개','about.html'],
        link:'#about'
      },{
        nm:['포트폴리오','portfolio.html'],
        link:'#portfolio'
      },{
        nm:['사전인터뷰','interview.html'],
        link:'#interview'
      },{
        nm:['연락','contact.html'],
        link:'#contact'
      }
    ],
    sns : [
        {nm : "git",
        link : "http://github.com/kcy230426"},
        {nm : "notion", 
        link : "http://notion.so"}]

  }
  return (
    <>
        <div id="top" className={`${hd.container} fixed-top `}>
          <div id="ads" className={`${hd.h} bg-danger text-white d-flex justify-content-center align-items-center`}>
              <a href={menubg.title.addlink} className='text-white text-decoration-none'>{menubg.title.addtitle}</a>
          </div>
          <div id="maintab" className={`${hd.wrap} ${hd.px}`}>
            <h1><a href="#"><img src={logo} alt="로고" className={`${hd.lsize} logo1`}/><img src={logo_hover} alt="로고_하버" className={`${hd.lsize} ${hd.lnone} logo2`}/></a></h1>
            <ul id="gnb" className={`d-flex ${hd.t50}`}>
                      {
                        // idx는 자릿값
                        menubg.menu.map(( val, idx ) => {
                            return(
                              <li className={val.nm[1]} id={'val'+idx}>
                              <a href={val.link}>{val.nm[0]}</a>
                            </li>
                            )
                        })
                      }
            </ul>
          </div>
        </div>

      
    </>
  )
}

