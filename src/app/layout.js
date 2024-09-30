"use client";

import localFont from "next/font/local";
import "./globals.css";
import Cursor from './components/Cursor';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
