import React from 'react'

// import component
import ProjectList from '@/components/ProjectList'
import Link from 'next/link'
import Layout from '@/components/Layout'

const Portfolio = () => {
    return (
        <Layout>
            <div className="container mx-auto overflow-hidden">
                <div className="text-center">
                    <h2 className="section-title">
                        Mes derniers <span className="gradient__text">projets</span> 🖥️
                    </h2>
                    <ProjectList />

                    <Link href="https://github.com/samuelndjouli997" target="_blank" className="underline">Voir mon Github</Link>
                </div>
            </div>

        </Layout>

    )
}

export default Portfolio