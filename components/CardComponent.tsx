import { Card } from 'flowbite-react';
import React from 'react'

type PropsType = {
    description :  string;
    title : string;
    image : string;
}

export default  function CardComponent({description,title,image} : PropsType) {
    
    return (
        <Card className="max-w-sm " imgSrc={image} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal  text-gray-700 dark:text-gray-400" >
            { description}
          </p>
        </Card>
      );
    
}
