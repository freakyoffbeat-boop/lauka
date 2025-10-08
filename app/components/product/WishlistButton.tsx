"use client";

export default function WishlistButton() {
  return (
    <button
      className="btn btn-gold"
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent("chatbox:toast", { detail: "Added to wishlist!" })
        )
      }
    >
      ☆ Add to Wishlist
    </button>
  );
}
