"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";

function Providers({ children }: React.PropsWithChildren): React.JSX.Element {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider >
        </ThemeProvider>
    );
}

export default Providers;