
function Resume(props) {
  return (
    <div
  className=""
  style={{
    border: ".0625rem solid black",
    margin: "0rem",
    padding: "0rem",
    fontFamily: "Arial, Helvetica, sans-serif",
    display: "flex"
  }}
>
  <div
    style={{
      width: "30%",
      backgroundColor: "darkcyan",
      color: "white",
      paddingLeft: "30px",
      paddingTop: "1.25rem",
      paddingRight:"30px"

    }}
  >
    <h1>{props.name}</h1>
    <div className="skills">
      <h4>Skills</h4>
      <hr />
      <p>{props.skills}</p>
    </div>
    <div className="expertise">
      <h3>INDUSTRIAL EXPERTISE</h3>
      <hr />
      <div>
        <h5>{props.experties1}</h5>
        <div
          className="container"
          style={{
            backgroundColor: "rgb(7, 80, 80)",
            width: "80%",
            borderRadius: 15
          }}
        >
          <div
            className="skill html"
            style={{
              backgroundColor: "rgb(189, 190, 188)",
              color: "white",
              padding: "1%",
              textAlign: "right",
              fontSize: 10,
              borderRadius: 15,
              width: "70%"
            }}
          />
        </div>
      </div>
      <div>
        <h5>{props.experties2}</h5>
        <div
          className="container"
          style={{
            backgroundColor: "rgb(7, 80, 80)",
            width: "80%",
            borderRadius: 15
          }}
        >
          <div
            className="skill html"
            style={{
              backgroundColor: "rgb(189, 190, 188)",
              color: "white",
              padding: "1%",
              textAlign: "right",
              fontSize: 10,
              borderRadius: 15,
              width: "80%"
            }}
          />
        </div>
      </div>
      <div>
        <h5>{props.experties3}</h5>
        <div
          className="container"
          style={{
            backgroundColor: "rgb(7, 80, 80)",
            width: "80%",
            borderRadius: 15
          }}
        >
          <div
            className="skill html"
            style={{
              backgroundColor: "rgb(189, 190, 188)",
              color: "white",
              padding: "1%",
              textAlign: "right",
              fontSize: 10,
              borderRadius: 15,
              width: '90%'
            }}
          />
        </div>
      </div>
    </div>
    <div className="language">
      <h3>Languages</h3>
      <hr />
      <div style={{ display: "flex" }}>
        <h5>{props.language1}</h5>
        <h5 style={{ marginLeft: "1.875rem" }}>
          Native <u>{props.language_percent1}</u>
        </h5>
      </div>
      <div style={{ display: "flex" }}>
        <h5>{props.language2}</h5>
        <h5 style={{ marginLeft: "1.875rem" }}>
          Advanced <u>{props.language_percent2}</u>
        </h5>
      </div>
    </div>
    <div className="qoute">
      <h3>Favourite Quote</h3>
      <hr />
      <h5>
        {props.qoute} <br />  - {props.writer}
      </h5>
    </div>
    <div className="passion">
      <h3>PASSIONS</h3>
      <hr />
      <div style={{ display: "flex" }}>
        <div>{props.Symbol1}</div>
        <div>
          <h5>{props.Passions1}</h5>
          <p style={{ fontSize: 15 }}>{props.aboutpassions1}
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>{props.Symbol2}</div>
        <div>
          <h5>{props.Passions2}</h5>
          <p style={{ fontSize: 15 }}>{props.aboutpassions2}
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>{props.Symbol3}</div>
        <div>
          <h5>{props.Passions3}Horse-riding & Spending time in nature</h5>
          <p style={{ fontSize: 15 }}>{props.aboutpassions3}
          </p>
        </div>
      </div>
    </div>
    <div className="footer" style={{ paddingTop: 100 }}>
      <div style={{ display: "flex" }}>
        <h6>Powered by</h6>
        <p>♾️</p>
        <h4>{props.poweredBy}</h4>
      </div>
    </div>
  </div>
  <div
    style={{
      width: "70%",
      backgroundColor: "aliceblue",
      color: "black",
      paddingLeft: "1.25rem",
      paddingTop: "1.25rem",
      paddingRight: "1.5625rem"
    }}
  >
    <h3>Director of Business Development</h3>
    <small>📞{props.contactDetails}</small>
    <br />
    <small>🔗{props.link}  📍{props.location} </small>
    <div className="summery">
      <h2>Summary</h2>
      <hr />
      <p>{props.summery}
      </p>
    </div>
    <div className="achivement">
      <h2>KEY ACHIVEMENT</h2>
      <hr />
      <div style={{ display: "flex" }}>
        <div className="symbol">{props.achivmentSymbol1}</div>
        <p>
          <b>{props.achivementName1}</b>
          <br />{props.achivmentDetails1}
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div className="symbol">{props.achivmentSymbol2}</div>
        <p>
          <b>{props.achivementName2}</b>
          <br />{props.achivmentDetails2}
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div className="symbol">{props.achivmentSymbol3}</div>
        <p>
          <b>{props.achivementName3}</b>
          <br />{props.achivmentDetails3}
        </p>
      </div>
    </div>
    <div className="experience">
      <h2>EXPERIENCE</h2>
      <hr />
      <div>
        <div style={{ display: "flex" }}>
          <h4>{props.designation1}</h4>
          <p style={{ paddingLeft: 250 }}>
            <small>{props.experienceYear1} </small>
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "-25px" }}>
          <h4 style={{ color: "darkcyan" }}>{props.company1}</h4>
          <p style={{ paddingLeft: 350 }}>
            <small>{props.location1}</small>
          </p>
        </div>
        <p>
          <small>{props.Details1}
          </small>
        </p>
        <ul>
          <li>
            <p>
              <small>{props.point11}

              </small>
            </p>
          </li>
          <li>
            <p>
              <small>{props.point12}
              </small>
              !
            </p>
          </li>
          <li>
            <p>
              <small>{props.point13}

              </small>
            </p>
          </li>
        </ul>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <h4>{props.designation2}</h4>
          <p style={{ paddingLeft: 250 }}>
            <small> {props.experienceYear2}</small>
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "-25px" }}>
          <h4 style={{ color: "darkcyan" }}>{props.company2}</h4>
          <p style={{ paddingLeft: 300 }}>
            <small>{props.location1}</small>
          </p>
        </div>
        <p>
          <small>{props.Details2}
          </small>
        </p>
        <ul>
          <li>
            <p>
              <small>{props.point21}

              </small>
            </p>
          </li>
          <li>
            <p>
              <small>{props.point22}
              </small>
              !
            </p>
          </li>
          <li>
            <p>
              <small>{props.point23}

              </small>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div className="education">
      <h2>Education</h2>
      <hr />
      <div style={{ display: "flex" }}>
        <h4>{props.program1}</h4>
        <p style={{ paddingLeft: 250 }}>
          <small> {props.academicYear1}</small>
        </p>
      </div>
      <div style={{ display: "flex", marginTop: "-25px" }}>
        <h4 style={{ color: "darkcyan" }}>{props.university1}</h4>
      </div>
      <div style={{ display: "flex" }}>
        <h4>{props.program2}</h4>
        <p style={{ paddingLeft: 250 }}>
          <small> {props.academicYear2}</small>
        </p>
      </div>
      <div style={{ display: "flex", marginTop: "-25px" }}>
        <h4 style={{ color: "darkcyan" }}>{props.university2}</h4>
      </div>
    </div>
  </div>
</div>

  );
}

export default Resume;
