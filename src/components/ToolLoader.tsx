"use client";

import dynamic from "next/dynamic";

type Props = {
  componentName: string;
};

export default function ToolLoader({ componentName }: Props) {
  const DynamicTool = dynamic(
    () => import(`@/components/tools/${componentName}`),
    {
      ssr: false,
    }
  );

  return <DynamicTool />;
}
