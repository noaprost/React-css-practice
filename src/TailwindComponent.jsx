import React from "react";

export default function TailwindComponent() {
  return (
    <div>
      <h1 className="text-center">안녕! 난 Tailwind Test 중이야!</h1>
      {/* bg : background-color 색상은 blue 500 정도로 진하게, rounded : 둥글게, 사이즈는 sm : small로, px : padding을 x축 방향으로, 2단계 정도로 두껍게*/}
      <button className="bg-blue-500 rounded-xl px-2">Button</button>
    </div>
  );
}
