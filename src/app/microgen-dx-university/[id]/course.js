"use client";

import { useRouter } from "next/router";
import withAuth from "@/utils/auth";
const CourseVideoPage = () => {
  const router = useRouter();
  const { course } = router.query;
  return (
    <>
      <h3>{course}</h3>
    </>
  );
};

export default withAuth(CourseVideoPage);
