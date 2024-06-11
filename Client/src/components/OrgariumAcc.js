import { Accordion } from "react-bootstrap";
const OrgariumAcc = ({ event, active, onClick, title }) => {
  return (
    <div className="card mb-20">
      <div className="card-header">
        <Accordion.Toggle
          as="a"
          eventKey={event}
          className="c-pointer"
          aria-expanded={active === event ? "true" : "false"}
          onClick={() => onClick()}
        >
          {title}
        </Accordion.Toggle>
      </div>
      <Accordion.Collapse eventKey={event}>
        <div className="card-body">
          <p>
            CropVigil is an innovative agricultural technology platform specializing in two primary functions: c
            rop disease detection and fruit and vegetable freshness detection. It benefits farmers 
            by providing early detection of crop diseases and helping differentiate between healthy 
            and rotten produce, ultimately leading to healthier yields and increased productivity.
          </p>
        </div>
      </Accordion.Collapse>
    </div>
  );
};
export default OrgariumAcc;
