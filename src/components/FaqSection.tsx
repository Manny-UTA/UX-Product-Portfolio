'use client';
import { useState } from 'react';

const faqs = [
  { question: "Did you go to school for UX?", answer: "I’m self-taught through bootcamps, courses, and hands-on practice." },
  { question: "What is your design and development process like?", answer: "It’s iterative, research-driven, and prototype-heavy. I ideate, test, refine, and ship." },
  { question: "Do you have any certifications?", answer: "Yes! I’ve completed UX courses and product design bootcamps." },
  { question: "Where do you work?", answer: "Currently freelancing and open to new opportunities." },
  { question: "Where are you based in?", answer: "I'm based in [Your City], but I work remotely." },
  { question: "Why should I bother reading this?", answer: "Because you're curious—and I value transparency." },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => toggle(index)}>
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
