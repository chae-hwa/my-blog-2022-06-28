import { Link } from "gatsby";
import React from "react";

function AboutPage() {
  return (
    <main>
      <title>자기소개</title>

      <div style={{ display: "flex", gap: 10 }}>
        <Link to="/">홈</Link>
        <Link to="/about">어바웃</Link>
      </div>

      <h1>자기소개 페이지 입니다.</h1>
    </main>
  );
}

export default AboutPage;