import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Services() {
  const services = [
    { title: "Diagnostics", desc: "Advanced computer diagnostics to pinpoint issues fast.", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop" },
    { title: "Maintenance", desc: "Oil changes, filters, fluids, and scheduled care.", img: "https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop" },
    { title: "Repairs", desc: "Engine, brakes, suspension, and electrical systems.", img: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=800&auto=format&fit=crop" },
    { title: "Tires & Alignment", desc: "Balancing, rotation, new tires, and alignment.", img: "https://images.unsplash.com/photo-1597764699510-f2810b02a3d0?q=80&w=800&auto=format&fit=crop" },
    { title: "AC Service", desc: "Inspection, recharge, and component replacement.", img: "https://images.unsplash.com/photo-1606229365485-93a3b8c22ef1?q=80&w=800&auto=format&fit=crop" },
    { title: "Detailing", desc: "Interior and exterior detailing to keep it pristine.", img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1b?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 px-4 md:px-8 max-w-6xl mx-auto w-full">
        <section className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl">
            Professional automotive services tailored to keep your vehicle reliable and safe.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
              <div
                key={item.title}
                className="automotive-card rounded-lg border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img src={item.img} alt={item.title} className="h-36 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-green-600">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                  <button className="mt-4 inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-white text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}