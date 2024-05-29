import React from 'react'

function Images() {
    return (
        <div>
            {Array.from({ length: 20000 }, (_, id) => {
                return <div key={id}>
                    <img width="100px" src="https://images.pexels.com/photos/23644605/pexels-photo-23644605/free-photo-of-a-woman-standing-by-the-water-in-front-of-houses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                </div>
            })}
        </div>
    )
}

export default Images
