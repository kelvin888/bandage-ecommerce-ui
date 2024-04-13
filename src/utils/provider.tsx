"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";

function Providers({ children }: React.PropsWithChildren): React.JSX.Element {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <ReduxProvider store={store}>
                    {children}
                </ReduxProvider>
            </QueryClientProvider >
        </ThemeProvider>
    );
}

export default Providers;