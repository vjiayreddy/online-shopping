import ThemeRegistry from "@/theme/themeRegistry";
import "./globals.scss";
import NextAuthSessionProvider from "./api/auth/[...nextauth]/providers/sessionProvider";
import NextThemeProvider from "@/theme/nextThemeProvider";
import { ReduxStateProviders } from "@/redux/provider";
import MainContainerComponent from "@/components/utils/mainComponent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxStateProviders>
          <NextAuthSessionProvider>
            <NextThemeProvider>
              <ThemeRegistry>
                <MainContainerComponent>{children}</MainContainerComponent>
              </ThemeRegistry>
            </NextThemeProvider>
          </NextAuthSessionProvider>
        </ReduxStateProviders>
      </body>
    </html>
  );
}
