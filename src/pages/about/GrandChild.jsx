import React, {useContext} from 'react'
import { Context } from './Discovery'

const GrandChild = () => {
    const data = useContext(Context)
    console.log(data);
    
  return (
    <div>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nulla, asperiores nesciunt quis magni vitae illum quos maiores a iusto placeat dolorum quae quaerat dolores repudiandae. Veniam ratione aliquid minus illum deserunt nam voluptas laborum ipsa qui consequuntur adipisci reiciendis ducimus maxime quae, deleniti, eaque voluptates non, voluptatibus veritatis. Neque quasi velit illum corporis, fugit minus mollitia inventore aperiam, ratione maiores, saepe corrupti. Voluptate, harum iusto molestias deleniti quia odit eligendi assumenda dolorem. Nesciunt pariatur numquam ex, alias eveniet tempora iste expedita recusandae error omnis hic? Quis qui optio corrupti ducimus debitis deserunt non ea culpa nemo! Repudiandae, aperiam architecto!</p>
    </div>
  )
}

export default GrandChild