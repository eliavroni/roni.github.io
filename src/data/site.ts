export const SITE = {
  name: 'רוני אליאב',
  role: 'מרפאה בעיסוק',
  description:
    'רוני אליאב, מרפאה בעיסוק: הדרכת הורים, ויסות רגשי, טיפול בשיטת Cog-Fun לילדים עם ADHD, ליווי אונליין למבוגרים עם ADHD והכשרות למרפאות בעיסוק.',
  email: 'eliavroni@gmail.com',
  whatsapp: '972526888336',
  greeting: 'שלום רוני,\nהגעתי אליך דרך האתר', // start of the pre-drafted WhatsApp message and email body
  contactSubject: 'פנייה מהאתר',
  courseMessage: 'לגבי הקורס למרפאות בעיסוק', // pre-filled WhatsApp message and email subject for course enquiries
};

const waLink = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
const mailLink = (subject: string, body: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const CONTACT = {
  whatsapp: waLink(`${SITE.greeting}.\n`),
  email: mailLink(SITE.contactSubject, `${SITE.greeting}.\n`),
};

export const COURSE_CONTACT = {
  whatsapp: waLink(`${SITE.greeting}, ${SITE.courseMessage}.\n`),
  email: mailLink(SITE.courseMessage, `${SITE.greeting}, ${SITE.courseMessage}.\n`),
};
