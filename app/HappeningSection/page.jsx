"use client"
import { useState } from "react";

const events = [
  {
    id: 1,
    manager: "Sarah Mitchell",
    market: "Downtown Central",
    event: "Visit to Houston Zoo",
    date: "April 18, 2026",
    status: "Upcoming",
    badge: "Featured",
    accent: "linear-gradient(90deg, #f59e0b, #ef4444)",
    image: "https://market-star-spotlight.vercel.app/assets/event3-CVwxMLHU.jpg",
  },
  {
    id: 2,
    manager: "James Okafor",
    market: "Westfield Plaza",
    event: "Visit to Houston Zoo",
    date: "April 22, 2026",
    status: "Open",
    badge: "Group",
    accent: "linear-gradient(90deg, #6366f1, #8b5cf6)",
    image: "https://market-star-spotlight.vercel.app/assets/event1-DQM4rcbI.jpg",
  },
  {
    id: 3,
    manager: "Priya Nair",
    market: "Northgate Hub",
    event: "Visit to Houston Zoo",
    date: "May 3, 2026",
    status: "Upcoming",
    badge: "Team",
    accent: "linear-gradient(90deg, #10b981, #059669)",
    image: "https://market-star-spotlight.vercel.app/assets/event1-DQM4rcbI.jpg",
  },
  {
    id: 4,
    manager: "Carlos Rivera",
    market: "Eastside Market",
    event: "Visit to Houston Zoo",
    date: "May 10, 2026",
    status: "Open",
    badge: "VIP",
    accent: "linear-gradient(90deg, #06b6d4, #0284c7)",
    image: "data:image/jpeg;base64,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",
  },
];

function EventCard({ card, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const emojis = ["🦁", "🐘", "🐾", "🦒"];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
        border: hovered ? "1px solid rgba(245,158,11,0.4)" : "1px solid rgba(255,255,255,0.1)",
        borderRadius: 20,
        padding: "1.75rem",
        position: "relative",
        overflow: "hidden",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
        cursor: "pointer",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 3,
          background: card.accent,
          borderRadius: "20px 20px 0 0",
        }}
      />

      {/* Image */}
      <div
        style={{
          width: "100%",
          height: 140,
          borderRadius: 12,
          marginBottom: "1.25rem",
          position: "relative",
          overflow: "hidden",
          background: "rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 48,
        }}
      >
        {!imgError ? (
          <img
            src={card.image}
            alt={card.event}
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          emojis[index]
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 10, left: 10,
            background: "rgba(245,158,11,0.9)",
            color: "#1a0a00",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: 1,
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: 999,
          }}
        >
          {card.badge}
        </div>
      </div>

      {/* Rows */}
      {[
        { icon: "👤", label: "Manager", value: card.manager },
        { icon: "🏪", label: "Market", value: card.market },
        { icon: "🦁", label: "Event", value: card.event },
        { icon: "📅", label: "Date", value: card.date },
      ].map((row) => (
        <div key={row.label} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
          <div
            style={{
              width: 28, height: 28, flexShrink: 0,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13,
            }}
          >
            {row.icon}
          </div>
          <div>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: 1.5, textTransform: "uppercase", margin: "0 0 2px" }}>
              {row.label}
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.88)", margin: 0 }}>
              {row.value}
            </p>
          </div>
        </div>
      ))}

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "1rem 0" }} />

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          style={{
            fontSize: 11,
            padding: "4px 12px",
            borderRadius: 999,
            fontWeight: 500,
            ...(card.status === "Upcoming"
              ? { background: "rgba(245,158,11,0.15)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.3)" }
              : { background: "rgba(16,185,129,0.15)", color: "#34d399", border: "1px solid rgba(16,185,129,0.3)" }),
          }}
        >
          {card.status}
        </span>
        <div
          style={{
            width: 30, height: 30,
            background: hovered ? "rgba(245,158,11,0.2)" : "rgba(255,255,255,0.07)",
            border: hovered ? "1px solid rgba(245,158,11,0.4)" : "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: hovered ? "#f59e0b" : "rgba(255,255,255,0.5)",
            fontSize: 14,
            transition: "all 0.2s",
          }}
        >
          →
        </div>
      </div>
    </div>
  );
}

export default function Happening() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        background: "linear-gradient(135deg, #0a1628 0%, #0d2240 50%, #0a1628 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "relative",
          padding: "3rem 3rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: 48, height: 48,
            background: "linear-gradient(135deg, #f59e0b, #ef4444)",
            borderRadius: 12,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22,
            flexShrink: 0,
          }}
        >
          🎉
        </div>
        <div>
          <h1
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "2.4rem",
              fontWeight: 600,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Happening
          </h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "4px 0 0", letterSpacing: 2, textTransform: "uppercase" }}>
            Upcoming Manager Events
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          padding: "2.5rem 3rem 3rem",
          position: "relative",
        }}
      >
        {events.map((card, index) => (
          <EventCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </div>
  );
}