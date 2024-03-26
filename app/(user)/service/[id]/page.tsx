
import CardComponent from "../../../../components/CardComponent";

type PropsParams = {
    params: {
        id: number;
    };
    searchParams: any
};

const url = "https://fakestoreapi.com/products/"

export const  Data = async ( id : number, url : string) => {
    const res = await fetch(`${url}${id}`);
    const data = await res.json();
    return data;
}


export default async function Detail(props: PropsParams) {
   const data = await Data(props.params.id,url)
	return (<div className='h-screen grid place-content-center '>
        <CardComponent image={data.image} description={data.description} title={data.title} />
    </div>);
}
