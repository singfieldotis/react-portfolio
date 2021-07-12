import React from "react";

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/SingfieldOtis",
    },
    {
      name: "fab fa-linkedin",
      link: "www.linkedin.com/in/singfieldotis",
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/15142390/bigo",
    },
  ];

  return (
    <section>
      <footer className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            {icons.map((icon) => (
              <a
                href={icon.link}
                key={icon.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={icon.name}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
