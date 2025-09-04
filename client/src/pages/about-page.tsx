import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 px-4 md:px-8 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-bold">About Carspain</h1>
        <p className="text-muted-foreground mt-4">
          We provide quality car parts and dependable automotive services. Our mission is to
          deliver reliability, transparency, and value to every customer.
        </p>
        <div className="mt-8 rounded-lg border p-6 bg-card">
          <h2 className="text-2xl font-semibold text-green-600">Why Choose Us</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Experienced technicians and friendly support</li>
            <li>Quality parts with fair, upfront pricing</li>
            <li>Fast turnaround and honest recommendations</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}