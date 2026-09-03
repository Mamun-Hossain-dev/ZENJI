import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const groups = [
  {
    title: "Orders & Shipping",
    questions: [
      { q: "Do you ship Australia-wide?", a: "Yes. Free shipping on all orders over A$100, otherwise A$9.99 flat. Standard delivery takes 5–10 business days." },
      { q: "Do you ship internationally?", a: "Yes. International rates are calculated at checkout based on destination and parcel weight. Customs duties remain the responsibility of the recipient." },
      { q: "Can I change or cancel my order?", a: "We pack drops quickly. Email us within two hours of ordering and we’ll do our best to help, but changes cannot be guaranteed once fulfilment begins." },
      { q: "How do I track my order?", a: "A tracking link is sent by email as soon as your order leaves our studio. Allow up to 24 hours for the carrier status to update." },
    ],
  },
  {
    title: "Stock & Drops",
    questions: [
      { q: "When does my order ship?", a: "In-stock orders leave our studio within 1–3 business days. During launch week, allow an additional two business days due to drop volume." },
      { q: "Will sold-out pieces return?", a: "Most ZENJI pieces are single-run drops and will not be restocked. Follow our socials or join the dispatch list for first access." },
      { q: "How does sizing run?", a: "Our tees use an intentionally oversized unisex cut. Choose your usual size for the intended silhouette or size down for a closer fit." },
    ],
  },
];

export function FaqAccordion() {
  return (
    <div className="space-y-16">
      {groups.map((group, groupIndex) => (
        <section key={group.title}>
          <h2 className="mb-5 border-l-2 border-signal pl-4 font-display text-2xl font-bold uppercase tracking-wide">{group.title}</h2>
          <Accordion type="single" collapsible defaultValue={groupIndex === 0 ? `item-${group.title}-0` : undefined}>
            {group.questions.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${group.title}-${index}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ))}
    </div>
  );
}
