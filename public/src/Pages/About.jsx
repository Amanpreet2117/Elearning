import React from 'react'
import Pagehdr from '../Component/props/pagehdr'
import Servisesc from '../Component/Servisesc'
import Aboutc from '../Component/Aboutc'
import Team from '../Component/Team'

function About() {
    return (
    <>
    <Pagehdr hl="ABOUT US" url="About"/>
    <Servisesc/>
    <Aboutc/>
    <Team/>

    </>    
    )
}

export default About
