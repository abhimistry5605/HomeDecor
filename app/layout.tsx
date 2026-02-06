export const metadata = {
  title: 'Ravi Trading - Luxury Furniture Tailored For You',
  description: 'Realize your unique interior vision with Ravi Trading\'s bespoke luxury furnishings.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/CSS/style-modern.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
