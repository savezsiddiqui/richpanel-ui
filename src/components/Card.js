import React from 'react'

const cardStyle = {
    border: '0.1rem solid #e0e0e0',
    width: '18rem',
    borderRadius: '8px',
    padding: '0.5rem',
    margin: '0.5rem',
    fontSize: '0.8rem',
    boxShadow: '0 0 2px #eeeeee'
}

const Card = ({ name, body }) => {

    if (name.length > 26)
        name = name.slice(0, 26) + '...'

    if (body.length > 58)
        body = body.slice(0, 58) + '...'

    return (
        <div style={cardStyle}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                    <i className="fas fa-user-circle fa-2x"></i>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0 1.5rem' }}>
                    <div><b> {name} </b></div>
                    <div style={{
                        maxHeight: '2.4rem',
                        overflow: 'hidden'
                    }}> {body} </div>
                </div>
            </div>
        </div>
    )
}

export default Card
