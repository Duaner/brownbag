import * as prismic from "@prismicio/client"
import sm from "../sm.json"
import { PrismicRichText, SliceZone } from "@prismicio/react"
import { createClient } from '../prismicio'
import MainNav from "../components/main-nav"

import {components} from "../slices/index"

const endpoint = sm.apiEndpoint

export default function Page({navigation, page}){
    const data = page.data
    return (
        <div>
            <PrismicRichText field={data.my_title} />
            <MainNav Navdata={navigation} />
            <SliceZone slices={data.slices} components={components} />
        </div>
    )
}

export async function getStaticProps({ params }) {
    const client = createClient()

    /*
    const [navigation, mypage] = await Promise.all([
        client.getSingle('main_navigation'),
        client.getByUID('page', params.uid),
      ])
    
      */

      const [navigation, page] = await Promise.all([
        client.getSingle('main_navigation'),
        client.getByUID('pages', params.uid),
      ])
    
    console.log('MY NAV', navigation.data.main_nav);

    return {
        props : {
            navigation,
            page
        }
    }


}

export async function getStaticPaths() {
    const client2 = createClient()
  
    const pages = await client2.getAllByType("pages")

    return {
        paths: pages.map((page) => {
            console.log("mypages", page.uid)
            return {
              params: { uid: page.uid },
            };
          }),
          fallback: false,
        };
  }