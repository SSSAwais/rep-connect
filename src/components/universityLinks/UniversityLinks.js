import Link from "next/link"
import React from "react"

const UniversityLinks = ({ item }) => {
  return (
    <>
      <li>
        <Link
          href={{
            pathname: `/general-traning/${item.link}`,
          }}
        >
          {item.title}
        </Link>
      </li>
    </>
  )
}

export default UniversityLinks
