const BUBBLES = [
  { left: "6%", size: 14, delay: 0, duration: 14 },
  { left: "14%", size: 8, delay: 2.5, duration: 11 },
  { left: "22%", size: 20, delay: 5, duration: 16 },
  { left: "34%", size: 12, delay: 1, duration: 13 },
  { left: "46%", size: 16, delay: 3.5, duration: 15 },
  { left: "58%", size: 7, delay: 6, duration: 12 },
  { left: "68%", size: 22, delay: 4, duration: 17 },
  { left: "78%", size: 11, delay: 7.5, duration: 12 },
  { left: "88%", size: 14, delay: 2, duration: 14 },
  { left: "95%", size: 6, delay: 5.5, duration: 11 },
];

export default function Bubbles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: b.left,
            bottom: "-40px",
            width: `${b.size}px`,
            height: `${b.size}px`,
            animation: `bubble ${b.duration}s ease-in ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}