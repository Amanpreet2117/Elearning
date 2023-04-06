import React from 'react'
import Homec from '../Component/Homec'
import Servisesc from '../Component/Servisesc'
import Aboutc from '../Component/Aboutc'
import Caregiersc from '../Component/Caregiersc'
import Coursesc from '../Component/Coursesc'
import Team from '../Component/Team'
import Testonomialc from '../Component/Testonomialc'
import Caroselhome from '../Component/Caroselhome'



function Home() {
    return (
        <>
        {/* <Caroselhome/> */}
        <Homec/>
        {/* <Testonomialc/> */}

        <Servisesc/>
        <Aboutc/>
        <Caregiersc/>
        <Coursesc/>
        <Team/>
        <Testonomialc/>

        </>
    )
}

export default Home
