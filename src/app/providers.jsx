// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }) {
  return (
    <ChakraProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ChakraProvider>
  );
}
