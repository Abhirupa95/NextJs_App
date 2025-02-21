//setting static meta data
export const metadata = {
    title: "About My Next Docs"
}

export default function DocsSlug({params}: {
    params: {
        slug : string[]
    }
}){
    if(params.slug?.length === 2){
        return (
            <h1 className="text-4xl font-bold text-black-500">Viewing docs for {params.slug[0]} and  {params.slug[1]} </h1>
        )
    } else if(params.slug?.length === 1){
        return <h1 className="text-4xl font-bold text-black-500">Viewing Docs for feature {params.slug[0]}</h1>
    }else{
    return <h2>This is docs slug</h2>

    }
}