"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Send } from "lucide-react";
import {
  ACADEMY_GREETING,
  getAcademyAssistantReply,
  SUGGESTED_QUESTIONS,
} from "@/lib/academy-assistant";
import { ASSISTANT_ENQUIRY_MESSAGE, getWhatsAppHref } from "@/lib/whatsapp";

type ChatRole = "assistant" | "visitor";
type ChatMessage = { id: number; role: ChatRole; text: string };

export function AcademyAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, role: "assistant", text: ACADEMY_GREETING },
  ]);
  const nextId = useRef(1);
  const latestMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length <= 1) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    latestMessageRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "end",
    });
  }, [messages]);

  function sendQuestion(question: string) {
    const text = question.trim();
    if (!text) return;

    const visitorId = nextId.current;
    const assistantId = visitorId + 1;
    nextId.current += 2;
    setMessages((current) => [
      ...current,
      { id: visitorId, role: "visitor", text },
      {
        id: assistantId,
        role: "assistant",
        text: getAcademyAssistantReply(text),
      },
    ]);
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendQuestion(input);
  }

  return (
    <section
      className="assistant-section"
      aria-labelledby="assistant-title"
      id="assistant-demo"
    >
      <div className="container assistant-layout">
        <div className="assistant-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> Interactive example
          </p>
          <h2 id="assistant-title">
            See what an assistant could do <em>for your business.</em>
          </h2>
          <p className="assistant-intro">
            Explore a demonstration of an assistant designed to answer common
            questions for an academy. Similar experiences can be tailored to an
            organisation&apos;s services and workflows.
          </p>
          <p className="assistant-disclosure">
            <strong>Demonstration only.</strong> The fictional academy and all
            replies are examples—not a live WhatsApp conversation, a production
            AI, or a connection to student records.
          </p>
          <div className="assistant-cta">
            <p>
              An assistant can use information your organisation approves, with
              its limits and any integrations scoped first.
            </p>
            <a
              className="button button-dark"
              href={getWhatsAppHref(ASSISTANT_ENQUIRY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Build an assistant for my business{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          className="assistant-demo"
          aria-label="Academy Assistant local demo"
        >
          <header className="assistant-demo-header">
            <div className="assistant-avatar" aria-hidden="true">
              A
            </div>
            <div className="assistant-identity">
              <h3>Academy Assistant</h3>
              <p>Fictional academy · Example only</p>
            </div>
            <span className="assistant-demo-badge">DEMO</span>
          </header>

          <div
            className="assistant-chat-log"
            role="log"
            aria-label="Academy Assistant demonstration conversation"
            aria-live="polite"
            aria-relevant="additions text"
            aria-atomic="false"
          >
            {messages.map((message) => (
              <article
                className={`assistant-message assistant-message--${message.role}`}
                key={message.id}
              >
                <span className="assistant-message-speaker">
                  {message.role === "assistant" ? "Academy Assistant" : "You"}
                </span>
                <p>{message.text}</p>
              </article>
            ))}
            <div ref={latestMessageRef} aria-hidden="true" />
          </div>

          <div className="assistant-compose-area">
            <div
              className="assistant-suggestions"
              aria-label="Suggested questions"
            >
              {SUGGESTED_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
            <form className="assistant-compose" onSubmit={handleSubmit}>
              <label className="visually-hidden" htmlFor="assistant-question">
                Ask the Academy Assistant a question
              </label>
              <input
                autoComplete="off"
                id="assistant-question"
                maxLength={240}
                onChange={(event) => setInput(event.currentTarget.value)}
                placeholder="Ask about timings, subjects, fees…"
                type="text"
                value={input}
              />
              <button
                aria-label="Send question"
                disabled={!input.trim()}
                type="submit"
              >
                <Send size={17} aria-hidden="true" />
              </button>
            </form>
            <p className="assistant-local-note">
              Replies are examples generated in this page. Nothing is sent or
              saved; do not enter real student or sensitive information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
