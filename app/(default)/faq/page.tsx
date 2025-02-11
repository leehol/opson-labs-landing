export const metadata = {
  title: "Faq - Creative",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";

export default function Faq() {
  const faqs = [
    {
      title: "When the software will be released?",
      text: "We are launching the first week in January, will have pilot users end of 2023, all users are invitation only.",
      active: false,
    },
    {
      title:
        "Are there any limits to the number of exports on the datatable?",
      text: "Exports is unlimited",
      active: false,
    },
    {
      title: "Do you provide any support?",
      text: "We are enterprise level software, support via text/phone/email are 24/7 available.",
      active: false,
    },
    {
      title: "What does the term “per software” mean in the License?",
      text: "We'll provide customized solutions for each license, include but not limited to customized integrations and models.",
      active: false,
    },
    {
      title: "How does billing work?",
      text: "We do annually billing.",
      active: false,
    },
    {
      title: "What is your cancellation or refund policy?",
      text: "The product is available for cancellation for the first 3 months, afterwards it's not refundable.",
      active: false,
    },
  ];

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              className="mb-12 md:mb-20"
              title="Let's talk about software"
              description="Here we provide answers for the most common questions."
            >
              Quick Answers
            </PageHeader>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-1">
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
