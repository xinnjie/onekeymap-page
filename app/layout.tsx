// Root layout - minimal wrapper
// Both /docs and /[lang] routes define their own html/body tags
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
