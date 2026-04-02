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
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=600&q=80",
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