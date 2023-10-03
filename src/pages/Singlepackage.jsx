import React from 'react'
import { useParams } from 'react-router-dom'

const Singlepackage = () => {
    const{id}=useParams()
  return (
    <div> {id}
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur rem deleniti ex error alias modi nemo rerum dolorum illo quae, asperiores magni aut voluptate molestiae. Quas voluptatem molestiae a totam consequatur tempora vitae culpa modi, consequuntur numquam, ad, ratione aspernatur adipisci? Repellat culpa debitis quam, vitae voluptatum voluptatibus velit.
    </p>
    </div>
  )
}

export default Singlepackage