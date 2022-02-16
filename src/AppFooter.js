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
      and is{" "}
      <a
        href="https://github.com/tarsilaschorr/react-weather-app"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://amazing-williams-3cff0d.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        hosted on Netlify
      </a>
    </span>
  );
}
