export default function HomeBanner() {
  return (
    <section
      style={{
        height: "80vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        paddingLeft: "100px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Welcome to ECOM
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            marginBottom: "25px",
          }}
        >
          Discover quality products, exclusive deals, and a seamless
          shopping experience. Everything you need is just a click away.
        </p>

        <button
          style={{
            backgroundColor: "#7c3aed",
            color: "white",
            border: "none",
            padding: "14px 30px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Explore Products
        </button>
      </div>
    </section>
  );
}