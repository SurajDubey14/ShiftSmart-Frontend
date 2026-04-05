import React from "react";

const Home = () => {
  return (
    <div className="bg-[var(--color-bg-main)] text-[var(--color-text-normal)]">

      {/* 🔵 HERO SECTION */}
      <section className="bg-[var(--gradient-primary)]  py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Move Smarter with ShiftSmart
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
          Hassle-free shifting services for homes, offices, and more.
        </p>
        <button className="bg-white text-[var(--color-primary)] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Book Your Move
        </button>
      </section>

      {/* ⚪ SERVICES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-(--color-text-heading) mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🏠 Home Shifting</h3>
            <p>Safe and secure relocation for your household items.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🏢 Office Relocation</h3>
            <p>Efficient office moves with minimal downtime.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🚚 Vehicle Transport</h3>
            <p>Reliable transport for your cars and bikes.</p>
          </div>

        </div>
      </section>

      {/* 🔵 FEATURES */}
      <section className="bg-(--color-bg-section) py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-(--color-text-heading) mb-10">
            Why ShiftSmart?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-5 rounded-xl shadow">
              <p className="font-semibold">⚡ Fast Service</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <p className="font-semibold">💰 Affordable</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <p className="font-semibold">🔒 Safe & Secure</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <p className="font-semibold">📍 Live Tracking</p>
            </div>

          </div>
        </div>
      </section>

      {/* ⚪ HOW IT WORKS */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-(--color-text-heading) mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div>
            <div className="text-4xl mb-3">1️⃣</div>
            <h3 className="font-semibold mb-2">Book Service</h3>
            <p>Tell us your moving details.</p>
          </div>

          <div>
            <div className="text-4xl mb-3">2️⃣</div>
            <h3 className="font-semibold mb-2">Pack & Move</h3>
            <p>We handle packing and transportation.</p>
          </div>

          <div>
            <div className="text-4xl mb-3">3️⃣</div>
            <h3 className="font-semibold mb-2">Relax</h3>
            <p>Enjoy a stress-free moving experience.</p>
          </div>

        </div>
      </section>

      {/* 🔵 CTA */}
      <section className="bg-(--gradient-primary)  py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Shift?
        </h2>
        <p className="mb-6 opacity-90">
          Let us make your move simple and stress-free.
        </p>
        <button className="bg-white text-(--color-primary) px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* ⚪ FOOTER */}
      <footer className="bg-(--color-bg-card) py-6 text-center border-t border-(--color-border)">
        <p className="text-(--color-text-muted)">
          © {new Date().getFullYear()} ShiftSmart. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default Home;