import * as prismic from "@prismicio/client"
import sm from "../sm.json"
import SliceZone from "@prismicio/react"
import { PrismicRichText } from "@prismicio/react"

const Page = ({page}) => {
    const data = page.data
    return (
        <div>
            <PrismicRichText field={data.my_title} />
        </div>
    )
}

export default Page

export const getStaticProps = async () => {
    const client = prismic.createClient(sm.apiEndpoint)
    const page = await client.getByUID("pages", "test")

    return {
        props : {
            page
        }
    }
}