import React from 'react'
import Card from 'react-bootstrap/Card';
function DepartmentCard({data}) {
  return (
    <div>
          <div>
        <Card className="h-100 shadow-sm border-0" style={{ borderRadius:"12px" }}>
          <Card.Img style={{ height:"16rem", objectFit:"cover" }}
            src={data.img}
          />
          <Card.Body>
            <h4 style={{ fontFamily: "Playfair Display", color: "#1E3A8A" }}> {data.name}</h4>
            <p style={{ color:"#555", fontFamily:"Inter" }}>
              {data.desc}
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default DepartmentCard