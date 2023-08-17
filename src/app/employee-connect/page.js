"use client"
import React from 'react'
import EmployeeConnect from '@/components/Employee-Connect/employee-connect';
import withAuth from '@/utils/auth';
const Page = () => {
  return (
    <div>
        <EmployeeConnect/>
    </div>
  )
}

export default withAuth(Page);