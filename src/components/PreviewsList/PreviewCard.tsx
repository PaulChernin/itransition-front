import ProductCard from "../ProductCard/ProductCard"
import { Preview } from "./types/Preview"

type PreviewCardProps = {
    preview: Preview
}

const PreviewCard = ({ preview }: PreviewCardProps) => {
    return <>
        <div>{preview.title}</div>
        <ProductCard product={preview.product} />
    </>
}

export default PreviewCard