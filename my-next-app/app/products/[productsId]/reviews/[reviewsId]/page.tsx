// export default function ReviewId({ params }: { params: { productsId: string; reviewsId: string } }) {

//     return <h1 className="text-4xl font-bold text-black-500"> {params.reviewsId} from Product {params.productsId} </h1>;
// }


export default async function ReviewId({
    params,
  }: {
    params: { productsId: string; reviewsId: string };
  }) {
    // Await params usage to ensure it's resolved
    const { productsId, reviewsId } = await Promise.resolve(params);
    const num = Math.random();
    console.log('num', num)
    if(num < 0.5){
      throw new Error('Num less han 0.5 is not acceptable')
    }
    return (
      <h1 className="text-4xl font-bold text-black-500">
        {reviewsId} from Product {productsId}
      </h1>
    );
  }
  