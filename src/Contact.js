function Contact(props)
{
    return(
        <>
       
        
            <div style={{ display: "flex" }}>
            <img
                src={props.img}
                alt=""
                style={{ borderRadius: "50%", height: 50, width: 50, marginTop: 25 }}
            />
            <div style={{ marginLeft: 13 }}>
                <h4 style={{fontSize: "18px"}}>{props.userName}</h4>
                <p style={{ marginTop: "-22px" }}>{props.location}</p>
            </div>
            <img
                src="dot.jpg"
                alt=""
                style={{
                height: 20,
                width: 20,
                marginLeft: 120,
                marginTop: 40,
                float: "right"
                }}
            />
            </div>
    </>
    );
}

export default Contact;