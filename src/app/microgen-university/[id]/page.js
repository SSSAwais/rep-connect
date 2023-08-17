"use client"
import BreadCrum from '@/components/breadCrum/BreadCrum'
import React from 'react'
import styles from '../microgen-university.module.css'
import withAuth from '@/utils/auth'
const Page = ({ params }) => {
    let { id } = params
    return (
        <>
            <BreadCrum breadHeading="MicroGen-dx-University" pagess />
            <div className='container-xxl'>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className={styles.content}> New Report Guide Trifold </div>
                        <div className={styles.content_container}>
                            <div> {id} </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withAuth(Page);