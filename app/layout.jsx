import "./globals.css";

export const metadata = {
  title: "Pro Trading Insights",
  description: "Daily market insights, trade plans, and risk-focused education for XAUUSD traders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
