import Link from "next/link"
import React from "react"
import "./UniversityCourse.css"
const UniversityCourse = ({ item }) => {
  return (
    <>
      <div className="list_of_courses">
        <Link href={{ pathname: `/${item.link}` }}>{item.courseTitle}</Link>
      </div>
    </>
  )
}

export default UniversityCourse
