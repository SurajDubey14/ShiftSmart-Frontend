import React from "react";

const About = () => {
  return (
    <div className="w-full bg-(--color-bg-main) text-(--color-text-normal)">

      {/* 🔵 HERO SECTION */}
      <section className="bg-(--gradient-primary)  py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ShiftSmart
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Move Smarter, Live Better.
        </p>
      </section>

      {/* ⚪ ABOUT CONTENT */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-(--color-text-heading) mb-4">
            Who We Are
          </h2>
          <p className="mb-4">
            ShiftSmart is your trusted partner for smooth and hassle-free
            relocation. Whether you're moving homes, offices, or goods, we
            simplify the entire process with smart solutions and reliable
            services.
          </p>
          <p>
            Our mission is to make shifting stress-free, efficient, and
            affordable — so you can focus on what truly matters.
          </p>
        </div>

        {/* Right */}
        <div className="bg-[var(--color-bg-card)] shadow-xl rounded-2xl p-6 border border-[var(--color-border)]">
          <h3 className="text-xl font-semibold mb-4 text-[var(--color-text-heading)]">
            Why Choose Us?
          </h3>
          <ul className="space-y-3">
            <li>✅ Fast & Reliable Service</li>
            <li>✅ Affordable Pricing</li>
            <li>✅ Verified Movers</li>
            <li>✅ Real-Time Tracking</li>
            <li>✅ 24/7 Customer Support</li>
          </ul>
        </div>
      </section>

      {/* 🔵 FEATURES / VALUES */}
      <section className="bg-[var(--color-bg-section)] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          <h2 className="text-3xl font-bold text-[var(--color-text-heading)] mb-10">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p>We ensure secure and dependable relocation services.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
              <p>Smart planning for faster and smoother shifting.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p>Your satisfaction is our top priority.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ⚪ CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[var(--color-text-heading)] mb-4">
          Ready to Move?
        </h2>
        <p className="mb-6 text-[var(--color-text-muted)]">
          Let ShiftSmart handle your move with ease.
        </p>
        <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-3 rounded-lg transition">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default About;