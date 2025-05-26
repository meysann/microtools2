"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

type Props = {
  componentName: string;
};

export default function ToolLoader({ componentName }: Props) {
  const DynamicComponent = useMemo(() => {
    return dynamic(() => import(`@/components/tools/${componentName}`), {
      ssr: false,
    });
  }, [componentName]);

  return <DynamicComponent />;
}
