import emailjs from "emailjs-com";

export const sendEmail = async (name: string, email: string, message: string) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: name,
      reply_to: email,
      message: message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};
