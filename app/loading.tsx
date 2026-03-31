export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)' }} >
      <div className="text-center">
        <div className="font-display crt-glow mb-4" style={{ fontSize: '3rem', color: 'var(--accent)', fontFamily: 'Bebas Neue, cursive', }} >
          Loading
          <span className="blink-cursor" />
        </div>
        <div className="text-[0.6rem] tracking-widest uppercase" style={{ color: 'rgba(245,240,232,0.3)', fontFamily: 'Space Mono' }}>
          Please wait...
        </div>
      </div>
    </div>
  );
}
