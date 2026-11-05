import "./globals.css";

;

export const metadata = {
  title: "Cardápio - Restaurante",
  description: "Cardápio do nosso restaurante",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
