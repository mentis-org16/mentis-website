export const ACADEMY_GREETING =
  "Assalam-o-Alaikum! Welcome. I'm your Academy Assistant. You can ask me about class timings, subjects, fees, or enrolment.";

export const SUGGESTED_QUESTIONS = [
  "What are your class timings?",
  "Which subjects do you offer?",
  "What are the fees?",
  "How can I enrol?",
  "Do you offer online classes?",
] as const;

const replies = [
  {
    match: /\b(timings?|times?|schedule|hours?|batches?)\b/i,
    text: "A real assistant could show an academy's timetable from information it has approved. This fictional example has no class schedule configured, so please check with the academy you are considering.",
  },
  {
    match:
      /\b(subjects?|courses?|syllabus|curriculum|programmes?|programs?)\b/i,
    text: "An academy can provide its current subjects and courses for an assistant to share. No real programme list is connected to this fictional demo.",
  },
  {
    match: /\b(fees?|prices?|pricing|costs?|charges?|payment|how much)\b/i,
    text: "A deployed assistant could share fee information supplied and approved by the academy. No fee amounts are configured here, so this demo will not guess a price.",
  },
  {
    match:
      /\b(enrol(?:ment)?|enroll(?:ment)?|admissions?|register|registration|join)\b/i,
    text: "An assistant could explain the academy's agreed enquiry or registration steps. This demo does not collect applications or personal details; a real process would be configured with the organisation.",
  },
  {
    match: /\bonline\b|\b(remote|virtual|distance)\b/i,
    text: "An assistant could answer questions about online learning when the academy's real class format and details have been provided. No online-class information is set for this fictional example.",
  },
  {
    match: /\b(location|address|where are you|campus)\b/i,
    text: "A real assistant can share a verified campus address supplied by the academy. This fictional example has no location configured.",
  },
  {
    match: /\b(teacher|teachers|tutor|tutors|faculty|staff)\b/i,
    text: "An assistant can answer questions using staff information the organisation has approved for sharing. No staff profiles or credentials are included in this demo.",
  },
  {
    match: /\b(hello|hi|hey|assalam|salam)\b/i,
    text: "Wa-Alaikum-Assalam! This is an example of how an academy assistant could guide common questions. Try asking about timings, subjects, fees, enrolment, or online learning.",
  },
];

const fallback =
  "I can demonstrate how an academy assistant handles common enquiries. A real assistant can be configured with your organisation's approved information and workflows.";

/** Return an illustrative local response; this function never calls an AI service. */
export function getAcademyAssistantReply(question: string): string {
  const reply = replies.find(({ match }) => match.test(question.trim()));
  return reply?.text ?? fallback;
}
