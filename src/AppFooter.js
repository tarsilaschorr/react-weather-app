import "./AppFooter.css";
export default function AppFooter() {
  return (
    <span>
      {" "}
      This project was coded by{" "}
      <a
        href="https://fervent-brattain-d184df.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Tarsila Schorr
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/tarsilaschorr/react-weather-app"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://amazing-williams-3cff0d.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Netlify
      </a>
    </span>
  );
}
