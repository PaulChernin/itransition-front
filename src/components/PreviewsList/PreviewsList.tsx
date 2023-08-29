import PreviewCard from "./PreviewCard"
import { Preview } from "./types/Preview"

type PreviewsListProps = {
    previews: Array<Preview>
}

const PreviewsList = ({ previews }: PreviewsListProps) => {
    return <>
        <div>
            {previews.map(preview =>
                <PreviewCard
                    preview={preview}
                    key={preview.id}
                />
            )}
        </div>
    </>
}

export default PreviewsList