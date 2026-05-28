import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function ContactCta() {
  return (
    <section id="contact" className="bg-gradient-to-r from-violet-600 to-sky-500">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-8 md:flex-row md:items-center">
        <div>
          <h2 className="text-4xl font-black">Ready to Build Your Automation Engine?</h2>
          <p className="mt-2 text-lg">Bring the messy workflow. We’ll map the system, prove the value, and help you ship the first useful automation.</p>
        </div>
        <div className="text-center">
          <Button href="mailto:hello@echomedia.ai?subject=EchoMedia.ai%20Strategy%20Call" variant="outline">
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="mt-3 text-sm">Ask about OpsHelm, automation, or the next build sprint.</p>
        </div>
      </div>
    </section>
  );
}
