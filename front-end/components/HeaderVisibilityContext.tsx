'use client';

// Koordinasi visibilitas Header global antar-komponen.
// Default-nya no-op, jadi halaman yang TIDAK dibungkus provider ini tetap
// menampilkan Header seperti biasa. Hanya halaman yang membungkus dengan
// <HeaderVisibilityProvider> (mis. /renjana-cita) yang bisa menyembunyikan
// Header saat scroll mencapai tab departemen.

import { createContext, useContext, useState, type ReactNode } from 'react';

interface HeaderVisibility {
  /** Saat true, Header global menyembunyikan diri dengan animasi slide-up. */
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
}

const HeaderVisibilityContext = createContext<HeaderVisibility>({
  hidden: false,
  setHidden: () => {},
});

export function HeaderVisibilityProvider({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);
  return (
    <HeaderVisibilityContext.Provider value={{ hidden, setHidden }}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
}

export function useHeaderVisibility() {
  return useContext(HeaderVisibilityContext);
}
