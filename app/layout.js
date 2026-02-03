export const metadata = {
  title: 'EduVenture - Transform Learning Into Adventure',
  description: 'Empower students with personalized, interactive learning experiences that adapt to their pace and ignite their curiosity.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
