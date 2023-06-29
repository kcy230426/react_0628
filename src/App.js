// rfce snippet 사용

import React from 'react'
import Hd from './layout/Hd'
import Ft from './layout/Ft'
import Content from './layout/Content'

export default function App(props) {
  return (
    <>
        <Hd></Hd>
        <Content></Content>
        <Ft></Ft>
    </>
  )
}

//default가 없으면 누굴 내보낼지 프로그램이 모르기 때문에 지정해줘야 한다.