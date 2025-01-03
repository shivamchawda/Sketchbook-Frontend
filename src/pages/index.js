import Board from '@/components/Board'
import Menu from '@/components/Menu'
import Toolbox from '@/components/Toolbox'
import React from 'react'

const Home = () => {
  return (
    <>
      <Menu />
      <Toolbox />
      <Board/>
    </>
  )
}

export default Home