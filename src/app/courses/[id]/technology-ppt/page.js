"use client"
import BreadCrum from '@/components/breadCrum/BreadCrum'
import React from 'react'
import styles from './technology-ppt.module.css'
import withAuth from '@/utils/auth'
const Technology_ppt = () => {
    return (<>
        <BreadCrum breadHeading="Technology PPT" pageName=" Home " subPage="Technology PPT"/>
        <section className={styles.technology_section}>
            <div className={styles.progress_row}>
                <div className={styles.text_area}>
                    4.Technolody &gt; Technolody PPT
                </div>
                <div className={styles.status_container}>
                    <div className={styles.status}> in progress </div>
                </div>
            </div>
            <div className={styles.files}>
                <div className={styles.download_area}>
                    <div>
                        <div> <i className="fa-solid fa-file-pdf fa-4x"></i> </div>
                        <div className={styles.tech}>
                            <span> Technology PPT </span>
                        </div>
                        <div className={styles.files_area}>
                            <div> <i className={`fa-solid fa-hard-drive ${styles.drive}`}></i> <span> 3.36 MB </span> </div>
                            <div> <i className="fa-regular fa-file"></i> <span> 1 file(s) </span> </div>
                        </div>
                    </div>
                    <div>
                        <button className={styles.pdf_btn}>  View Full PDF </button>
                    </div>
                </div>
                <div className={styles.download}>
                    <button className={styles.download_btn}> download </button>
                </div>
            </div>
            <hr />
            <div className={styles.btn_area}>
                <div>
                    <button className={styles.lesson_btn}> <i className={`fa-solid fa-chevron-left ${styles.icon02}`}></i>  <span className={styles.controls}> Previous Lesson </span> </button>
                </div>
                <div>
                    <span className={styles.course}>
                        Back to Course
                    </span>
                </div>
                <div>
                    <button className={styles.status_btn}> Mark Complete and proceed  <i className="fa-solid fa-check"></i></button>
                </div>
            </div>
        </section>
        </>
    )
}

export default withAuth(Technology_ppt);