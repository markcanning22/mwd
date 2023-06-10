import React, { ReactElement } from 'react'
import './App.pcss'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import Projects from '../components/Projects.tsx'

const App: React.FC = (): ReactElement => {
    return (
        <>
            <Header />
            <Projects
                projects={[
                    {
                        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
                        name: 'Joshua Vase',
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
                        name: 'Larkin Plates',
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                        name: 'Fortessa Cloud No 2',
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80',
                        name: 'Astoria Collection',
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80',
                        name: 'Lava Beach Stoneware',
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
                        name: 'Sand Canyon Bowls',
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
                        name: 'Lennon Collection',
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
                        name: 'Mendocino Dinnerware',
                    },
                ]}
            />
            <Footer />
        </>
    )
}

export default App
