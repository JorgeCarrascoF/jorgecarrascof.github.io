const Footer = () => {
  return (
    <section className="font-semibold text-lg h-auto w-full bg-yellow-400 flex flex-col items-center justify-center p-12 ">
      <p className="w-2/5 text-center text-black">
        Thank you for making it up to this point. If you have questions
        about any part of this resume, feel free to message me and I&apos;ll
        pleased to answer them. Also, if you have any advice, it will be highly
        appreciated. You can contact me via my social links:
      </p>
      <div className="[&>a]:mx-4 [&>a]:text-black mt-4 ">
        <a href="mailto:jorgecarfacpsico@gmail.com">Mail</a>
        <a href="https://github.com/JorgeCarrascoF" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/jorge-carrasco-facundo/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
};

export default Footer;
