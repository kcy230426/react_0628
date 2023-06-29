import React from 'react'
import banner from '../scss/banner.module.css'

export default function Banner(props) {
  return (
    <>
        <div className={`${banner.container} ${banner.bold}`}>
          <div className={banner.in}>swiper 리액트 플러그인으로 제작합니다.</div>
        </div>
    </>
  )
}

