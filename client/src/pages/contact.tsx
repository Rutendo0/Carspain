import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 px-4 md:px-8 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground mt-3">
          Have questions or need a quote? Send us a message and we’ll respond promptly.
        </p>

        <form className="mt-8 grid gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}