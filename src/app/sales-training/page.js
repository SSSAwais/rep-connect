"use client"
import React from 'react';
import styles from './sales-training.module.css'
import BreadCrum from '@/components/breadCrum/BreadCrum';
import withAuth from '@/utils/auth';
const page = () => {
  return (
    <>
      <BreadCrum breadHeading="Sales Training Presentation" pageName="Home" subPage="Sales Training Presentation" />
      <div className={styles.video_container}>
        <div className={styles.video_heading} >
          ENT Lunch Deck Breakdown by Rick Martin
        </div>
        <div className={styles.video}>
          <iframe src="https://player.vimeo.com/video/676361133?h=7d6bd70675" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </div>
      <div className={styles.video_container}>
        <div className={styles.video_heading} >
          Urology Lunch Deck Breakdown by Rick Martin
        </div>
        <div className={styles.video}>
          <iframe src="https://player.vimeo.com/video/676361133?h=7d6bd70675" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default withAuth(page);