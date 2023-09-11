const Footer = () => {
  return (
    <section className="font-semibold text-base h-auto w-full bg-yellow-400 flex flex-col items-center justify-center px-4 py-12 ">
      <p className=" text-sm text-center text-black md:text-base lg:w-8/12">
        Thank you for making it up to this point. If you have questions
        about any part of this resume, feel free to message me and I&apos;ll
        pleased to answer them. Also, if you have any advice, it will be highly
        appreciated. You can contact me via my social links:
      </p>
      <div className="w-full flex justify-center [&>a]:mx-2 [&>a]:text-black mt-2 md:text-lg">
        <a href="mailto:jorgecarfacpsico@gmail.com">Mail</a>
        <a href="https://github.com/JorgeCarrascoF" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/jorge-carrasco-facundo/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
};

export default Footer;
